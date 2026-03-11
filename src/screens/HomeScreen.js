import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

import logo from "../../assets/img/logo_mg_new.png";

import MENU_ITEMS from "../data/menu";
import MenuCard from "../components/MenuCard";
import ScreenContainer from "../components/ScreenContainer";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

const { width } = Dimensions.get("window");

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
    <ScreenContainer edges={["top", "bottom"]}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
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
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xl,
    flexGrow: 1,
  },

  header: {
    alignItems: "center",
    marginBottom: spacing.md,
  },

  logo: {
    width: width * 0.5,
    height: width * 0.35,
    resizeMode: "contain",
    marginBottom: 4,
  },

  sectionTitle: {
    color: colors.text,
    ...typography.title,
    textAlign: "center",
  },

  footer: {
    marginTop: spacing.xl,
    alignItems: "center",
    paddingBottom: spacing.md,
  },

  footerText: {
    color: colors.primary,
    ...typography.small,
    opacity: 0.85,
    textAlign: "center",
  },
});
