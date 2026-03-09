const BOOKS = [
  {
    id: "1",
    title: "Marvin Grinn e a Chave Mestra",
    description: "A aventura começa aqui.",
    cover: require("../../assets/img/Livro_1.png"),
    routeParam: "livro1",
    comingSoon: false,
  },
  {
    id: "2",
    title: "Marvin Grinn e o Segredo da Sereia",
    description: "Um novo portal se abre.",
    cover: require("../../assets/img/Livro_2.png"),
    routeParam: "livro2",
    comingSoon: false,
  },
  {
    id: "3",
    title: "Marvin Grinn e a Gaiola Dourada",
    description: "A aventura agora é no céu.",
    cover: require("../../assets/img/Livro_3.png"),
    routeParam: "livro3",
    comingSoon: true,
  },
];

export default BOOKS;
