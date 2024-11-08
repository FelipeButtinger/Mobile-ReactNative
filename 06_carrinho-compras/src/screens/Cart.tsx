import { StyleSheet, Text, View, FlatList, Button, Image } from "react-native";
import React, { useEffect } from "react";
import { useCartContext } from "../contexts/CartContext";
import { ICartItem } from "../types/Product";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const { cart, getCart, removeProduct } = useCartContext();
  const navigation = useNavigation();

  useEffect(() => {
    getCart();
  }, []);

  // Calcular o valor total do carrinho
  const totalCartValue = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const renderItem = ({ item }: { item: ICartItem }) => {
    const itemTotal = item.product.price * item.quantity;
    return (
      <View style={styles.cartItem}>
        <Image source={{ uri: item.product.image }} style={styles.image} />
        <View style={styles.itemDetails}>
          <Text>{item.product.title}</Text>
          <Text>Quantidade: {item.quantity}</Text>
          <Text>Preço: R$ {itemTotal.toFixed(2)}</Text> {}
        </View>
        <Button
          title="Remover"
          onPress={() => removeProduct(item.product.id)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Itens no Carrinho:</Text>
      {cart.length === 0 ? (
        <Text>Carrinho vazio</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id.toString()}
          />
          <Text style={styles.total}>
            Total do Carrinho: R$ {totalCartValue.toFixed(2)}
          </Text>{" "}
          {}
          <Button
            title="Finalizar Compra"
            onPress={() =>
              navigation.navigate("Payment", { total: totalCartValue })
            }
            style={styles.button}
          />
        </>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  total: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    marginTop: 20,
  },
});
