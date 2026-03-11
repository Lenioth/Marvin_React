import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";

export default function ScreenContainer({
  children,
  style,
  edges = ["top", "bottom"],
}) {
  return (
    <SafeAreaView style={styles.safe} edges={edges}>
      <View style={[styles.content, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
});
