import React from "react";
import { Provider, DarkTheme } from "react-native-paper";
import Index from "./src/index";

export default function App() {
  return (
    <Provider theme={DarkTheme}>
      <Index />
    </Provider>
  );
}
