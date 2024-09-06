import React, { useState, useEffect } from "react";
import {
  Alert,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded] = useFonts({ Inter_400Regular });

  useEffect(() => {
    Alert.alert("Usuário não está logado");
  }, []);

  const handleLogin = () => {
    Alert.alert(`Usuário: ${username}\nSenha: ${password}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.base}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    borderRadius: 20,
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

export default Login;
