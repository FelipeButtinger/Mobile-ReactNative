import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const Payment = () => {
  const route = useRoute(); // Obtenha os parâmetros da rota
  const { total } = route.params; // Acesse o valor total passado

  return (
    <View>
      <Text>Valor Total: R$ {total.toFixed(2)}</Text>
      {/* Outros elementos da tela de pagamento podem ser adicionados aqui */}
    </View>
  );
};

export default Payment;


