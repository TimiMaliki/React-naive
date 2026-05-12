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
  },
  card:{
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
  },
  cardText:{
    fontSize: 22,
  }}
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
           <View style={styles.card} key={pokemon.id}>
             <Text style={styles.cardText}>
            {pokemon.name}
           </Text>
             <Text style={styles.cardText}>
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

