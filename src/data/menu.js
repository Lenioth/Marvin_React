import { ROUTES } from "../navigation/routes";

const MENU_ITEMS = [
  {
    id: "1",
    title: "Adquirir Livros Marvin Grinn",
    type: "external",
    url: "https://api.whatsapp.com/send/?phone=555591911219&text=Ol%C3%A1%2C+gostaria+de+entrar+em+contato%21&type=phone_number&app_absent=0",
    emoji: "💬",
  },
  {
    id: "2",
    title: "Projeto Social",
    type: "screen",
    screen: ROUTES.PROJETO,
    emoji: "🤝",
  },
  {
    id: "3",
    title: "Saga",
    type: "screen",
    screen: ROUTES.SAGA,
    emoji: "📚",
  },
  {
    id: "4",
    title: "Site",
    type: "external",
    url: "https://www.marvingrinnsocial.com.br/",
    emoji: "🌐",
  },
  {
    id: "5",
    title: "Livros",
    type: "external",
    url: "https://www.marvingrinnsocial.com.br/a-serie/",
    emoji: "📚",
  },
  {
    id: "6",
    title: "Games",
    type: "external",
    url: "https://www.marvingrinnsocial.com.br/jogos",
    emoji: "🎮",
  },
  {
    id: "7",
    title: "Audiolivro",
    type: "screen",
    screen: ROUTES.AUDIOBOOK,
    emoji: "🎧",
  },
];

export default MENU_ITEMS;
