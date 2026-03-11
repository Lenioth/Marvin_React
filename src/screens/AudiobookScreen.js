import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import BOOKS from "../data/books";
import BookCard from "../components/BookCard";
import ScreenContainer from "../components/ScreenContainer";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import { ROUTES } from "../navigation/routes";

export default function AudiobookScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <BookCard
      item={item}
      onPress={() =>
        navigation.navigate(ROUTES.AUDIOBOOK_CHAPTERS, {
          bookId: item.routeParam,
          bookTitle: item.title,
        })
      }
    />
  );

  return (
    <ScreenContainer>
      <Text style={styles.title}>Audiolivros gratuitos</Text>
      <Text style={styles.subtitle}>Escolha um livro para ouvir</Text>

      <FlatList
        data={BOOKS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: spacing.xl }}
        ItemSeparatorComponent={() => <View style={{ height: spacing.md }} />}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    ...typography.titleLarge,
    marginBottom: spacing.xs,
    textAlign: "center",
  },

  subtitle: {
    color: colors.textMuted,
    ...typography.body,
    marginBottom: spacing.lg,
    textAlign: "center",
  },
});
