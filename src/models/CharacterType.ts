import type { GetImageResult } from "astro";

interface CharData {
  personality: string;
  text: string;
}

export interface CharacterType {
  id: string;
  name: string;
  // img: string;
  img: ImageMetadata;
  bg: ImageMetadata;
  es: CharData;
  en: CharData;
}
