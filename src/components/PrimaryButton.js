import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
  style,
  textStyle,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.97 }],
  },

  disabled: {
    opacity: 0.5,
  },

  text: {
    color: "#000",
    ...typography.button,
  },
});
