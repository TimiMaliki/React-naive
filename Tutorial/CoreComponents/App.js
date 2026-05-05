import { StyleSheet, View } from "react-native";

import Box from "./component/Box";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 300,
    flexDirection: "row",
    alignContent: "flex-start",
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
      <Box style={{ backgroundColor: "green", flexShrink: 1 }} Children="Box 1" />
      <Box style={{ backgroundColor: "black",flexShrink: 1 }} Children="Box 2" />
      <Box style={{ backgroundColor: "red", flexShrink: 2 }} Children="Box 3" />
      {/* <Box style={{ backgroundColor: "green" }} Children="Box 4" />
      <Box style={{ backgroundColor: "yellow" }} Children="Box 5" />
      <Box style={{ backgroundColor: "lemonchiffon" }} Children="Box 6" />
      <Box style={{ backgroundColor: "skyblue" }} Children="Box 7" /> */}
    </View>
  );
}
