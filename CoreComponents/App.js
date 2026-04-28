import {View,Text,ScrollView,ImageBackground} from "react-native";
const Socrates = require("./assets/Pin su 风格.jpeg")


export default function App(){
  return(
    <ScrollView style={{flex: 1, backgroundColor: "red",  padding: "30"}}> 
      <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>Socrates</Text>
      <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus cumque 
        qui animi vitae quos perferendis similique itaque facilis suscipit fuga, obcaecati repudiandae ,
         qui animi vitae quos perferendis similique itaque facilis suscipit fuga, obcaecati repudian
      </Text>
     <ImageBackground source={Socrates} style={{flex:1, width: 300, height: 500}}>
     </ImageBackground>
    </ScrollView>
  )
}