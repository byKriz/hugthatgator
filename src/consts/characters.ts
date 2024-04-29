// import img from "../../public/characters/fb_carry.png";
import type { CharacterType } from "../models/CharacterType";

import oliviaImg from "../../public/characters/olivia.webp";
import incoImg from "../../public/characters/inco.webp";
import damienImg from "../../public/characters/damien.webp";
import lizImg from "../../public/characters/liz.webp";
import iadakanImg from "../../public/characters/iadakan.webp";
import benImg from "../../public/characters/ben.webp";
import miaImg from "../../public/characters/mia.webp";

export const CHARACTERS: CharacterType[] = [
  {
    id: "olivia",
    name: "Olivia",
    img: oliviaImg,
  },
  {
    id: "inco",
    name: "Inco",
    img: incoImg,
  },
  {
    id: "iadakan",
    name: "Iadakan",
    img: iadakanImg,
  },
  {
    id: "damien",
    name: "Damien",
    img: damienImg,
  },
  {
    id: "liz",
    name: "Liz",
    img: lizImg,
  },

  {
    id: "ben",
    name: "Ben",
    img: benImg,
  },
  {
    id: "mia",
    name: "Mia",
    img: miaImg,
  },
];
