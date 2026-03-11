import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import projeto1 from "../../assets/img/mg_chave.png";
import projeto2 from "../../assets/img/mg_sereira.png";
import projeto3 from "../../assets/img/mg_gaiola.png";
import projeto4 from "../../assets/img/mg_sangue.png";

import ScreenContainer from "../components/ScreenContainer";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export default function PortfolioScreen() {
  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Livros</Text>

        <View style={styles.card}>
          <Image source={projeto1} style={styles.image} />
          <Text style={styles.cardTitle}>Marvin Grinn e a Chave Mestra.</Text>
          <Text style={styles.cardDescription}>
            Atividades de incentivo à leitura e criatividade através da saga
            Marvin Grinn.
          </Text>
        </View>

        <View style={styles.card}>
          <Image source={projeto2} style={styles.image} />
          <Text style={styles.cardTitle}>
            Marvin Grinn e o Segredo da Sereia.
          </Text>
          <Text style={styles.cardDescription}>
            Atividades de incentivo à leitura e criatividade através da saga
            Marvin Grinn.
          </Text>
        </View>

        <View style={styles.card}>
          <Image source={projeto3} style={styles.image} />
          <Text style={styles.cardTitle}>Marvin Grinn e a Gaiola Dourada.</Text>
          <Text style={styles.cardDescription}>
            Atividades de incentivo à leitura e criatividade através da saga
            Marvin Grinn.
          </Text>
        </View>

        <View style={styles.card}>
          <Image source={projeto4} style={styles.image} />
          <Text style={styles.cardTitle}>
            Marvin Grinn e o Sangue do Dragão.
          </Text>
          <Text style={styles.cardDescription}>
            Participação em eventos culturais e oficinas educativas voltadas à
            literatura e criatividade.
          </Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.xl,
  },

  title: {
    color: colors.text,
    ...typography.title,
    marginBottom: spacing.md,
    textAlign: "center",
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.md,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  image: {
    width: "100%",
    height: 140,
    borderRadius: 12,
    marginBottom: spacing.sm,
    resizeMode: "cover",
  },

  cardTitle: {
    color: colors.primary,
    ...typography.subtitle,
    marginBottom: spacing.xs,
  },

  cardDescription: {
    color: colors.textMuted,
    ...typography.body,
    lineHeight: 20,
  },
});
