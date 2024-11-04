import { Card } from "@/components/Card";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  const charmander = {
    name: "Charmander",
    image: require("../../assets/images/charmander.jpeg"),
    type: "Fire",
    hp: 30,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };
  const bulbasaur = {
    name: "Bulbasaur",
    image: require("../../assets/images/bulbasaur.jpeg"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachu = {
    name: "Pikachu",
    image: require("../../assets/images/pikachu.jpg"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "ThunderBolt", "Tail whip", "Growl"],
    weaknesses: ["Ground"],
  };

  const squirtle = {
    name: "Squirtle",
    image: require("../../assets/images/squirtle.jpeg"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <Card
          name={bulbasaur.name}
          image={bulbasaur.image}
          type={bulbasaur.type}
          hp={bulbasaur.hp}
          moves={bulbasaur.moves}
          weaknesses={bulbasaur.weaknesses}
        />
        <Card
          name={charmander.name}
          image={charmander.image}
          type={charmander.type}
          hp={charmander.hp}
          moves={charmander.moves}
          weaknesses={charmander.weaknesses}
        />
        <Card
          name={pikachu.name}
          image={pikachu.image}
          type={pikachu.type}
          hp={pikachu.hp}
          moves={pikachu.moves}
          weaknesses={pikachu.weaknesses}
        />

        <Card
          name={squirtle.name}
          image={squirtle.image}
          type={squirtle.type}
          hp={squirtle.hp}
          moves={squirtle.moves}
          weaknesses={squirtle.weaknesses}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
