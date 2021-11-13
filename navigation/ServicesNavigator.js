import React from "react";
import { Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Airtime from "../views/Airtime";
import TabNavigator from "./TabNavigator";
import InternetData from "../views/InternetData";
import TVSubscription from "../views/TVSubscription";
import ElectricityBills from "../views/ElectricityBills";
import colors from "../config/colors";
import Button from "../components/Button";
import Payment from "../views/Payment";
import success from "../screens/success";
import PaymentOptions from "../screens/PaymentOptions";
import ResultChecker from "../views/ResultChecker";

const Stack = createNativeStackNavigator();

const ServicesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",

        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,

        headerLeft: () => (
          <MaterialCommunityIcons
            name="chevron-left"
            color={colors.white}
            size={30}
            onPress={() => navigation.pop()}
          />
        ),
      })}
      initialRouteName="TabNavigator"
    >
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Fund Wallet" component={PaymentOptions} />
      <Stack.Screen name="Fund Wallet With Card" component={Payment} />
      <Stack.Screen
        name="Airtime"
        component={Airtime}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("success")}
              bordered
              title="Next"
              color="transparent"
              textColor={colors.white}
              style={{
                width: 55,
                height: 25,
                padding: 4,
                flexDirection: "column",
                elevation: 0,
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Internet Data"
        component={InternetData}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("success")}
              bordered
              title="Next"
              color="transparent"
              textColor={colors.white}
              style={{
                width: 55,
                height: 25,
                padding: 4,
                flexDirection: "column",
                elevation: 0,
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="TV Subscriptions"
        component={TVSubscription}
        options={{
          headerRight: () => (
            <Button
              onPress={() => Alert.alert("Hello")}
              bordered
              title="Next"
              color="transparent"
              textColor={colors.white}
              style={{
                width: 55,
                height: 25,
                padding: 4,
                flexDirection: "column",
                elevation: 0,
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Electricity"
        component={ElectricityBills}
        options={{
          headerRight: () => (
            <Button
              onPress={() => Alert.alert("Hello")}
              bordered
              title="Next"
              color="transparent"
              textColor={colors.white}
              style={{
                width: 55,
                height: 25,
                padding: 4,
                flexDirection: "column",
                elevation: 0,
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Result Checkers"
        component={ResultChecker}
        options={{
          headerRight: () => (
            <Button
              onPress={() => Alert.alert("Hello")}
              bordered
              title="Next"
              color="transparent"
              textColor={colors.white}
              style={{
                width: 55,
                height: 25,
                padding: 4,
                flexDirection: "column",
                elevation: 0,
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="success" component={success} options={{}} />
    </Stack.Navigator>
  );
};

export default ServicesNavigator;
