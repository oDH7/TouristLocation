import React from "react";
import { View, StyleSheet } from "react-native";
import TouristLocation from "./components/TouristLocation";

const App = () => {
  return (
    <View style={styles.container}>
      <TouristLocation
        name="Praia Grande, Ubatuba"
        address="Av. Doutor Mauro Tadeu Silva, 426 - Praia Grande, Ubatuba - SP, 11680-000, Brazil"
        description="Praia Grande is one of the most popular beaches in Ubatuba, Brazil. It offers a wide stretch of golden sand, perfect for sunbathing and beach sports. The clear waters are great for swimming and surfing."
        imageSource="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/1e/28/a7/calcadao-solemar.jpg?w=500&h=500&s=1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default App;
