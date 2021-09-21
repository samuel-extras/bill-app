import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import biometric from "../components/biometric";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

import { Form, FormField, SubmitButton } from "../components/Forms";

import SafeArea from "../components/SafeArea";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email").trim(),
  password: Yup.string().required().min(4).label("Password"),
});

function Login({ navigation }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigateToHome = () => {
    navigation.navigate(routes.TABS);
  };
  return (
    <SafeArea style={styles.container}>
      <Image style={styles.logo} source={require("../assets/bg-img-9.png")} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => {
          console.log(value);

          biometric(navigateToHome);
        }}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          icon="lock"
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          textContentType="password"
          option="eye"
          onOptionPress={() => setSecureTextEntry(!secureTextEntry)}
        />

        <SubmitButton title="Login" style={{ marginTop: 20 }} />
      </Form>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text>Don't have an account? </Text>
        <Text onPress={() => navigation.navigate(routes.REGISTER)}>
          {" "}
          Sign Up
        </Text>
      </View>
      <TouchableOpacity
        style={{ height: 50, width: 50, position: "absolute", bottom: "20%" }}
        onPress={() => biometric(navigateToHome  )}
      >
        <MaterialCommunityIcons
          name="fingerprint"
          color={colors.primary}
          size={50}
        />
      </TouchableOpacity>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 80,
    resizeMode: "contain",
  },
});

export default Login;
