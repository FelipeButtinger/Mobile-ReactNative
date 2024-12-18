import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRoutes from "./app.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
