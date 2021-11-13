import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Theme from "./navigation/navigationTheme";
import { Text } from "react-native";
import AuthNavigator from "./navigation/AuthNavigator";
import PaystackWebView from "./views/PaystackWebView";

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
