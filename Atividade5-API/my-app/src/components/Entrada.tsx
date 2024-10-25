import React, { useState } from "react";
import {
  Alert,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Entrada = () => {
  const [username, setUsername] = useState("");
  const [characterData, setCharacterData] = useState({
    name: "Nome",
    state: "Estado",
    race: "Raça",
    date: "Criado em",
    location: "Localização",
    firstSeen: "Visto primeiro em",
    gender: "Gênero",
    image: "",
  });

  const baseUrl = "https://rickandmortyapi.com/api/character/";

  const handlePress = async () => {
    const index = Number(username);
    if (isNaN(index) || index <= 0) {
      Alert.alert("Erro", "Por favor, insira um ID válido.");
      return;
    }

    const url = `${baseUrl}${index}`;

    try {
      const response = await fetch(url);
      const obj = await response.json();

      if (response.status === 200) {
        setCharacterData({
          name: obj.name,
          state: obj.status,
          race: obj.species,
          date: obj.created,
          location: obj.location.name,
          firstSeen: obj.origin.name,
          gender: obj.gender,
          image: obj.image,
        });
      } else {
        Alert.alert("Erro", `Character not found: ${response.status}`);
      }
    } catch (error) {
      Alert.alert("Erro", "Failed to fetch data. Please try again.");
      console.log("Error fetching data:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
        <Text>Insira o id do personagem que deseja</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: characterData.image }} style={styles.image} />
        <View style={styles.flexContainer}>
          <Text style={styles.name}>{characterData.name}</Text>
          <Text style={styles.state}>{characterData.state}</Text>
          <Text style={styles.race}>{characterData.race}</Text>
          <Text style={styles.pattern}>Criado: {characterData.date}</Text>
          <Text style={styles.location}>
            Localização: {characterData.location}
          </Text>
          <Text style={styles.pattern}>
            Visto primeiro em: {characterData.firstSeen}
          </Text>
          <Text style={styles.appearance}>Gênero: {characterData.gender}</Text>
        </View>
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
  card: {
    display: "flex",
    height: 400,
    width: 300,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  state: {
    fontSize: 25,
  },
  race: {
    fontSize: 16,
  },
  pattern: {
    fontStyle: "italic",
    marginVertical: 5,
  },
  location: {
    fontSize: 16,
  },
  appearance: {
    fontSize: 16,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Entrada;
