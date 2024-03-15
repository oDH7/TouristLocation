import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TouristLocation = ({ name, address, description, imageSource }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 500,
    height: 500,
    marginBottom: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    fontsize: 25,
    color: "#add8e6",
    marginBottom: 5,
  },
  description: {
    fontsize: 20,
    color: "#a9a9a9",
    lineHeight: 22,
  },
});

export default TouristLocation;
