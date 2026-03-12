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
        accessible={true}
        accessibilityLabel="Lista de livros"
        accessibilityHint="Deslize para ver todos os livros disponíveis"
      >
        <Text
          style={styles.title}
          accessible={true}
          accessibilityRole="header"
          accessibilityLabel="Livros"
        >
          Livros
        </Text>

        <View
          style={styles.card}
          accessible={true}
          accessibilityLabel="Marvin Grinn e a Chave Mestra"
          accessibilityHint="Atividades de incentivo à leitura e criatividade"
        >
          <Image
            source={projeto1}
            style={styles.image}
            accessible={false}
            accessibilityIgnoresInvertColors
          />
          <Text
            style={styles.cardTitle}
            accessible={false}
            importantForAccessibility="no"
          >
            Marvin Grinn e a Chave Mestra.
          </Text>
          <Text
            style={styles.cardDescription}
            accessible={false}
            importantForAccessibility="no"
          >
            Atividades de incentivo à leitura e criatividade através da saga
            Marvin Grinn.
          </Text>
        </View>

        <View
          style={styles.card}
          accessible={true}
          accessibilityLabel="Marvin Grinn e o Segredo da Sereia"
          accessibilityHint="Atividades de incentivo à leitura e criatividade"
        >
          <Image
            source={projeto2}
            style={styles.image}
            accessible={false}
            accessibilityIgnoresInvertColors
          />
          <Text
            style={styles.cardTitle}
            accessible={false}
            importantForAccessibility="no"
          >
            Marvin Grinn e o Segredo da Sereia.
          </Text>
          <Text
            style={styles.cardDescription}
            accessible={false}
            importantForAccessibility="no"
          >
            Atividades de incentivo à leitura e criatividade através da saga
            Marvin Grinn.
          </Text>
        </View>

        <View
          style={styles.card}
          accessible={true}
          accessibilityLabel="Marvin Grinn e a Gaiola Dourada"
          accessibilityHint="Atividades de incentivo à leitura e criatividade"
        >
          <Image
            source={projeto3}
            style={styles.image}
            accessible={false}
            accessibilityIgnoresInvertColors
          />
          <Text
            style={styles.cardTitle}
            accessible={false}
            importantForAccessibility="no"
          >
            Marvin Grinn e a Gaiola Dourada.
          </Text>
          <Text
            style={styles.cardDescription}
            accessible={false}
            importantForAccessibility="no"
          >
            Atividades de incentivo à leitura e criatividade através da saga
            Marvin Grinn.
          </Text>
        </View>

        <View
          style={styles.card}
          accessible={true}
          accessibilityLabel="Marvin Grinn e o Sangue do Dragão"
          accessibilityHint="Participação em eventos culturais e oficinas educativas"
        >
          <Image
            source={projeto4}
            style={styles.image}
            accessible={false}
            accessibilityIgnoresInvertColors
          />
          <Text
            style={styles.cardTitle}
            accessible={false}
            importantForAccessibility="no"
          >
            Marvin Grinn e o Sangue do Dragão.
          </Text>
          <Text
            style={styles.cardDescription}
            accessible={false}
            importantForAccessibility="no"
          >
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
