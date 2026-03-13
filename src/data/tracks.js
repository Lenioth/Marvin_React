const BASE_URL_livro_1 = "https://pub-9ddcb02b25924f42b71dcbeafe7670e8.r2.dev/";
const BASE_URL_livro_2 = "https://pub-63f0377e9f114535a9b53efaab6c4257.r2.dev/";

const TRACKS_BY_BOOK = {
  livro1: [
    {
      id: "1",
      title: "Prólogo",
      source: {
        uri: "https://pub-9ddcb02b25924f42b71dcbeafe7670e8.r2.dev/0%20-%20Pr%C3%B3logo%20A%20entrevista.mp3",
      },
    },
    {
      id: "2",
      title: "Vila Branca",
      source: {
        uri: BASE_URL_livro_1 + "livro1/capitulo-01.mp3",
      },
    },
    {
      id: "3",
      title: "Adormecido Parte 1",
      source: { uri: BASE_URL_livro_1 + "livro1/capitulo-02.mp3" },
    },
  ],

  livro2: [
    {
      id: "1",
      title: "Capítulo 1",
      source: { uri: BASE_URL_livro_2 + "livro2/capitulo-01.mp3" },
    },
    {
      id: "2",
      title: "Capítulo 2",
      source: { uri: BASE_URL_livro_2 + "livro2/capitulo-02.mp3" },
    },
  ],
};

export default TRACKS_BY_BOOK;
