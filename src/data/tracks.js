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

export default TRACKS_BY_BOOK;
