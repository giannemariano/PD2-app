// Welcome.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Welcome = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(1));

  const handleStartPress = () => {
    // Fade out animation
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: false,
    }).start(() => {
      // Navigate to the SecondPage
      navigation.navigate('SecondPage');
    });
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Replace the source below with your logo image */}
      <Image source={require('./front.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome!</Text>

      {/* Start Button */}
      <TouchableOpacity onPress={handleStartPress} style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </Animated.View>
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
  startButton: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF', // Adjust the color as needed
    borderRadius: 5,
  },
  startButtonText: {
    color: '#fff', // White text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Welcome;
