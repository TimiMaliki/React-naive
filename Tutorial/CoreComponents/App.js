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
  box:{
    width: 300,
    height: 300,
    color: "black",
    paddingHorizontal:10,
    paddingVertical:10,
  },
  bluebox:{
    backgroundColor: "lightblue",
  },
   greenbox:{
    backgroundColor: "lightgreen",
  },

});

export default function App() {
 
  return (
    <View style={styles.container}>
       <Text style={styles.text}>
        StyleSheet API
       </Text>

       <View style={[styles.box, styles.bluebox]}>
      <Text style={styles.text}>BlueBox</Text>
       </View>

      <View style={[styles.box, styles.greenbox]}>
       <Text style={styles.text}>GreenBox</Text>
       </View>


    </View>
  );
}
