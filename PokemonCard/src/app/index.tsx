import {StyleSheet, View, Text, Platform} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PokemonCard from '../components/PokemonComponents/PokemonCard';



const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
    paddingTop:Platform.OS === "android" ? 25 : 0,
    backgroundColor: '#fff',
  },
  text:{
    fontSize: 20,
    padding: 10,
  }
})



export default function HomeScreen() {
  return (
   <SafeAreaView style={style.container}>
     <View>
      <Text style={style.text}>Home</Text>
      <PokemonCard />
    </View>
   </SafeAreaView>

  );
}
