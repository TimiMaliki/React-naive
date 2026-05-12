import { StyleSheet,View,Text,ScrollView,StatusBar,FlatList } from "react-native";
import pokemonList from "./data.json";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    // marginBottom: 10,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 22,
  },
  HeaderText: {
    fontSize: 30,
  }
});

export default function HomeScreen() {
  return <SafeAreaView style={styles.container}>
         <FlatList 
         data={pokemonList}
         renderItem={({item}) => {
          console.log(item.id)
          return(
           <View style={styles.card} key={item.id}>
             <Text style={styles.cardText}>
            {item.name}
           </Text>
             <Text style={styles.cardText}>
            {item.type}
           </Text>
           </View>
           )
         }}
         keyExtractor={(item) => item.id.toString()}
         ItemSeparatorComponent={<View style={{height: 10}}/>}
         ListEmptyComponent={<Text>No Items Found</Text>}
         ListHeaderComponent={<Text style={styles.HeaderText}>Pokemon List</Text>}
         />
  </SafeAreaView>;
}

{
  /* <ScrollView style={styles.scrollView}>
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
     </ScrollView> */
}
