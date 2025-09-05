import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";

export default function Tab1() {
  // Debug log to validate styles integrity
  console.log('Styles object:', styles);
  const handleCardPress = (cardName: string) => {
    Alert.alert("Card Pressed", `You pressed ${cardName}!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Interactive Cards</Text>

        <TouchableOpacity style={styles.card} onPress={() => handleCardPress("Card One")}>
          <Text style={styles.cardTitle}>Card One</Text>
          <Text style={styles.cardContent}>This is the content for card one. Tap to interact!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleCardPress("Card Two")}>
          <Text style={styles.cardTitle}>Card Two</Text>
          <Text style={styles.cardContent}>Another interactive card. Discover more by tapping.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleCardPress("Card Three")}>
          <Text style={styles.cardTitle}>Card Three</Text>
          <Text style={styles.cardContent}>A third card with unique information. Give it a try!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleCardPress("Card Four")}>
          <Text style={styles.cardTitle}>Card Four</Text>
          <Text style={styles.cardContent}>The final card in this set. Each card offers a different experience.</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7fa",
    paddingVertical: 20,
  },
  container: {
    alignItems: "center",
    padding: 20,
    width: "90%",
    maxWidth: 600,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#00796b",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
  },
});
