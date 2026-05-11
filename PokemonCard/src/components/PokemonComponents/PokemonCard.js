import { StyleSheet, View, Text, Platform } from 'react-native'

const styles = StyleSheet.create({
    card:{
        backgroundColor: "white",
        borderRadius:16,
        borderWidth:2,
        padding:16,
        margin:16,
        ...Platform.select({
            ios:{
                shadowOffset:{width:2,height:2},
                shadowColor:"#000",
                shadowOpacity:0.3,
                shadowRadius:4,
            },
            android:{
               evevation:5,
            }
        })
    }
})

const PokemonCard = () => {
  return (
  <View style={styles.card}>
    <Text>Pokemon Card</Text>
  </View>
  )
}

export default PokemonCard
