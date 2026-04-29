import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert
} from "react-native";
const Socrates = require("./assets/Pin su 风格.jpeg");
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "red", padding: "30" }}>
      <StatusBar backgroundColor={"lightgreen"} barStyle="light-content"/>
      <ScrollView>
          <Button
          title="Modal"
          onPress={() => setModalVisible(true)}
          color={"purple"}
        />
        <Modal
          visible={modalVisible}
          onRequestClose={()=>setModalVisible(false)}
          animationType="slide"
          presentationStyle="formSheet"
        >
         
          <View style={{backgroundColor: "white", padding: "30" }}>
            <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>
              Modal
            </Text>
            <Button
              title="Close me"
              onPress={() => setModalVisible(false)}
              color={"blue"}
            />
             <ActivityIndicator size={"large"} color={"black"} animating={true}/>
          </View>
        </Modal>
        <Pressable onPress={() => console.log("text pressed")}>
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            Socrates
          </Text>
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            cumque qui animi vitae quos perferendis similique itaque facilis
            suscipit fuga, obcaecati repudiandae , qui animi vitae quos
            perferendis similique itaque facilis suscipit fuga, obcaecati
            repudian
          </Text>
        </Pressable>
        <Pressable onPressIn={() => console.log("image pressed")}>
          <ImageBackground
            source={Socrates}
            style={{ flex: 1, width: 300, height: 500 }}
          ></ImageBackground>
        </Pressable>
        <Button
          title="Click Me"
          onPress={() => Alert.alert("Cool Project")}
          color={"purple"}
        />
      </ScrollView>
    </View>
  );
}
