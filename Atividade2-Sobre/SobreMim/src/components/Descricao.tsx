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
//estilizar os elementos e então chamar por meio de style = {styles."id da estilização"}
const styles = StyleSheet.create({
  container: {
    fontSize: 9,
    backgroundColor: "#717171",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    borderRadius: 5,
  },
});

const Desc = () => {
  return (
    <View style={styles.container}>
      <p>
        Sonho e estudo para trabalhar na área da programação, tem sido um
        caminho divertido e de muito aprendizado, pretendo então continuar com
        ele.
      </p>
      <p>
        É do meu interesse também ingressar na área de desenvolvimento de jogos,
        espero que eu consiga me integrar nesta área
      </p>
    </View>
  );
};

export default Desc;
