import { Text, StyleSheet, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Entrada from "../components/Entrada";
import Banner from "../components/Banner";
const Home = () => {
  // Lógica
  //npx expo install react-native-safe-area-context
  return (
    <SafeAreaView style={styles.container}>
      <Entrada />
      <Banner />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    margin: 0,
  },
  title: {
    color: "#000000",
    fontSize: 34,
    marginBottom: 0,
  },
});

export default Home;
