import {
 View,
 Text,
 StyleSheet
} from "react-native";



export const styles = StyleSheet.create({
  container:{
      flex:1,
      padding:60,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  box:{
    width: 250,
    height: 250,
    color: "black",
    paddingHorizontal:10,
    paddingVertical:30,
    marginVertical:20,
    border:2,
    borderColor:"black",
    borderRadius:10,
  },
  bluebox:{
    backgroundColor: "lightblue",
  },
   greenbox:{
    backgroundColor: "lightgreen",
  },
  boxShadow:{
    shadowColor:"111",
    shadowOffset:{width:6,height:6},
    shadowOpacity:0.5,
    shadowRadius:10
  },
  androidShadow:{
    elevation: 10
  }

});

export default function App() {
 
  return (
    <View style={styles.container}>
       <Text style={styles.text}>
        StyleSheet API
       </Text>

       <View style={[styles.box, styles.bluebox, styles.androidShadow]}>
      <Text style={styles.text}>BlueBox</Text>
       </View>

      <View style={[styles.box, styles.greenbox, styles.androidShadow]}>
       <Text style={styles.text}>GreenBox</Text>
       </View>


    </View>
  );
}
