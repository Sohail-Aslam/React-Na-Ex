import { Drawer } from "expo-router/drawer";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import '../global.css'
// app/_layout.js
import "../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
export function Root() {

  return (
    <ThemeProvider value={ DefaultTheme}>
      <Drawer>
        <Drawer.Screen 
          name="home" 
        />
        <Drawer.Screen name="tab1" options={{ drawerLabel: "Tab One" }} />
        <Drawer.Screen name="tab2" options={{ drawerLabel: "Tab Two" }} />
      </Drawer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}