import { StyleSheet, Text, View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
      backgroundColor: "blue",
  },
  container: {
    flex: 1,
    backgroundColor: "blue",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios:{
        color:"purple"
      },
      android:{
        color:"white"
      },
    }),
   fontSize:24,
   fontWeight:"bold",
   textAlign:"center",
  },
});

export default function HomeScreen() {

  return (
   <SafeAreaView style={styles.safeContainer}>
     <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello Timi</Text>
      </View>
    </View>
   </SafeAreaView>
  );
}
