
import {View, Text, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    box:{
        backgroundColor:"white",
        padding:50,
        width:500,
        height:100,
        color:"white",
    },
    text:{
        fontSize:30,
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
    }
});

export default function Box({Children,style}) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{Children}</Text>
      </View>
    )
}