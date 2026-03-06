import React from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";

const BOOKS = [
  {
    id: "1",
    title: "Marvin Grinn e a Chave Mestra",
    description: "A aventura começa aqui.",
    cover: require("../../assets/img/Livro_1.png"),
    routeParam: "livro1",
    comingSoon: false,
  },
  {
    id: "2",
    title: "Marvin Grinn e o Segredo da Sereia",
    description: "A aventura começa aqui.",
    cover: require("../../assets/img/Livro_2.png"),
    routeParam: "livro2",
    comingSoon: false,
  },
  {
    id: "3",
    title: "Marvin Grinn e a Gaiola Dourada",
    description: "A aventura começa aqui.",
    cover: require("../../assets/img/Livro_3.png"),
    routeParam: "livro3",
    comingSoon: true,
  },
];

export default function AudiobookScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Pressable
      disabled={item.comingSoon}
      onPress={() =>
        navigation.navigate("AudiobookChapters", {
          bookId: item.routeParam,
          bookTitle: item.title,
        })
      }
      style={({ pressed }) => [
        styles.card,
        pressed && !item.comingSoon && styles.cardPressed,
        item.comingSoon && styles.cardDisabled,
      ]}
    >
      <View style={styles.coverWrapper}>
        <Image
          source={item.cover}
          style={styles.cover}
          blurRadius={item.comingSoon ? 4 : 0}
        />

        {item.comingSoon && (
          <View style={styles.soonOverlay}>
            <Text style={styles.soonText}>Em breve</Text>
          </View>
        )}
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Audiolivros gratuitos</Text>
      <Text style={styles.subtitle}>Escolha um livro para ouvir</Text>

      <FlatList
        data={BOOKS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#0b0f14",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },

  subtitle: {
    color: "#9ca3af",
    marginBottom: 18,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#111827",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#c9a24c",
    overflow: "hidden",
    paddingVertical: 10,
  },

  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },

  cover: {
    width: 85,
    height: 120,
    resizeMode: "contain",
    marginLeft: 10,
  },

  cardContent: {
    flex: 1,
    padding: 14,
    justifyContent: "center",
  },

  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },

  cardDescription: {
    color: "#d1d5db",
    fontSize: 14,
    lineHeight: 20,
  },
  coverWrapper: {
    width: 85,
    height: 120,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  soonOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  soonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",

    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },

  cardDisabled: {
    opacity: 0.85,
  },
});
