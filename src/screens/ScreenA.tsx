import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlayerView } from '../components/PlayerView';

export const ScreenA: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen A - Single Player</Text>
      <PlayerView style={styles.player} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  player: {
    flex: 1,
  },
});
