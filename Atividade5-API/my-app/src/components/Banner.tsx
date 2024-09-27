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

const Banner = () => {
  return (
    <SafeAreaView style={styles.container}>
      <main style={styles.card}>
        <img src="" alt="" width={300} height={300} />
        <div style={styles.flexContainer}>
          <Text style={styles.name}>Nome</Text>
          <Text style={styles.state}>Estado</Text>
          <Text style={styles.race}>Raça</Text>
          <Text style={styles.pattern}>Visto por último em</Text>
          <Text style={styles.location}>Localização</Text>
          <Text style={styles.pattern}>Visto primeiro em</Text>
          <Text style={styles.appearance}>Aparência</Text>
        </div>
      </main>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  card: {
    display: "flex",
    height: 300,
    width: 550,
    backgroundColor: "blue",
    borderRadius: 10,
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

export default Banner;
