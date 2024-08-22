import { Text, StyleSheet } from "react-native";
import Post from "../components/Post";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const Home = () => {
  // Lógica
  //npx expo install react-native-safe-area-context
  return (
    <SafeAreaView style={styles.container}>
      <Post title="Laguinho dos guri" />
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
