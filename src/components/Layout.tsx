import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import TopBar from "./TopBar";

interface ILayout {
  title: string;
  children: ReactElement;
}

export const Layout = (props: ILayout) => {
  const { title, children } = props;

  return (
    <View style={styles.container}>
      <TopBar title={title} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: 400
  }
});

export default Layout;
