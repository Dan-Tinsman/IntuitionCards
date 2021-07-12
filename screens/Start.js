import React, { } from "react";
import { StyleSheet, View, Text, Animated, ImageBackground, Easing } from "react-native";
import CardBack from "../components/CardBack";
import { Button, IconButton } from "../components";
import { useFonts } from 'expo-font';
import FooterNav from "../components/FooterNav";

function Start(props) {

  // const [loaded] = useFonts({
  //   RobotoRegular: require('../assets/fonts/roboto-regular.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // };

  let shakeAnimationStartRight = new Animated.Value(0);
  let shakeAnimationStartLeft = new Animated.Value(0);

  const shuffleDeck = () => {
    Animated.sequence([
      Animated.timing(shakeAnimationStartRight, { toValue: 20, duration: 50, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shakeAnimationStartLeft, { toValue: -20, duration: 50, easing: Easing.linear, useNativeDriver: true }),

      Animated.timing(shakeAnimationStartRight, { toValue: -20, duration: 50, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shakeAnimationStartLeft, { toValue: 20, duration: 50, easing: Easing.linear, useNativeDriver: true }),

      Animated.timing(shakeAnimationStartRight, { toValue: 20, duration: 50, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shakeAnimationStartLeft, { toValue: -20, duration: 50, easing: Easing.linear, useNativeDriver: true }),

      Animated.timing(shakeAnimationStartRight, { toValue: -20, duration: 50, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shakeAnimationStartLeft, { toValue: 20, duration: 50, easing: Easing.linear, useNativeDriver: true }),

      Animated.timing(shakeAnimationStartRight, { toValue: 20, duration: 50, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shakeAnimationStartLeft, { toValue: -20, duration: 50, easing: Easing.linear, useNativeDriver: true }),

      Animated.timing(shakeAnimationStartRight, { toValue: 0, duration: 50, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shakeAnimationStartLeft, { toValue: 0, duration: 50, easing: Easing.linear, useNativeDriver: true })
    ]).start();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/intuition-galaxy3.jpg')} resizeMode='cover' style={styles.imageBackground}>
        <Text style={styles.guideText}>Shuffle the deck as many times as you want. Click the arrow button when you are ready to move on.</Text>
        <View>
          <View>
            <View style={styles.cardBackStack}>
              <CardBack style={[styles.cardBack, { transform: [{ translateX: shakeAnimationStartRight }] }]}></CardBack>
              <CardBack style={[styles.cardBack2, { transform: [{ translateX: shakeAnimationStartLeft }] }]}></CardBack>
              <CardBack style={[styles.cardBack3, { transform: [{ translateX: shakeAnimationStartRight }] }]}></CardBack>
              <CardBack style={[styles.cardBack4, { transform: [{ translateX: shakeAnimationStartLeft }] }]}></CardBack>
              <CardBack style={[styles.cardBack5, { transform: [{ translateX: shakeAnimationStartRight }] }]}></CardBack>
            </View>
          </View>
          <View style={styles.row}>
            <Button
              onPress={shuffleDeck}
              backgroundColor='#f57c00'
              title='Shuffle'
              titleColor='#fff'
              titleSize={20}
              containerStyle={styles.materialButtonDanger}
            />
            <IconButton
              name='rightcircle'
              size={44}
              color='#ff6600'
              onPress={shuffleDeck}
            />
          </View>
        </View>

      </ImageBackground>
      <FooterNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  guideText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    padding: '5%'
  },
  cardBack: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '90%',
    height: '90%'
  },
  cardBack2: {
    position: "absolute",
    left: 7,
    top: 6,
    width: '90%',
    height: '90%'
  },
  cardBack3: {
    position: "absolute",
    left: 14,
    top: 12,
    width: '90%',
    height: '90%'
  },
  cardBack4: {
    position: "absolute",
    left: 21,
    top: 18,
    width: '90%',
    height: '90%'
  },
  cardBack5: {
    position: "absolute",
    left: 28,
    top: 24,
    width: '90%',
    height: '90%'
  },
  cardBackStack: {
    width: 190,
    height: 318
  },
  materialButtonDanger: {
    height: 36,
    width: 100,
    alignSelf: "center"
  }
});

export default Start;
