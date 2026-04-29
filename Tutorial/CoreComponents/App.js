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
    padding:70,
    fontSize: 20,
    fontWeight: "bold"
  },
  bluebox:{
    width: 100,
    height: 100,
    backgroundColor: "blue"
  },
   greenbox:{
    width: 100,
    height: 100,
    backgroundColor: "green"
  },

});

export default function App() {
 
  return (
    <View style={styles.container}>
       <Text style={styles.text}>
        StyleSheet API
       </Text>

       <View style={styles.bluebox}>
         <Text style={styles.text}>
        StyleSheet API
       </Text>
       </View>

      <View style={styles.greenbox}>
         <Text style={styles.text}>
        StyleSheet API
       </Text>
       </View>


    </View>
  );
}
