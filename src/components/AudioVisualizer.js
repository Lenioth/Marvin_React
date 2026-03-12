import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

export default function AudioVisualizer({ isPlaying }) {
  const bars = [
    useRef(new Animated.Value(8)).current,
    useRef(new Animated.Value(14)).current,
    useRef(new Animated.Value(10)).current,
  ];

  useEffect(() => {
    const loops = bars.map((bar, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(bar, {
            toValue: 22 + index * 2,
            duration: 180 + index * 50,
            useNativeDriver: false,
          }),
          Animated.timing(bar, {
            toValue: 8 + index,
            duration: 180 + index * 50,
            useNativeDriver: false,
          }),
        ]),
      ),
    );

    if (isPlaying) {
      loops.forEach((anim) => anim.start());
    } else {
      bars.forEach((bar, index) => {
        bar.stopAnimation();
        Animated.timing(bar, {
          toValue: 8 + index,
          duration: 120,
          useNativeDriver: false,
        }).start();
      });
    }

    return () => {
      bars.forEach((bar) => bar.stopAnimation());
    };
  }, [isPlaying]);

  return (
    <View 
      style={styles.container}
      accessible={false}
      importantForAccessibility="no"
    >
      {bars.map((bar, index) => (
        <Animated.View 
          key={index} 
          style={[styles.bar, { height: bar }]} 
          accessible={false}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 3,
    height: 22,
  },
  bar: {
    width: 4,
    borderRadius: 3,
    backgroundColor: "#c9a24c",
  },
});
