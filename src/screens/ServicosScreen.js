import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function PortfolioScreen() {
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
        Visibilidade em ações de promoção à literatura nacional. Inclusão social
        por meio da distribuição de exemplares físicos e virtuais, além de
        acesso gratuito a plataformas interativas para ampliar a experiência da
        leitura.
      </Text>

      <Text style={styles.text}>
        Acessibilidade com a confecção de exemplares em braile, versões com
        audiodescrição e materiais audiovisuais.
      </Text>

      <Text style={styles.sectionTitle}>Objetivos Culturais</Text>

      <Text style={styles.text}>
        • Website com versão em audiodescrição totalmente gratuita.
      </Text>

      <Text style={styles.text}>
        • Impressão de exemplares em braile com entrega gratuita para
        instituições voltadas ao ensino de pessoas com deficiência visual.
      </Text>

      <Text style={styles.text}>
        • Aplicativo gratuito para smartphones com acesso às obras e conteúdos
        complementares.
      </Text>

      <Text style={styles.text}>
        • Áreas especiais do aplicativo com descrições e curiosidades históricas
        sobre cenários presentes nos livros.
      </Text>

      <Text style={styles.text}>
        • Doação de exemplares impressos para bibliotecas públicas e rede de
        ensino público.
      </Text>
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
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 6,
  },

  subtitle: {
    color: "#9ca3af",
    marginBottom: 20,
  },

  sectionTitle: {
    color: "#c9a24c",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 10,
  },

  text: {
    color: "#d1d5db",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
  },
});
