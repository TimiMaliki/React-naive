import { StyleSheet, View, Text, Platform, Image } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        evevation: 5,
      },
    }),
  },

  imageWidth:{
    width:300,
    height:300,
  }
});

const PokemonCard = ({ CharmanderData }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text>{CharmanderData.name}</Text>
        <Text>{CharmanderData.hp}</Text>
      </View>
      <Image
        source={CharmanderData.image}
        accessibilityLabel={`${CharmanderData.name} Pokemon`}
        style={styles.imageWidth}
      />

      <View>
        <Text>{CharmanderData.type}</Text>
      </View>

      <View>
        <Text>Moves: {CharmanderData.moves.join(", ")}</Text>
      </View>
      <View>
        <Text>Weaknesses: {CharmanderData.weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
};

export default PokemonCard;
