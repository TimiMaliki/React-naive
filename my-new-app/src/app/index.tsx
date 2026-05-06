// import { useState, useEffect } from "react";
import { StyleSheet, Text, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
      backgroundColor: "blue",
  },
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
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
