import { ROUTES } from "../navigation/routes";
import rede from "../../assets/icons/rede.svg";
import wand from "../../assets/icons/magic-wand.svg";
import book from "../../assets/icons/books.svg";
import headset from "../../assets/icons/headphone.svg";
import game from "../../assets/icons/joystick.svg";
import social from "../../assets/icons/social.svg";
import project from "../../assets/icons/project.svg";

const MENU_ITEMS = [
  {
    id: "1",
    title: "Adquirir Livros Marvin Grinn",
    type: "external",
    url: "https://api.whatsapp.com/send/?phone=555591911219&text=Ol%C3%A1%2C+gostaria+de+entrar+em+contato%21&type=phone_number&app_absent=0",
    icon: social,
  },
  {
    id: "2",
    title: "Projeto Social",
    type: "screen",
    screen: ROUTES.PROJETO,
    icon: project,
  },
  {
    id: "3",
    title: "Saga",
    type: "screen",
    screen: ROUTES.SAGA,
    icon: wand,
  },
  {
    id: "4",
    title: "Site",
    type: "external",
    url: "https://www.marvingrinnsocial.com.br/",
    icon: rede,
  },
  {
    id: "5",
    title: "Livros",
    type: "external",
    url: "https://www.marvingrinnsocial.com.br/a-serie/",
    icon: book,
  },
  {
    id: "6",
    title: "Games",
    type: "external",
    url: "https://www.marvingrinnsocial.com.br/jogos",
    icon: game,
  },
  {
    id: "7",
    title: "Audiolivro",
    type: "screen",
    screen: ROUTES.AUDIOBOOK,
    icon: headset,
  },
];

export default MENU_ITEMS;
