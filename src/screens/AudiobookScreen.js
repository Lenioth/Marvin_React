import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import BOOKS from "../data/books";
import BookCard from "../components/BookCard";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export default function AudiobookScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <BookCard
      item={item}
      onPress={() =>
        navigation.navigate("AudiobookChapters", {
          bookId: item.routeParam,
          bookTitle: item.title,
        })
      }
    />
  );

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Audiolivros gratuitos</Text>
      <Text style={styles.subtitle}>Escolha um livro para ouvir</Text>

      <FlatList
        data={BOOKS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: spacing.xl }}
        ItemSeparatorComponent={() => <View style={{ height: spacing.md }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },

  title: {
    color: colors.text,
    ...typography.titleLarge,
    marginBottom: spacing.xs,
  },

  subtitle: {
    color: colors.textMuted,
    ...typography.body,
    marginBottom: spacing.lg,
  },
});
