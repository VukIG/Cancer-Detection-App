import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Welcome() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Welcome to CDA</Text>
      <Text style={styles.description}>
        Scan your naevus with your phone's camera and check if it's benign or malignant
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,
    top:'120%'
  },
  title: {
    fontSize: 50,
    fontWeight:'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    maxWidth:330,
    marginLeft:-30,
    paddingHorizontal: 20,
  },
});

export default Welcome;
