import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TextInput,
} from "react-native";

const EuDesc = () => {
  return (
    <View style={styles.Container}>
      <Image
        height={300}
        source={require("../../assets/SelfieFelipeGarcia.png")}
      />

      <h1>Meu nome é Felipe Garcia Buttinger</h1>

      <h1>Tenho 17 anos e curso o TDS</h1>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 5,
    borderColor: "#f1f1f1",
    backgroundColor: "#CDEAC0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EuDesc;
