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

  const squirtleData = {
    name: "Squirtle",
    image: require("../../assets/images/pokemon/2.jpg"), 
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("../../assets/images/pokemon/3.jpg"), 
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("../../assets/images/pokemon/4.jpg"), 
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  return (
   <SafeAreaView style={style.container}>
     <View>
      <Text style={style.text}>Pokemon</Text>
      <PokemonCard {...CharmanderData} />
      <PokemonCard {...squirtleData} />
      <PokemonCard {...bulbasaurData} />
      <PokemonCard {...pikachuData} />
    </View>
   </SafeAreaView>

  );
}
