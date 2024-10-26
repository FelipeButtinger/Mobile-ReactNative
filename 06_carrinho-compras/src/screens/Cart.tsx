import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React, { useEffect } from "react";
import { useCartContext } from "../contexts/CartContext"; // Importe o contexto
import { ICartItem } from "../types/Product"; // Importe o tipo do item do carrinho

const Cart = () => {
  const { cart, getCart, removeProduct } = useCartContext(); // Use o contexto do carrinho

  useEffect(() => {
    getCart(); // Carrega o carrinho quando o componente é montado
  }, []);

  const renderItem = ({ item }: { item: ICartItem }) => (
    <View style={styles.cartItem}>
      <Text>
        {item.product.title} - Quantidade: {item.quantity}
      </Text>
      <Button title="Remover" onPress={() => removeProduct(item.product.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Itens no Carrinho:</Text>
      {cart.length === 0 ? (
        <Text>Carrinho vazio</Text>
      ) : (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.product.id.toString()}
        />
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
  },
});
