import { StyleSheet, TextInput, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

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
  Text: {
    fontSize: 22,
    color: "#000",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default function HomeScreen() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder="email@gmail.com"
        secureTextEntry={true}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.Text}>My Name is {text}</Text>
    </SafeAreaView>
  );
}
