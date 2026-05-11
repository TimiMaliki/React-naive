import { StyleSheet, View, Text, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};
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
nameContainer:{
 flexDirection: "row",
 justifyContent:"space-between",
 marginBottom:"34"
},
name:{
 fontSize:26,
 fontWeight:"bold",

},
hp:{
fontSize:26,
 fontWeight:"bold",
},
moves:{
fontSize:26,
 fontWeight:"bold",
},
weaknesses:{
fontSize:26,
 fontWeight:"bold",
},
typeContainer:{
alignItems:"center",
marginBottom:20,
},
typeEmoji:{
fontSize:26,
marginRight:12,
},
typeBadge:{
flexDirection:"row",
alignItems:"center",
marginTop:28,
paddingVertical:8,
paddingHorizontal:12,
borderRadius:20,
borderWidth:2,
},
typeBorderColor:{
fontSize:26,
 fontWeight:"bold",
},
typeText:{
fontSize:26,
 fontWeight:"bold",
},
  imageWidth:{
    width:300,
    height:300,
  }
});

const PokemonCard = ({ CharmanderData }) => {
    const {borderColor, emoji} = getTypeDetails(CharmanderData.type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{CharmanderData.name}</Text>
        <Text style={styles.hp}>{CharmanderData.hp}</Text>
      </View>
      <Image
        source={CharmanderData.image}
        accessibilityLabel={`${CharmanderData.name} Pokemon`}
        resizeMode="contain"
        style={styles.imageWidth}
      />

      <View style={styles.typeContainer}>
      <View style={[styles.typeBadge,{borderColor}]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
            <Text style={styles.typeText}>Type: {CharmanderData.type}</Text>
      </View>
      </View>

      <View>
        <Text style={styles.moves}>Moves: {CharmanderData.moves.join(", ")}</Text>
      </View>
      <View>
        <Text style={styles.weaknesses}>Weaknesses: {CharmanderData.weaknesses.join(", ")}</Text>
      </View>

    </View>
  );
};

export default PokemonCard;
