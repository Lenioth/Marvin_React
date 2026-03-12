import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function Card({ children, style, accessible = false, accessibilityLabel }) {
  return (
    <View 
      style={[styles.card, style]}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
