import {StyleSheet, View,Text,ScrollView,StatusBar } from 'react-native';
import pokemonList from "./data.json"
import { SafeAreaView} from 'react-native-safe-area-context';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop:StatusBar.currentHeight 
  },
  scrollView: {
    paddingHorizontal: 20,
  }
}

)

export default function HomeScreen() {
  return (
         <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
     <View >
        <Text>Pokemon List</Text>
    </View>

    <View>
      {
        pokemonList.map((pokemon) => {
           return(
           <View key={pokemon.id}>
             <Text>
            {pokemon.name}
           </Text>
             <Text>
            {pokemon.type}
           </Text>
           </View>
           )
})
      }
    </View>
     </ScrollView>
   </SafeAreaView>
   
  );
}

