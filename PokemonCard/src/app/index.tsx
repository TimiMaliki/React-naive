import {StyleSheet, View, Text, Platform} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PokemonCard from '../components/PokemonComponents/PokemonCard';



const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingTop:Platform.OS === "android" ? 25 : 0,
    backgroundColor: '#fff',
  },
  text:{
    fontSize: 20,
    padding: 10,
  }
})



export default function HomeScreen() {

  const CharmanderData = {
    name:"Charmander",
   image: require("../../assets/images/pokemon/1.jpg"),
    type:"Fire",
    hp:39,
    moves:["scratch","Ember","Growl","Leer"],
    weaknesses:["Water","Rock"]
  };
  return (
   <SafeAreaView style={style.container}>
     <View>
      <Text style={style.text}>Pokemon</Text>
      <PokemonCard CharmanderData={CharmanderData} />
    </View>
   </SafeAreaView>

  );
}
