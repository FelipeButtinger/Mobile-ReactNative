import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ProductDetails = ({ route }: { route: any }) => {
  const { id } = route.params; // Recebe o produto passado pela navegação

  return (
    <View style={styles.container}>
      <Text style={styles.price}>{id}</Text>
      {/* Aqui você pode adicionar mais informações do produto, se necessário */}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    color: "#888",
  },
});
