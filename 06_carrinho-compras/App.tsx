import { RootSiblingParent } from "react-native-root-siblings";
import Routes from "./src/routes";
import React from "react";
import { UserProvider } from "./src/contexts/UserContext";

export default function App() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return (
    <RootSiblingParent>
      <UserProvider>
        <Routes />
      </UserProvider>
    </RootSiblingParent>
  );
}
