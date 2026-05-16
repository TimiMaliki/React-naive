import {
  StyleSheet,
  TextInput,
  StatusBar,
  Text,
  Switch,
  View,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState , useEffect} from "react";
;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center", // Center the loading spinner
    alignItems: "center", // Center the loading spinner
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  nameText: {
    fontSize: 30,
  },
  typeText: {
    fontSize: 24,
    color: "#666666",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer: {
    backgroundColor: "#FFC0CB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center",
  },
  errorText: {
    color: "#D8000C",
    fontSize: 16,
    textAlign: "center",
  },
});

export default function HomeScreen() {
  const [postData , setPostData] = useState([] as any[]);
   const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const fetchData = async () => {
    try{
 const postURl = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
  const res =  await postURl.json()
  setPostData(res);
    setIsLoading(false);
    }
    catch(error){
      console.error("Error fetching data:", error)
    }
  }
useEffect(() => {
  fetchData();
},[])
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };
if(isLoading){
  return (
    <SafeAreaView style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading...</Text>
    </SafeAreaView>
  );
}
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.listContainer}>
   <FlatList 
   data={postData}
   renderItem={({item}) => {
     return (
       <View style={styles.card}>
                  <Text style={styles.nameText}>{item.title}</Text>
                  <Text style={styles.typeText}>{item.body}</Text>
                </View>
     )
   }}
    keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
              ListEmptyComponent={<Text>No Posts Found</Text>}
              ListHeaderComponent={
                <Text style={styles.headerText}>Post List</Text>
              }
              ListFooterComponent={
                <Text style={styles.footerText}>End of list</Text>
              }
              refreshing={refreshing}
              onRefresh={handleRefresh}
   />
    </View>
    </SafeAreaView>
  );
}


 