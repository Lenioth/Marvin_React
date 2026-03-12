import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export default function SectionTitle({ children, style }) {
  return (
    <Text 
      style={[styles.title, style]}
      accessible={true}
      accessibilityRole="header"
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    ...typography.title,
    marginBottom: spacing.md,
    textAlign: "center",
  },
});
