import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export default function MenuCard({ item, onPress }) {

  const Icon = item.icon;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      {Icon && <Icon width={24} height={24} style={styles.cardIcon} accessible={false} />}
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardArrow}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 16,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.primary,
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
    color: colors.text,
    ...typography.subtitle,
    flex: 1,
  },

  cardArrow: {
    color: colors.primary,
    fontSize: 22,
    marginLeft: spacing.sm,
  },
});
