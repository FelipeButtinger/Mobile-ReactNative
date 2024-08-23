import { Text, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import EuDesc from "../components/Eu";

const Home = () => {
  // Lógica
  //npx expo install react-native-safe-area-context
  return (
    <SafeAreaView style={styles.container}>
      <EuDesc />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 500,
    backgroundColor: "#252525",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "#010001",
    fontSize: 34,
    marginBottom: 8,
  },
});

export default Home;
