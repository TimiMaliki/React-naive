import * as Device from 'expo-device';
import {StyleSheet ,Text , View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: windowWidth > 500 ? "70%" : "90%",
    height: windowHeight > 600 ? "60%" : "90%",
    borderRadius: 10
  },
  text:{
    fontSize: 20
  }

})




export default function HomeScreen() {
  return (
    <View style={styles.container}>
  <View style={styles.box}>
    <Text style={styles.text}>Hello Timi</Text>
  </View>
    </View>
  ); 
}


