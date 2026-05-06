// import { useState, useEffect } from "react";
import { StyleSheet, Text, View, useWindowDimensions} from "react-native";


//  const [dimensions, setDimensions] = useState({
//   window: Dimensions.get("window"),
// });

// useEffect(() => {
//   const subscription = Dimensions.addEventListener("change", ({ window }) => {
//     setDimensions({ window });
//   });
//   return () => subscription?.remove();
// },[]);

// const { window } = dimensions;
// const windowWidth = window.width;
// const windowHeight = window.height;

// const windowWidth = Dimensions.get("window").width
// const windowHeight = Dimensions.get("window").height


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    borderRadius: 10,
  },
  text: {
    // fontSize:  windowWidth > 500 ? 20 : 16,
  },
});

export default function HomeScreen() {
 const windowWidth = useWindowDimensions().width
const windowHeight = useWindowDimensions().height
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
        {    width: windowWidth > 500 ? "100%" : "90%",
              height: windowHeight > 600 ? "60%" : "90%",
        }
        ]}
      >
        <Text style={{ fontSize: windowWidth > 500 ? 20 : 16 }}>
          Hello Timi
        </Text>
      </View>
    </View>
  );
}
