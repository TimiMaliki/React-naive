import { StyleSheet, View } from "react-native";

import Box from "./component/Box";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexWrap: "wrap",
    columnGap: 20,
    height: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default function App() {
  return (
    <View style={[styles.text, styles.container]}>
      <Box style={{ backgroundColor: "green" }} Children="Box 1" />
      <Box style={{ backgroundColor: "black" }} Children="Box 2" />
      <Box style={{ backgroundColor: "red" }} Children="Box 3" />
      <Box style={{ backgroundColor: "green" }} Children="Box 4" />
      <Box style={{ backgroundColor: "yellow" }} Children="Box 5" />
      <Box style={{ backgroundColor: "lemonchiffon" }} Children="Box 6" />
      <Box style={{ backgroundColor: "skyblue" }} Children="Box 7" />
    </View>
  );
}
