
import {View, Text, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    box:{
        backgroundColor:"white",
        padding:20,
        width:250,
        height:250,
    },
    text:{
        fontSize:30,
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