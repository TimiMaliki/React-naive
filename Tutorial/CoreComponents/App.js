import { StyleSheet, View } from "react-native";

import Box from "./component/Box";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
      <Box style={{ backgroundColor: "green",}}>  Box 1 </Box>
      <Box style={{ backgroundColor: "black",}}> Box 2</Box>
      <Box style={{ backgroundColor: "red",}}> Box 3 </Box>
      <Box style={{ backgroundColor: "green" }}> Box 4 </Box>
      <Box style={{ backgroundColor: "yellow" }}> Box 5 </Box>
      <Box style={{ backgroundColor: "lemonchiffon" }}> Box 6 </Box>
      <Box style={{ backgroundColor: "skyblue" }}> Box 7 </Box>
    </View>
  );
}
