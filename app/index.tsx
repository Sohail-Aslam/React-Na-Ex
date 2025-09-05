import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/partial-react-logo.png")} // Using a placeholder image
          style={styles.avatar}
        />
        <Text className="text-4xl" >Sohail Aslam</Text>
        <Text style={styles.title}>Software Student</Text>
        <View style={styles.aboutSection}>
          <Text style={styles.aboutHeader}>About Me</Text>
          <Text style={styles.aboutText}>
            Passionate software engineer with a focus on React Native
            development. I enjoy building intuitive and performant mobile
            applications. Always eager to learn new technologies and improve my
            skills.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>My Projects</Text>
          <Text style={styles.cardContent}>
            Explore a variety of my personal and professional projects. From
            simple utility apps to complex enterprise solutions.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Skills</Text>
          <Text style={styles.cardContent}>
            React Native, JavaScript, TypeScript, Node.js, Python, AWS, Docker.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    paddingVertical: 20,
  },
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: "90%",
    maxWidth: 500,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#6200ee",
  },
  title: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  aboutSection: {
    marginTop: 20,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 20,
  },
  aboutHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  aboutText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 15,
    marginTop: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
  },
});
