import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StackNavigatorRoutesProps } from "../routes/app.routes";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation<StackNavigatorRoutesProps>();
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Home" onPress={() => navigation.navigate("home")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Login;
