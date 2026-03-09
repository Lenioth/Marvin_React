import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import AudioVisualizer from "./AudioVisualizer";
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
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.track,
        selected && styles.trackSelected,
        pressed && { opacity: 0.9 },
      ]}
    >
      <Text style={styles.trackTitle}>{item.title}</Text>

      <View style={styles.trackFooter}>
        <Text style={styles.trackHint}>
          {selected
            ? isPlaying
              ? "Tocando..."
              : "Selecionado"
            : progressText || "Toque para ouvir"}
        </Text>

        {selected && <AudioVisualizer isPlaying={isPlaying} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: spacing.md,
    borderWidth: 1,
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
