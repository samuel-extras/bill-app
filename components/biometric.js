import * as LocalAuthentication from "expo-local-authentication";

const biometric = async (action) => {
  try {
    let result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      action();
    }
  } catch (error) {
    console.log(error);
  }
};

export default biometric;
