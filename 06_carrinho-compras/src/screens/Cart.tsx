import { StyleSheet, Text, View, FlatList, Button, Image } from "react-native";
import React, { useEffect } from "react";
import { useCartContext } from "../contexts/CartContext"; // Importe o contexto
import { ICartItem } from "../types/Product"; // Importe o tipo do item do carrinho
import { useNavigation } from "@react-navigation/native"; // Importe useNavigation

const Cart = () => {
  const { cart, getCart, removeProduct } = useCartContext(); // Use o contexto do carrinho
  const navigation = useNavigation(); // Obtenha a instância de navegação

  useEffect(() => {
    getCart(); // Carrega o carrinho quando o componente é montado
  }, []);

  // Calcular o valor total do carrinho
  const totalCartValue = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const renderItem = ({ item }: { item: ICartItem }) => {
    const itemTotal = item.product.price * item.quantity; // Calcule o total para o item
    return (
      <View style={styles.cartItem}>
        <Image source={{ uri: item.product.image }} style={styles.image} />
        <View style={styles.itemDetails}>
          <Text>{item.product.title}</Text>
          <Text>Quantidade: {item.quantity}</Text>
          <Text>Preço: R$ {itemTotal.toFixed(2)}</Text> {/* Exiba o preço total do item */}
        </View>
        <Button title="Remover" onPress={() => removeProduct(item.product.id)} />
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
          <Text style={styles.total}>Total do Carrinho: R$ {totalCartValue.toFixed(2)}</Text> {/* Exiba o valor total do carrinho */}
          <Button
            title="Finalizar Compra"
            onPress={() => navigation.navigate("Payment", { total: totalCartValue })} // Passa o valor total como parâmetro
            style={styles.button} // Estilos do botão
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
    flexDirection: 'row', // Para alinhar a imagem e o texto na mesma linha
    alignItems: 'center', // Centraliza verticalmente os itens
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10, // Espaço entre a imagem e os detalhes do item
  },
  image: {
    width: 50, // Defina a largura desejada
    height: 50, // Defina a altura desejada
    marginRight: 10, // Espaço entre a imagem e o texto
  },
  total: {
    marginTop: 20, // Espaço acima do total
    fontWeight: 'bold', // Destaque o total
    fontSize: 16, // Aumenta o tamanho da fonte
  },
  button: {
    marginTop: 20, // Espaço acima do botão
  },
});
