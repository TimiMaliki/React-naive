import {View,Text,Image,ImageBackground} from "react-native";
const Socrates = require("./assets/Pin su 风格.jpeg")


export default function App(){
  return(
    <View style={{flex: 1, backgroundColor: "red",  padding: "30"}}> 
     {/* <Image source={Socrates} style={{flex:1, width: 300, height: 300}} /> */}
     <ImageBackground source={Socrates} style={{flex:1, width: 300, height: 300}}>
      <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>Socrates</Text>
     </ImageBackground>
    </View>
  )
}