
import {View, Text, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    box:{
        padding:50,
        width:500,
        height:100,
    },
    text:{
        fontSize:10,
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