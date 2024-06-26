import { getImage } from "astro:assets";

import drawing1 from "../../public/drawings/drawing1.webp";
import drawing2 from "../../public/drawings/drawing2.webp";
import drawing3 from "../../public/drawings/drawing3.webp";
import drawing4 from "../../public/drawings/drawing4.webp";

const optimizedDrawing1 = await getImage({ src: drawing1, format: "webp" });
const optimizedDrawing2 = await getImage({ src: drawing2, format: "webp" });
const optimizedDrawing3 = await getImage({ src: drawing3, format: "webp" });
const optimizedDrawing4 = await getImage({ src: drawing4, format: "webp" });

export const imgList = [
  optimizedDrawing1.src,
  optimizedDrawing2.src,
  optimizedDrawing3.src,
  optimizedDrawing4.src,
];
