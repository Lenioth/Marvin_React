import React, { useEffect, useRef, useState } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import { AudioPlayer } from "expo-audio";

const BASE_URL = "https://SEU-LINK-CDN/";

const TRACKS_BY_BOOK = {
  livro1: [
    { id: "1", title: "Prólogo", uri: BASE_URL + "livro1/prologo.mp3" },
    { id: "2", title: "Capítulo 1", uri: BASE_URL + "livro1/capitulo-01.mp3" },
  ],
  livro2: [
    { id: "1", title: "Capítulo 1", uri: BASE_URL + "livro2/capitulo-01.mp3" },
    { id: "2", title: "Capítulo 2", uri: BASE_URL + "livro2/capitulo-02.mp3" },
  ],
  livro3: [
    { id: "1", title: "Capítulo 1", uri: BASE_URL + "livro3/capitulo-01.mp3" },
  ],
  livro4: [
    { id: "1", title: "Capítulo 1", uri: BASE_URL + "livro4/capitulo-01.mp3" },
  ],
};

export default function AudiobookChaptersScreen({ route }) {
  const { bookId, bookTitle } = route.params;
  const tracks = TRACKS_BY_BOOK[bookId] || [];

  const soundRef = useRef(null);
  const [current, setCurrent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function unload() {
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
    setIsPlaying(false);
  }

  async function playTrack(track) {
    try {
      await unload();

      const player = new AudioPlayer();

      await player.loadAsync(track.uri);
      player.play();

      soundRef.current = sound;
      setCurrent(track);
      setIsPlaying(true);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded) return;
        if (status.didJustFinish) setIsPlaying(false);
      });
    } catch (error) {
      console.log("Erro ao tocar:", error);
    }
  }

  async function pause() {
    if (!soundRef.current) return;
    await soundRef.current.pauseAsync();
    setIsPlaying(false);
  }

  async function resume() {
    if (!soundRef.current) return;
    await soundRef.current.playAsync();
    setIsPlaying(true);
  }

  async function stop() {
    if (!soundRef.current) return;
    await soundRef.current.stopAsync();
    setIsPlaying(false);
  }

  useEffect(() => {
    return () => {
      unload();
    };
  }, []);

  const renderItem = ({ item }) => {
    const selected = current?.id === item.id;

    return (
      <Pressable
        onPress={() => playTrack(item)}
        style={({ pressed }) => [
          styles.track,
          selected && styles.trackSelected,
          pressed && { opacity: 0.9 },
        ]}
      >
        <Text style={styles.trackTitle}>{item.title}</Text>
        <Text style={styles.trackHint}>
          {selected
            ? isPlaying
              ? "Tocando..."
              : "Selecionado"
            : "Toque para ouvir"}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{bookTitle}</Text>
      <Text style={styles.subtitle}>Capítulos disponíveis</Text>

      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <View style={styles.player}>
        <Text style={styles.now}>
          {current
            ? `Agora: ${current.title}`
            : "Selecione um capítulo para ouvir"}
        </Text>

        <View style={styles.controls}>
          <Pressable style={styles.btn} onPress={resume} disabled={!current}>
            <Text style={styles.btnText}>▶️</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={pause} disabled={!current}>
            <Text style={styles.btnText}>⏸️</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={stop} disabled={!current}>
            <Text style={styles.btnText}>⏹️</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#0b0f14", padding: 20 },
  title: { color: "#fff", fontSize: 22, fontWeight: "700", marginBottom: 4 },
  subtitle: { color: "#9ca3af", marginBottom: 14 },

  track: {
    backgroundColor: "#111827",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: "#1f2a37",
  },

  trackSelected: {
    borderColor: "#c9a24c",
  },

  trackTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  trackHint: {
    color: "#9ca3af",
    marginTop: 6,
    fontSize: 13,
  },

  player: {
    marginTop: 10,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#1f2a37",
  },

  now: {
    color: "#d1d5db",
    marginBottom: 10,
    textAlign: "center",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "center", // centraliza horizontal
    alignItems: "center", // centraliza vertical
    gap: 10,
    marginBottom: 20,
  },

  btn: {
    backgroundColor: "#c9a24c",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },

  btnText: {
    fontSize: 18,
  },
});
