import { View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.container}>
      <Feather name="users" size={24} color="#000000" />
      <Text style={styles.text}>@usuario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  text: {
    color: "#010001",
    fontSize: 22,
    marginLeft: 8,
    paddingRight: 300,
  },
});

export default Header;
