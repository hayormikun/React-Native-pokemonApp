import {
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

type CardProps = {
  name: string;
  image: ImageSourcePropType;
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
};

const getTypeEmoji = (type: string) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#ffd700", emoji: "⚡" };
    case "water":
      return { borderColor: "#6493ea", emoji: "💧" };
    case "fire":
      return { borderColor: "#ff5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66cc66", emoji: "🌿" };

    default:
      return { borderColor: "#a0a0a0", emoji: "❓" };
  }
};

export const Card = ({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}: CardProps) => {
    const {borderColor, emoji} = getTypeEmoji(type)
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, {borderColor: borderColor}]}>
            <Text style={styles.typeEmoji}>{emoji}</Text>
            <Text style={styles.type}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.moves}>Moves: {moves.join(", ")}</Text>
      </View>
      <View style={styles.weeknessContainer}>
        <Text style={styles.weekness}>Weekness: {weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 2,
    padding: 8,
    margin: 8,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 32,
  },
  typeContainer: {
    marginBottom: 40
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 2
  },
  type: {
    fontSize: 22,
    fontWeight: "bold"
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12
  },
  movesContainer: {
    marginBottom: 16
  },
  moves: {
    fontSize: 22,
    fontWeight: "bold"
  },
  weeknessContainer: {
    marginBottom: 8
  },
  weekness: {
    fontSize: 22,
    fontWeight: "bold"
  },
});
