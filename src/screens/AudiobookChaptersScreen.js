import React, { useMemo, useState } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import AudioVisualizer from "./AudioVisualizer";

const BASE_URL = "https://SEU-LINK-CDN/";

const TRACKS_BY_BOOK = {
  livro1: [
    {
      id: "1",
      title: "Prólogo",
      source: require("../../assets/teste/0 - Prólogo A entrevista.mp3"),
    },
    {
      id: "2",
      title: "Capítulo 1",
      source: { uri: BASE_URL + "livro1/capitulo-01.mp3" },
    },
  ],
  livro2: [
    {
      id: "1",
      title: "Capítulo 1",
      source: { uri: BASE_URL + "livro2/capitulo-01.mp3" },
    },
    {
      id: "2",
      title: "Capítulo 2",
      source: { uri: BASE_URL + "livro2/capitulo-02.mp3" },
    },
  ],
  livro3: [
    {
      id: "1",
      title: "Capítulo 1",
      source: { uri: BASE_URL + "livro3/capitulo-01.mp3" },
    },
  ],
  livro4: [
    {
      id: "1",
      title: "Capítulo 1",
      source: { uri: BASE_URL + "livro4/capitulo-01.mp3" },
    },
  ],
};

export default function AudiobookChaptersScreen({ route }) {
  const { bookId, bookTitle } = route.params;
  const tracks = useMemo(() => TRACKS_BY_BOOK[bookId] || [], [bookId]);

  const [current, setCurrent] = useState(null);

  // Hook recomendado pela Expo para criar e gerenciar o player
  const player = useAudioPlayer(current ? current.source : null);
  const status = useAudioPlayerStatus(player);
  const isPlaying = status?.playing ?? false;

  function playTrack(track) {
    try {
      if (current?.id !== track.id) {
        // troca a fonte atual pelo novo capítulo
        player.replace(track.source);
        setCurrent(track);
      }
      player.play();
    } catch (error) {
      console.log("Erro ao tocar:", error);
    }
  }

  function pause() {
    if (!current) return;
    player.pause();
  }

  function resume() {
    if (!current) return;
    player.play();
  }

  function stop() {
    if (!current) return;
    player.pause();
    player.seekTo(0);
  }

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

        <View style={styles.trackFooter}>
          <Text style={styles.trackHint}>
            {selected
              ? isPlaying
                ? "Tocando..."
                : "Selecionado"
              : "Toque para ouvir"}
          </Text>

          {selected && <AudioVisualizer isPlaying={isPlaying} />}
        </View>
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
  trackFooter: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    justifyContent: "center",
    alignItems: "center",
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
