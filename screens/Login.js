import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/Forms";

import SafeArea from "../components/SafeArea";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email").trim(),
  password: Yup.string().required().min(4).label("Password"),
});

function Login(props) {
  const navigation = useNavigation;
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <SafeArea style={styles.container}>
      <Image style={styles.logo} source={require("../assets/bg-img-9.png")} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
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

        <SubmitButton
          title="Login"
          style={{ marginTop: 20 }}
          onSubmit={() => navigation.navigate("Dashboard")}
        />
      </Form>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text>Don't have an account? </Text>
        <Text> Sign Up</Text>
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 40,
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
