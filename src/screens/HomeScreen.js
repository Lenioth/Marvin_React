import React from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";

import logo from "../../assets/img/logo_mg_new.png";

const ITEMS = [
  {
    id: "1",
    title: "Adquirir Livros Marvin Grinn",
    type: "external",
    url: "https://api.whatsapp.com/send/?phone=555591911219&text=Ol%C3%A1%2C+gostaria+de+entrar+em+contato%21&type=phone_number&app_absent=0",
    emoji: "💬",
  },
  {
    id: "2",
    title: "Projeto Social",
    type: "screen",
    screen: "Servicos",
    emoji: "🤝",
  },
  {
    id: "3",
    title: "Saga",
    type: "screen",
    screen: "Portfolio",
    emoji: "📚",
  },
  {
    id: "4",
    title: "Site",
    type: "external",
    url: "https://www.marvingrinnsocial.com.br/",
    emoji: "🌐",
  },
  {
    id: "5",
    title: "Livros",
    type: "external",
    url: "https://www.marvingrinnsocial.com.br/a-serie/",
    emoji: "📚",
  },
  {
    id: "6",
    title: "Games",
    type: "external",
    url: "https://www.marvingrinnsocial.com.br/jogos",
    emoji: "🎮",
  },
  {
    id: "7",
    title: "Audiolivro",
    type: "screen",
    screen: "Audiobook",
    emoji: "🎧",
  },
];

async function openUrl(url) {
  await WebBrowser.openBrowserAsync(url);
}

export default function HomeScreen({ navigation }) {
  const onPressItem = (item) => {
    if (item.type === "external") return openUrl(item.url);
    if (item.type === "screen") return navigation.navigate(item.screen);
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => onPressItem(item)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <Text style={styles.cardEmoji}>{item.emoji}</Text>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardArrow}>›</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
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
  safe: { flex: 1, backgroundColor: "#0f2e2a" },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 10,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111827",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#c9a24c",
  },

  cardPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },

  cardEmoji: {
    fontSize: 20,
    width: 30,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },

  cardArrow: {
    color: "#c9a24c",
    fontSize: 22,
    marginLeft: 8,
  },

  footer: {
    marginTop: 60,
    alignItems: "center",
  },

  footerText: {
    color: "#c9a24c",
    fontSize: 12,
    opacity: 0.85,
  },
});
