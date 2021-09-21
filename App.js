import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import Theme from "./navigation/navigationTheme";
import Onboarding from "./screens/OnBoarding";
import OnBoarding from "./screens/OnBoarding";
import Biometric from "./components/biometric";
import Welcome from "./screens/Welcome";

export default function App() {
  const [login, setLogin] = React.useState(false);

  return (
    <NavigationContainer theme={Theme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
