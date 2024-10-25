import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StackNavigatorRoutesProps } from "../routes/app.routes";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation<StackNavigatorRoutesProps>();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Login" onPress={() => navigation.goBack()} />
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
export default Home;
