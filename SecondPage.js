// SecondPage.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SecondPage = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation prop

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={require('./background.png')} style={styles.backgroundImage}>
        <Text style={styles.title}>Second Page</Text>

        {/* Lower Container with Icon Buttons */}
        <View style={styles.lowerContainer}>
          {/* Calendar Button */}
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Calendar Button Pressed')}>
            <Icon name="calendar" size={36} color="black" />
          </TouchableOpacity>

          {/* Settings Button */}
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Settings Button Pressed')}>
            <Icon name="cogs" size={36} color="black" />
          </TouchableOpacity>

          {/* Back Button */}
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={36} color="black" />
          </TouchableOpacity>
        </View>

        {/* Middle Container with Additional Buttons */}
        <View style={styles.middleContainer}>
          {/* History Button */}
          <TouchableOpacity style={styles.transparentButton} onPress={() => console.log('History Button Pressed')}>
            <Icon name="history" size={100} color="black" />
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity>

          {/* Parameters Button */}
          <TouchableOpacity style={styles.transparentButton} onPress={() => console.log('Parameters Button Pressed')}>
            <Icon name="sliders" size={100} color="black" />
            <Text style={styles.buttonText}>Parameters</Text>
          </TouchableOpacity>

          {/* Power Button */}
          <TouchableOpacity style={styles.transparentButton} onPress={() => console.log('Power Button Pressed')}>
            <Icon name="power-off" size={100} color="black" />
            <Text style={styles.buttonText}>Power</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Black text color
  },
  lowerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 128, 0, 0.8)', // Green background color with opacity
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'transparent', // Transparent background color for buttons
    padding: 5, // Increased padding for larger buttons
    borderRadius: 50,
    alignItems: 'center',
  },
  transparentButton: {
    backgroundColor: 'transparent', // Transparent background color for buttons
    alignItems: 'center',
    marginVertical: 3, // Adjust the margin between buttons
  },
  buttonText: {
    color: 'black', // Black text color for buttons
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SecondPage;
