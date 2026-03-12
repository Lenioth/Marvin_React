import React, { useMemo } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import TRACKS_BY_BOOK from "../data/tracks";
import ChapterCard from "../components/ChapterCard";
import ScreenContainer from "../components/ScreenContainer";
import useAudiobookPlayer from "../hooks/useAudiobookPlayer";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
import PrimaryButton from "../components/PrimaryButton";
import SectionTitle from "../components/SectionTitle";

export default function AudiobookChaptersScreen({ route }) {
  const { bookId, bookTitle } = route.params;
  const tracks = useMemo(() => TRACKS_BY_BOOK[bookId] || [], [bookId]);

  const {
    current,
    isPlaying,
    savedProgress,
    formatTime,
    playTrack,
    pause,
    resume,
    stop,
  } = useAudiobookPlayer(bookId, tracks);

  const renderItem = ({ item }) => {
    const selected = current?.id === item.id;

    const progressText =
      savedProgress[item.id] > 0
        ? `Continuar de ${formatTime(savedProgress[item.id])}`
        : "Toque para ouvir";

    return (
      <ChapterCard
        item={item}
        selected={selected}
        isPlaying={isPlaying}
        progressText={progressText}
        onPress={() => playTrack(item)}
      />
    );
  };

  return (
    <ScreenContainer>
      <Text
        style={styles.title}
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel={bookTitle}
      >
        {bookTitle}
      </Text>
      <Text
        style={styles.subtitle}
        accessible={true}
        accessibilityLabel="Capítulos disponíveis"
      >
        Capítulos disponíveis
      </Text>

      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: spacing.sm }} />}
        contentContainerStyle={{
          paddingHorizontal: spacing.md,
          paddingBottom: spacing.lg,
        }}
        accessible={true}
        accessibilityLabel="Lista de capítulos"
        accessibilityHint="Deslize para ver todos os capítulos"
      />

      <View
        style={styles.player}
        accessible={true}
        accessibilityLabel="Controle de reprodução de áudio"
      >
        <Text
          style={styles.now}
          accessible={true}
          accessibilityLabel={
            current
              ? `Agora tocando: ${current.title}`
              : "Nenhum capítulo selecionado. Selecione um capítulo para ouvir"
          }
        >
          {current
            ? `Agora: ${current.title}`
            : "Selecione um capítulo para ouvir"}
        </Text>

        <View style={styles.controls} accessible={false}>
          <Pressable
            style={styles.btn}
            onPress={resume}
            disabled={!current}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Reproduzir"
            accessibilityHint={
              current
                ? "Retoma a reprodução do capítulo atual"
                : "Desabilitado - nenhum capítulo selecionado"
            }
            accessibilityState={{ disabled: !current }}
          >
            <Text
              style={styles.btnText}
              accessible={false}
              importantForAccessibility="no"
            >
              ▶️
            </Text>
          </Pressable>

          <Pressable
            style={styles.btn}
            onPress={pause}
            disabled={!current}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Pausar"
            accessibilityHint={
              current
                ? "Pausa a reprodução do capítulo atual"
                : "Desabilitado - nenhum capítulo selecionado"
            }
            accessibilityState={{ disabled: !current }}
          >
            <Text
              style={styles.btnText}
              accessible={false}
              importantForAccessibility="no"
            >
              ⏸️
            </Text>
          </Pressable>

          <Pressable
            style={styles.btn}
            onPress={stop}
            disabled={!current}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Parar"
            accessibilityHint={
              current
                ? "Para a reprodução e volta ao início"
                : "Desabilitado - nenhum capítulo selecionado"
            }
            accessibilityState={{ disabled: !current }}
          >
            <Text
              style={styles.btnText}
              accessible={false}
              importantForAccessibility="no"
            >
              ⏹️
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    ...typography.title,
    marginBottom: spacing.xs,
    textAlign: "center",
  },

  subtitle: {
    color: colors.textMuted,
    ...typography.body,
    marginBottom: spacing.md,
    textAlign: "center",
  },

  player: {
    marginTop: spacing.sm,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  now: {
    color: colors.textMuted,
    ...typography.body,
    marginBottom: spacing.sm,
    textAlign: "center",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },

  btn: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },

  btnText: {
    ...typography.button,
  },
});
