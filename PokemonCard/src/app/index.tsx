import {StyleSheet, View, Text } from 'react-native';
import PokemonCard from '../components/PokemonComponents/PokemonCard';



const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
    backgroundColor: '#fff',
  },
  text:{
    fontSize: 20,
    padding: 10,
  }
})



export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Home</Text>
      <PokemonCard />
    </View>
  );
}
