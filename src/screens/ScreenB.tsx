import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PlayerView } from '../components/PlayerView';

export const ScreenB: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Screen B - Multiple Players</Text>

      <View style={styles.playerContainer}>
        <Text style={styles.playerTitle}>Player 1</Text>
        <PlayerView style={styles.player} />
      </View>

      <View style={styles.playerContainer}>
        <Text style={styles.playerTitle}>Player 2</Text>
        <PlayerView style={styles.player} />
      </View>

      <View style={styles.playerContainer}>
        <Text style={styles.playerTitle}>Player 3</Text>
        <PlayerView style={styles.player} />
      </View>
    </ScrollView>
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
  playerContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  playerTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    paddingLeft: 5,
  },
  player: {
    height: 250,
    backgroundColor: '#111',
    borderRadius: 8,
  },
});
