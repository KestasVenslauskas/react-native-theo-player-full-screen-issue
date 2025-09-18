import React, { useRef, useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { PresentationMode, THEOplayerView } from 'react-native-theoplayer';
import type { THEOplayer } from 'react-native-theoplayer';

interface PlayerViewProps {
  source?: string;
  style?: any;
}

export const PlayerView: React.FC<PlayerViewProps> = ({
  source = 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
  style,
}) => {
  const playerRef = useRef<THEOplayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    if (playerReady && playerRef.current) {
      // Set the source when player is ready
      playerRef.current.source = {
        sources: {
          src: source,
          type: 'application/x-mpegurl',
        },
      };
    }
  }, [source, playerReady]);

  const handlePlayerReady = (player: THEOplayer) => {
    playerRef.current = player;
    setPlayerReady(true);
    console.log('THEOplayer is ready');
  };

  const handlePlayerDestroy = () => {
    playerRef.current = null;
    setPlayerReady(false);
    console.log('THEOplayer is destroyed');
  };

  const handlePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (playerRef.current) {
      if (playerRef.current.presentationMode !== PresentationMode.fullscreen) {
        playerRef.current.presentationMode = PresentationMode.fullscreen;
      } else {
        playerRef.current.presentationMode = PresentationMode.inline;
      }
    }
  };

  return (
    <View style={[styles.container, style]}>
      <THEOplayerView
        style={styles.player}
        config={{
          license: undefined, // Add your THEOplayer license here
        }}
        onPlayerReady={handlePlayerReady}
        onPlayerDestroy={handlePlayerDestroy}
      >
        <View style={styles.controls}>
          <TouchableOpacity style={styles.button} onPress={handlePlayPause}>
            <Text style={styles.buttonText}>
              {isPlaying ? 'Pause' : 'Play'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleFullscreen}>
            <Text style={styles.buttonText}>
              {playerRef.current?.presentationMode ===
              PresentationMode.fullscreen
                ? 'Inline'
                : 'Fullscreen'}
            </Text>
          </TouchableOpacity>
        </View>
      </THEOplayerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  player: {
    flex: 1,
    aspectRatio: 16 / 9,
  },

  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
