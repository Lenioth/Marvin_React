import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import AudioVisualizer from "./AudioVisualizer";
import Card from "./Card";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export default function ChapterCard({
  item,
  selected,
  isPlaying,
  progressText,
  onPress,
}) {
  const status = selected ? (isPlaying ? "tocando agora" : "selecionado") : "";
  const accessibilityHint = selected
    ? isPlaying
      ? "Está tocando agora. Toque para pausar."
      : "Capítulo selecionado. Toque para começar a tocar."
    : progressText
    ? `Toque para continuar. ${progressText}`
    : "Toque para ouvir este capítulo";

  return (
    <Pressable
      onPress={onPress}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`${item.title}${status ? ", " + status : ""}`}
      accessibilityHint={accessibilityHint}
      style={({ pressed }) => [pressed && { opacity: 0.9 }]}
    >
      <Card style={[styles.track, selected && styles.trackSelected]}>
        <Text 
          style={styles.trackTitle}
          accessible={false}
          importantForAccessibility="no"
        >
          {item.title}
        </Text>

        <View 
          style={styles.trackFooter}
          accessible={false}
          importantForAccessibility="no"
        >
          <Text style={styles.trackHint}>
            {selected
              ? isPlaying
                ? "Tocando..."
                : "Selecionado"
              : progressText || "Toque para ouvir"}
          </Text>

          {selected && <AudioVisualizer isPlaying={isPlaying} />}
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    padding: spacing.md,
    borderColor: colors.border,
  },

  trackSelected: {
    borderColor: colors.primary,
  },

  trackTitle: {
    color: colors.text,
    ...typography.subtitle,
  },

  trackFooter: {
    marginTop: spacing.xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  trackHint: {
    color: colors.textMuted,
    ...typography.small,
    marginTop: spacing.xs,
  },
});
