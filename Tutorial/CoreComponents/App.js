import {
 View,
 Text,
 StyleSheet
} from "react-native";



export const styles = StyleSheet.create({
  container:{
      flex:1,
      padding:44,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  bluebox:{
     width: 300,
    height: 300,
    backgroundColor: "lightblue",
    color: "black",
    padding:40,
  },
   greenbox:{
    width: 300,
    height: 300,
    backgroundColor: "lightgreen",
    color: "black",
    padding:40,
  },

});

export default function App() {
 
  return (
    <View style={styles.container}>
       <Text style={styles.text}>
        StyleSheet API
       </Text>

       <View style={styles.bluebox}>
      <Text style={styles.text}>BlueBox</Text>
       </View>

      <View style={styles.greenbox}>
       <Text style={styles.text}>GreenBox</Text>
       </View>


    </View>
  );
}
