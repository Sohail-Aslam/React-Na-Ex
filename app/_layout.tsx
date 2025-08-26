import { Drawer } from "expo-router/drawer";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {

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