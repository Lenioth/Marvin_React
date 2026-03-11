import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import Card from "./Card";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export default function BookCard({ item, onPress }) {
  return (
    <Pressable
      disabled={item.comingSoon}
      onPress={onPress}
      style={({ pressed }) => [
        styles.wrapper,
        pressed && !item.comingSoon && styles.cardPressed,
        item.comingSoon && styles.cardDisabled,
      ]}
    >
      <Card style={styles.card}>
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
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.title}
          </Text>

          <Text style={styles.cardDescription} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: spacing.md,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.sm,
    paddingRight: spacing.sm,
  },

  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },

  cardDisabled: {
    opacity: 0.85,
  },

  coverWrapper: {
    width: 60,
    height: 90,
    marginLeft: spacing.sm,
    marginRight: spacing.md,
    position: "relative",
  },

  cover: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "contain",
  },

  soonOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
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
    justifyContent: "center",
    paddingRight: spacing.sm,
  },

  cardTitle: {
    color: colors.text,
    ...typography.subtitle,
    marginBottom: 2,
  },

  cardDescription: {
    color: colors.textMuted,
    ...typography.body,
    lineHeight: 18,
  },
});
