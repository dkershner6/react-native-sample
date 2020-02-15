import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

interface ITopBar {
  title: string;
}

export const TopBar = (props: ITopBar) => {
  return (
    <Appbar style={styles.appBar}>
      <Appbar.Content title={props.title} />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  appBar: {
    minWidth: "100%"
  }
});

export default TopBar;
