import { Text, StyleSheet, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Login from "../components/Login";

const Home = () => {
  // Lógica
  //npx expo install react-native-safe-area-context
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: "#ffffff",
    fontSize: 34,
    marginBottom: 8,
  },
});

export default Home;
