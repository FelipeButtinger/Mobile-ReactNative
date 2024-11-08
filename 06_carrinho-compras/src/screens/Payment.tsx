import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CheckoutScreen = () => {
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAGAMENTO E ENTREGA</Text>

      <Text>Endereço de entrega:</Text>
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.cityInput]}
          placeholder="Cidade"
          value={cidade}
          onChangeText={setCidade}
        />
        <TextInput
          style={[styles.input, styles.stateInput]}
          placeholder="Estado"
          value={estado}
          onChangeText={setEstado}
        />
      </View>

      <Text>Dados de pagamento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Número do cartão"
        value={numeroCartao}
        onChangeText={setNumeroCartao}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome no cartão"
        value={nomeCartao}
        onChangeText={setNomeCartao}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.validityInput]}
          placeholder="Data de validade"
          value={validade}
          onChangeText={setValidade}
        />
        <TextInput
          style={[styles.input, styles.cvvInput]}
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          keyboardType="numeric"
        />
      </View>

      {/* Card/alterar imagem */}
      <View style={styles.card}>
        <Text style={styles.cardText}>VISA</Text>
        <Text style={styles.cardNumber}>
          {numeroCartao || "0000 0000 0000 0000"}
        </Text>
        <View style={styles.cardDetails}>
          <Text>{nomeCartao || "Nome do titular"}</Text>
          <Text>{validade || "MM/AA"}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Finalizar pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cityInput: {
    flex: 2,
    marginRight: 10,
  },
  stateInput: {
    flex: 1,
  },
  validityInput: {
    flex: 2,
    marginRight: 10,
  },
  cvvInput: {
    flex: 1,
  },
  card: {
    backgroundColor: "#ffffff",
    maxWidth: 300,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardNumber: {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 10,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#6200ee",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CheckoutScreen;
