import { useEffect, useState } from "react";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useAudiobookPlayer(bookId, tracks) {
  const [current, setCurrent] = useState(null);
  const [savedProgress, setSavedProgress] = useState({});

  const player = useAudioPlayer(tracks[0]?.source ?? null);

  const status = useAudioPlayerStatus(player);
  const isPlaying = status?.playing ?? false;

  const getStorageKey = (track) => `audio-progress-${bookId}-${track.id}`;

  function formatTime(seconds) {
    if (!seconds || seconds <= 0) return "00:00";

    const totalSeconds = Math.floor(seconds);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds,
    ).padStart(2, "0")}`;
  }

  async function saveProgress(track, position) {
    try {
      if (!track) return;
      await AsyncStorage.setItem(getStorageKey(track), String(position));
    } catch (error) {
      console.log("Erro ao salvar progresso:", error);
    }
  }

  async function loadProgress(track) {
    try {
      const saved = await AsyncStorage.getItem(getStorageKey(track));
      return saved ? Number(saved) : 0;
    } catch (error) {
      console.log("Erro ao carregar progresso:", error);
      return 0;
    }
  }

  async function playTrack(track) {
    try {
      const savedPosition = await loadProgress(track);

      player.replace(track.source);
      setCurrent(track);

      setTimeout(async () => {
        try {
          if (savedPosition > 0) {
            await player.seekTo(savedPosition);
          }
          player.play();
        } catch (error) {
          console.log("Erro ao tocar:", error);
        }
      }, 250);
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

  async function stop() {
    if (!current) return;
    await saveProgress(current, 0);
    setSavedProgress((prev) => ({
      ...prev,
      [current.id]: 0,
    }));
    player.pause();
    await player.seekTo(0);
  }

  useEffect(() => {
    async function loadAllProgress() {
      try {
        const progressMap = {};

        for (const track of tracks) {
          const saved = await AsyncStorage.getItem(getStorageKey(track));
          progressMap[track.id] = saved ? Number(saved) : 0;
        }

        setSavedProgress(progressMap);
      } catch (error) {
        console.log("Erro ao carregar progressos:", error);
      }
    }

    loadAllProgress();
  }, [tracks]);

  useEffect(() => {
    if (!current || !status) return;

    const position = status.currentTime ?? 0;

    if (position > 0) {
      saveProgress(current, position);

      setSavedProgress((prev) => ({
        ...prev,
        [current.id]: position,
      }));
    }
  }, [status, current]);

  return {
    current,
    isPlaying,
    savedProgress,
    formatTime,
    playTrack,
    pause,
    resume,
    stop,
  };
}
