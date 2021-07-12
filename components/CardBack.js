import React, {} from "react";
import { StyleSheet, Image, Animated } from "react-native";

function CardBack(props) {
  
  return (
    <Animated.View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/logo-mindtation1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#000000"
  },
  image: {
    width: '100%',
    height: '100%',
    marginTop: '-20%'
  }
});

export default CardBack;
