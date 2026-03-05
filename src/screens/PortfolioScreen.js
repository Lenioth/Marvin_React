import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import projeto1 from "../../assets/img/mg_chave.png";
import projeto2 from "../../assets/img/mg_gaiola.png";

export default function PortfolioScreen() {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.title}>Livros</Text>

      {/* CARD 1 */}
      <View style={styles.card}>
        <Image source={projeto1} style={styles.image} />
        <Text style={styles.cardTitle}>Marvin Grinn e o Sangue do Dragão.</Text>
        <Text style={styles.cardDescription}>
          Atividades de incentivo à leitura e criatividade através da saga
          Marvin Grinn.
        </Text>
      </View>

      {/* CARD 2 */}
      <View style={styles.card}>
        <Image source={projeto2} style={styles.image} />
        <Text style={styles.cardTitle}>
          Marvin Grinn e o Labirinto da Mente.
        </Text>
        <Text style={styles.cardDescription}>
          Participação em eventos culturais e oficinas educativas voltadas à
          literatura e criatividade.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0b0f14",
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#1f2a37",
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
    resizeMode: "cover",
  },

  cardTitle: {
    color: "#c9a24c",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  cardDescription: {
    color: "#d1d5db",
    fontSize: 14,
    lineHeight: 20,
  },
});
