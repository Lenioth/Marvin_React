import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export default function ServicosScreen() {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.title}>O Projeto</Text>
      <Text style={styles.subtitle}>
        Conheça mais do nosso projeto a seguir.
      </Text>

      <Text style={styles.sectionTitle}>Apresentação</Text>
      <Text style={styles.text}>
        O projeto tem por objetivo ampliar o acesso à literatura, com foco nos
        livros da Série Marvin Grinn, desenvolvendo ferramentas que revertam em
        visibilidade, inclusão social e acessibilidade.
      </Text>

      <Text style={styles.text}>
        Visibilidade em ações de promoção à literatura nacional; inclusão social
        por meio da distribuição de exemplares físicos e virtuais, além de
        acesso gratuito a plataformas interativas; acessibilidade com exemplares
        em braile, audiodescrição e materiais audiovisuais.
      </Text>

      <Text style={styles.sectionTitle}>Objetivos Culturais</Text>
      <Text style={styles.bullet}>
        • Via website, contendo versão em audiodescrição, totalmente gratuita.
      </Text>
      <Text style={styles.bullet}>
        • Pela impressão de exemplares em braile, com entrega gratuita para
        instituições voltadas ao ensino de pessoas com deficiência visual.
      </Text>
      <Text style={styles.bullet}>
        • Via aplicativo para smartphones, com acesso gratuito.
      </Text>
      <Text style={styles.bullet}>
        • Áreas especiais do aplicativo trarão descrições e curiosidades
        históricas sobre os cenários do livro.
      </Text>
      <Text style={styles.bullet}>
        • Destinação de exemplares impressos para doação a bibliotecas públicas
        e rede de ensino público.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.card,
    padding: spacing.lg,
  },

  title: {
    color: colors.text,
    ...typography.title,
    marginBottom: spacing.xs,
  },

  subtitle: {
    color: colors.textMuted,
    ...typography.body,
    marginBottom: spacing.lg,
  },

  sectionTitle: {
    color: colors.primary,
    ...typography.subtitle,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },

  text: {
    color: colors.textMuted,
    ...typography.body,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },

  bullet: {
    color: colors.textMuted,
    ...typography.body,
    lineHeight: 22,
    marginBottom: spacing.xs,
  },
});
