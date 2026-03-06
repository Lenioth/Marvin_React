import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";

import fundo from "../../assets/img/fundo.png";
import marvin from "../../assets/img/mg.png";
import patrocinio from "../../assets/img/patrocinio.png";

export default function SplashScreen({ navigation }) {
  const marvinOpacity = useRef(new Animated.Value(0)).current;
  const patrocinioOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(marvinOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),

      Animated.timing(patrocinioOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* BACKGROUND */}
      <Image source={fundo} style={styles.background} />

      {/* MARVIN */}
      <Animated.Image
        source={marvin}
        style={[styles.marvin, { opacity: marvinOpacity }]}
      />

      {/* PATROCINADORES */}
      <Animated.Image
        source={patrocinio}
        style={[styles.footer, { opacity: patrocinioOpacity }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },

  background: {
    position: "absolute",
    width: "100%",
    height: "70%",
    top: 0,
    resizeMode: "cover",
  },

  marvin: {
    width: 360,
    height: 360,
    resizeMode: "contain",
    marginBottom: 200,
  },

  footer: {
    position: "absolute",
    bottom: 15,
    width: "100%",
    height: 240,
    resizeMode: "contain",
  },
});
