import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export default function BookCard({ item, onPress }) {
  return (
    <Pressable
      disabled={item.comingSoon}
      onPress={onPress}
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
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.primary,
    overflow: "hidden",
    paddingVertical: spacing.md,
  },

  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },

  cardDisabled: {
    opacity: 0.85,
  },

  coverWrapper: {
    width: 85,
    height: 120,
    marginLeft: spacing.md,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  cover: {
    width: 85,
    height: 120,
    resizeMode: "contain",
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
    color: colors.text,
    ...typography.small,
    fontWeight: "700",
    backgroundColor: "rgba(0,0,0,0.65)",
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: 6,
  },

  cardContent: {
    flex: 1,
    padding: spacing.md,
    justifyContent: "center",
  },

  cardTitle: {
    color: colors.text,
    ...typography.subtitle,
    marginBottom: spacing.xs,
  },

  cardDescription: {
    color: colors.textMuted,
    ...typography.body,
    lineHeight: 20,
  },
});
