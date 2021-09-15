import React, { useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/Forms";

import SafeArea from "../components/SafeArea";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email").trim(),
  password: Yup.string().required().min(4).label("Password"),
  passwordConfirmation: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Password confirmation"),
});

function Register(props) {
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
          autoCompleteType="off"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          icon="lock"
          placeholder="Enter Password"
          secureTextEntry={secureTextEntry}
          textContentType="password"
          option="eye"
          onOptionPress={() => setSecureTextEntry(!secureTextEntry)}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="passwordConfirmation"
          icon="lock"
          placeholder="Re-enter the password"
          secureTextEntry={secureTextEntry}
          textContentType="password"
          option="eye"
          onOptionPress={() => setSecureTextEntry(!secureTextEntry)}
        />

        <SubmitButton title="Login" />
      </Form>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text> Already have an account? </Text>
        <Text> Log in</Text>
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginVertical: 80,
    resizeMode: "contain",
  },
});

export default Register;
