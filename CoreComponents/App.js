import {View,Text,Image} from "react-native";
const Socrates = require("./assets/Pin su 风格.jpeg")


export default function App(){
  return(
    <View style={{flex: 1, backgroundColor: "red",  padding: "80"}}> 
     <Image source={Socrates} style={{width: 500, height: 500}} />
    </View>
  )
}