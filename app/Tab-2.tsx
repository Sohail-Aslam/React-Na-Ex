import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function Tab2() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Dynamic Content</Text>

        <View style={styles.contentBlock}>
          <Text style={styles.blockTitle}>Introduction</Text>
          <Text style={styles.blockText}>
            This tab demonstrates dynamic content loading and a "show more" feature.
            Below you will find a brief introduction, followed by additional details
            that can be toggled for visibility.
          </Text>
        </View>

        <View style={styles.contentBlock}>
          <Text style={styles.blockTitle}>Main Article Snippet</Text>
          <Text style={styles.blockText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
          {showMore && (
            <View>
              <Text style={styles.blockText}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
              </Text>
              <Text style={styles.blockText}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                et dolore magnam aliquam quaerat voluptatem.
              </Text>
            </View>
          )}
          <TouchableOpacity onPress={toggleShowMore} style={styles.showMoreButton}>
            <Text style={styles.showMoreButtonText}>
              {showMore ? "Show Less" : "Show More"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentBlock}>
          <Text style={styles.blockTitle}>Conclusion</Text>
          <Text style={styles.blockText}>
            Thank you for exploring the dynamic content on Tab 2. This feature
            can be extended to load content from APIs or local data sources.
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
    backgroundColor: "#e8f5e9",
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
    color: "#2e7d32",
    marginBottom: 30,
  },
  contentBlock: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 18,
    marginVertical: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  blockTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  blockText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 10,
  },
  showMoreButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#4caf50",
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  showMoreButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
