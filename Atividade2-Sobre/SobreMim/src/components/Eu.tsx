import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from "react-native";
//estilizar os elementos e então chamar por meio de style = {styles."id da estilização"}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    fontSize: 9,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  imagem: {
    width: 200,
    height: 250,
    marginLeft: 30,
  },
  coluna: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#777777",
    height: "99%",
  },
});

const EuDesc = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("../../assets/SelfieFelipeGarcia.png")}
      />
      <view style={styles.coluna}>
        <h1>Meu nome é Felipe Garcia Buttinger</h1>

        <h1>
          Tenho 17 anos e curso o TDS no <a>Senac</a>
        </h1>
      </view>
    </View>
  );
};

export default EuDesc;
