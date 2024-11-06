import { Card } from "@/components/Card";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import { pokemons } from "@/constants/Data";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => {
          return (
            <Card
              name={item.name}
              image={item.image}
              type={item.type}
              hp={item.hp}
              moves={item.moves}
              weaknesses={item.weaknesses}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
});
