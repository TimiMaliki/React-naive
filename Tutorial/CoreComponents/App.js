import {
  StyleSheet,
  View,
} from "react-native";

import Box from "./component/Box";

const styles = StyleSheet.create({
  container: {

    flex: 1,
marginTop:60,
borderWidth:6,
borderColor:"red",
}
})

export default function App() {
 
  return (
    <View style={styles.container}>
    <Box style={{backgroundColor:"white", color:"black"}}> Box 1</Box>
     <Box style={{backgroundColor:"black", color:"white"}}> Box 2</Box>
      <Box style={{backgroundColor:"red", color:"white"}}> Box 3</Box>
       <Box style={{backgroundColor:"green", color:"white"}}> Box 4</Box>
       <Box style={{backgroundColor:"yellow", color:"black"}}> Box 5</Box>
      <Box style={{backgroundColor:"lemonchiffon", color:"black"}}> Box 6</Box>
       <Box style={{backgroundColor:"skyblue", color:"black"}}> Box 7</Box>
    </View>
  );
}
