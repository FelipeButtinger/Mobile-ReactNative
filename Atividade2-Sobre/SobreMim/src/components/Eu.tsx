import React from "react";
import { View, StyleSheet } from "react-native";

const EuDesc = () => {
  return (
    <View style={styles.footerContainer}>
      <img src="../assets/SelfieFelipeGarcia.png" />
      <h1>Meu nome é Felipe Garcia Buttinger</h1>

      <h1>Tenho 17 anos e curso o TDS</h1>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    padding: 5,
    borderColor: "#f1f1f1",
    backgroundColor: "#CDEAC0",
    width: "100%",
  },
});

export default EuDesc;
