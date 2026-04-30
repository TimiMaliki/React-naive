
import {View, Text, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    box:{
        padding:10,
        width:100,
        height:100,
    },
    text:{
        fontSize:40,
        color:"white",
    }
});

export default function Box({Children,style}) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{Children}</Text>
      </View>
    )
}