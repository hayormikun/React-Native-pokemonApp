export const pokemons = [
  {
    name: "Bulbasaur",
    image: require("./assets/images/bulbasaur.jpeg"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  },
  {
    name: "Charmander",
    image: require("./assets/images/charmander.jpeg"),
    type: "Fire",
    hp: 30,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  },
  {
    name: "Pikachu",
    image: require("./assets/images/pikachu.jpg"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "ThunderBolt", "Tail whip", "Growl"],
    weaknesses: ["Ground"],
  },
  {
    name: "Squirtle",
    image: require("./assets/images/squirtle.jpeg"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  },
];
