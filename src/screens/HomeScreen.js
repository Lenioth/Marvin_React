import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";

import logo from "../../assets/img/logo_mg_new.png";

import MENU_ITEMS from "../data/menu";
import MenuCard from "../components/MenuCard";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

async function openUrl(url) {
  await WebBrowser.openBrowserAsync(url);
}

export default function HomeScreen({ navigation }) {
  const onPressItem = (item) => {
    if (item.type === "external") return openUrl(item.url);
    if (item.type === "screen") return navigation.navigate(item.screen);
  };

  const renderItem = ({ item }) => (
    <MenuCard item={item} onPress={() => onPressItem(item)} />
  );

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={{ height: spacing.sm }} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.sectionTitle}>Acessos</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.footerText}>Desenvolvido por Pubblicità</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    padding: spacing.lg,
    paddingBottom: 40,
    backgroundColor: colors.background,
  },

  header: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: spacing.sm,
  },

  sectionTitle: {
    color: colors.text,
    ...typography.title,
  },

  footer: {
    marginTop: 60,
    alignItems: "center",
  },

  footerText: {
    color: colors.primary,
    ...typography.small,
    opacity: 0.85,
  },
});
