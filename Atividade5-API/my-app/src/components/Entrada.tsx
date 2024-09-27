import React, { useState, useEffect } from "react";
import {
  Platform,
  Alert,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Entrada = () => {
  const [username, setUsername] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
        Insira o id do personagem que deseja
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  base: {
    height: 200,
    width: 300,
    backgroundColor: "#777777",
    borderRadius: 10,
    borderColor: "#ffffff",
    borderWidth: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily: "Inter_400Regular",
  },
  button: {
    height: 40,
    backgroundColor: "#555555",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default Entrada;
