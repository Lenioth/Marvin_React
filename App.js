import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ServicosScreen from "./src/screens/ServicosScreen";
import PortfolioScreen from "./src/screens/PortfolioScreen";
import AudiobookScreen from "./src/screens/AudiobookScreen";
import AudiobookChaptersScreen from "./src/screens/AudiobookChaptersScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      accessible={true}
      accessibilityLabel="Navegador do Aplicativo"
    >
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: { backgroundColor: "#0f2e2a" },
          headerTitleStyle: { color: "#c9a24c", fontWeight: "700" },
          headerTintColor: "#c9a24c",
          headerTitleAlign: "center",
          contentStyle: { backgroundColor: "#0f2e2a" },
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Projeto"
          component={ServicosScreen}
          options={{ title: "Projeto" }}
        />

        <Stack.Screen
          name="Saga"
          component={PortfolioScreen}
          options={{ title: "Saga" }}
        />
        <Stack.Screen
          name="Audiobook"
          component={AudiobookScreen}
          options={{ title: "Audiolivro" }}
        />
        <Stack.Screen
          name="AudiobookChapters"
          component={AudiobookChaptersScreen}
          options={{ title: "Capítulos" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
