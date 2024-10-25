import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
} //interface para cada produto. Utilizado depois ao renderizar cada um com a function renderItem

const ProductList: React.FC<{ navigation: any }> = ({ navigation }) => {
  //alterei para poder fazer a transição de telas.
  const baseUrl = "https://fakestoreapi.com/products/"; //link para consumir a API
  const [products, setProducts] = useState<Product[]>([]); //constam os itens da lista da api
  const [loading, setLoading] = useState(true); //só um negócio que aprendi para gerenciar o carregamento dos dados.

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json(); //consome a api e transforma em um json utilizável.
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const onPressProduct = (id: Number) => {
    navigation.navigate("Details", { id }); //function que envia o produto referente para preencher ProductDetails.
  };
  const renderItem = (
    { item }: { item: Product } //card para cada item
  ) => (
    <TouchableOpacity
      onPress={() => onPressProduct(item.id)}
      style={styles.card}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image} // Aplicando estilos à imagem
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Button title="Clique em Mim" onPress={() => onPressProduct(item.id)} />
    </TouchableOpacity>
  );

  if (loading) {
    //Aqui posso ter certeza que tudo foi carregado
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList //flatlist é para a rolagem vertical
        data={products} //recebe a array criada antes, que contém os itens
        renderItem={renderItem} //utiliza a padronização de cards
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  card: {
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    width: "50%",

    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  flexContainer: {},
  image: {
    width: "40%",
    height: 250,
    marginBottom: 10,
    resizeMode: "contain", //Necessário, senão imagem fica cortada.
  },
});
