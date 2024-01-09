// Welcome.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';

const Welcome = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(1));

  const handlePress = () => {
    // Fade out animation
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: false,
    }).start(() => {
      // Navigate to the next screen
      navigation.navigate('SecondPage');
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        {/* Replace the source below with your logo image */}
        <Image source={require('./front.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome!</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White background
  },
  logo: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20, // Adjust the margin as needed for vertical centering
  },
});

export default Welcome;
