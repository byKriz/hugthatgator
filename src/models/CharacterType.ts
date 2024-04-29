import type { GetImageResult } from "astro";

export interface CharacterType {
    id: string;
    name: string;
    // img: string;
    img: ImageMetadata;
}