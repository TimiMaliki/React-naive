import {View,Text,ScrollView,ImageBackground,Button,Pressable} from "react-native";
const Socrates = require("./assets/Pin su 风格.jpeg")


export default function App(){
  return(
   <View style={{flex: 1, backgroundColor: "red",  padding: "30"}}>
     <ScrollView> 
     <Pressable onPress={() => console.log("text pressed")}>
       <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>Socrates</Text>
      <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus cumque 
        qui animi vitae quos perferendis similique itaque facilis suscipit fuga, obcaecati repudiandae ,
         qui animi vitae quos perferendis similique itaque facilis suscipit fuga, obcaecati repudian
      </Text>
      </Pressable>
        <Pressable onPress={() => console.log("image pressed")}>
     <ImageBackground source={Socrates} style={{flex:1, width: 300, height: 500}}>
     </ImageBackground>
     </Pressable>
     <Button title="Click Me" onPress={()=> console.log("click")} color={"purple"}/>
    </ScrollView>
   </View>
  )
}