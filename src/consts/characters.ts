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
    es: {
      personality:
        "Depredador Paralizado, Reclusivo, Artístico, Emocionalmente dependiente de animales pequeños",
      text: `Como alguien que prefiere mantenerse al margen, Olivia no es de las que hablan con la gente, 
      mucho menos de las que intentan hacer nuevos amigos a estas alturas del semestre. hacer nuevos amigos 
      a estas alturas del semestre. Sin embargo, el destino parece querer juntarlos a ella y a Inco... 
      como el agua y el aceite. Olivia, que al principio lo miraba con desdén, era la última persona que 
      esperaba hacerse amiga con el nuevo estudiante transferido. Pero dependiendo de las decisiones de Inco, 
      los dos podrían descubrir un profundo sentido de comprensión mutua. comprensión mutua, llevando su 
      relación a nuevos máximos (o mínimos).`,
    },
    en: {
      personality:
        "Paralyzed Predator, Reclusive, Artistic, Emotionally dependent on small animals",
      text: `As someone who prefers to keep to themselves, Olivia isn't one to talk to people, much less try to 
        make new friends this late in the semester. However, the fates seem intent on crashing her and Inco together 
        like oil and water. Dismissive of him at first, Olivia was the last person expecting to find themselves friends 
        with the newest transfer student. But depending on Inco's choices, the two just might uncover a deeper sense of 
        understanding for each other, taking their relationship to new highs (or lows).`,
    },
  },
  {
    id: "inco",
    name: "Inco",
    img: incoImg,
    es: {
      personality:
        "Ambicioso, ingenuo, aspirante a fotógrafo, la recién llegado al instituto St. Hammond",
      text: `Inco sueña con hacerse un nombre y considera que su último año es su última oportunidad. Sin embargo, nada podría 
      haberle preparado para lo que el año le depararía. Mira a través de sus gafas cómo se desenvuelve en su nueva escuela 
      dominada por los dinosaurios como un proverbial "ancestro primordial fuera del agua". Prepárate para apretar los dientes 
      mientras se abre paso torpemente entre la aceptación (o la falta de aceptación) de los adolescentes, las venganzas personales, 
      los problemas de los padres y los conflictos entre especies. Quién sabe, puede que incluso tenga éxito en algunas de estas 
      cosas si consigues ayudarle a sacar la cabeza del culo el tiempo suficiente.`,
    },
    en: {
      personality:
        "Ambitious, Naive, Aspiring Photographer, The New Arrival At St. Hammond High School",
      text: `Inco dreams of making a name for himself, and views his senior year as his last shot at it. However, nothing 
      could have prepared him for what the year would throw at him. See through his shades as he bungles along in his new 
      dino-dominated school like a proverbial 'primordial-ancestor-out-of-water'. Prepare to grit your teeth as he awkwardly 
      fumbles his way through teenage acceptance (or lack thereof), personal vendettas, parental woes and interspecies conflicts. 
      Who knows, he may even succeed at some of these things if you can manage to help him pull his head out of his ass long enough.`,
    },
  },
  {
    id: "iadakan",
    name: "Iadakan",
    img: iadakanImg,
    es: {
      personality:
        "Pterodáctilo, Profesor de arte en la escuela, Comprensivo, Cree en ti incluso cuando tú no crees en ti",
      text: `Uno de los profesores más respetados de St. Hammond High, el Sr. Iadakan siempre anima a sus alumnos a dar 
      lo mejor de sí mismos, pase lo que pase. Ve potencial en todos y cada uno de los alumnos que entran en su clase, y 
      hará todo lo posible para ayudarles a alcanzar su potencial sin explotar. Su empuje no se parece al de nadie en St. 
      Hammond, logrando mucho en su (relativamente) joven vida. Sus alumnos, e incluso sus compañeros de trabajo, no entienden 
      cómo este pterodáctilo se mantiene tan concentrado en todo momento...`,
    },
    en: {
      personality:
        "Pterodactyl, School Art Teacher, Understanding, Believes in you even when you don’t believe in you",
      text: `One of St. Hammond High’s most respected teachers, Mr. Iadakan always encourages his students to do his best, 
      no matter what. He sees potential in each and every pupil that enters his class, and will do his best to help them 
      achieve their untapped potential. His drive is unlike anyone else at St. Hammond, accomplishing a great deal in his 
      (relatively) young life. His students, and even his co-workers, are at a loss as to how this pterodactyl remains so 
      focused at all times...`,
    },
  },
  {
    id: "damien",
    name: "Damien",
    img: damienImg,
    es: {
      personality:
        "Dilopho-Spinosaurus Híbrido, Leal, Ruidoso, El funcionamiento interno de su mente es un enigma",
      text: `Aunque puede que no sea la lanza más afilada de la cueva, Damien desprende el nivel de simpatía y carisma 
      que sólo los profundamente confiados (o profundamente densos) pueden conseguir. Se considera el amigo más antiguo 
      de Olivia y quiere ayudarla a salir de su caparazón fosilizado. Tal vez el nuevo humano de la escuela sea la persona 
      adecuada para el trabajo...`,
    },
    en: {
      personality:
        "Dilopho-Spinosaurus Hybrid, Loyal, Loud, The inner workings of his mind are an enigma",
      text: `While he may not be the sharpest spear in the cave, Damien exudes the level of friendliness and charisma 
      that only the profoundly confident (or profoundly dense) can manage. He considers himself Olivia's oldest friend, 
      and wants to help her break out of her fossilized shell. Perhaps the new human at school is just the right person 
      for the job...`,
    },
  },
  {
    id: "liz",
    name: "Liz",
    img: lizImg,
    es: {
      personality:
        "Braquiosaurio, inteligente, extrovertido, te dirá el tiempo que hace allí.",
      text: `Miembro del consejo estudiantil del colegio, Liz es tan aguda como un látigo cuando no está intentando 
      desesperadamente acorralar el absurdo de Damien. Está decidida a triunfar en la vida y acepta la responsabilidad de 
      organizar eventos en St. Hammond. Le preocupa que Damien se olvide de ella cuando se vaya a la universidad 
      (si no a la habitación), así que saca tiempo para estar con él y sus amigos todo lo posible.`,
    },
    en: {
      personality:
        "Brachiosaurus, Brainy, Outgoing, Will actually tell you what the weather is like up there",
      text: `A member of the school's student council, Liz is as sharp as a whip when she's not desperately trying to corral 
      Damien's absurdity. She is bound and determined to succeed in life, accepting the responsibility of organizing events 
      at St. Hammond. She's worried Damien may forget about her when she leaves for college (if not the room), so she makes 
      time to spend with him and his friends as much as possible.`,
    },
  },

  {
    id: "ben",
    name: "Ben",
    img: benImg,
    es: {
      personality:
        "Parasaurolophus, Sabelotodo, Presumido, Un sabelotodo en general",
      text: `La primera cara acogedora que Inco conoce en St. Hammond. Ben se considera un estudiante refinado, como demuestran 
      sus notas y su puesto en el consejo estudiantil. Incluso comparte con Inco su pasión por la fotografía, lo que ayuda a 
      consolidar la amistad entre ambos. Sin embargo, es posible que Inco se dé cuenta poco a poco de que hay algo más en él a 
      medida que descubre la rocambolesca relación entre él y Olivia.`,
    },
    en: {
      personality:
        "Parasaurolophus, Textbook Savvy, Smarmy, An overall know-it-all",
      text: `The first welcoming face Inco meets at St. Hammond. Ben considers himself to be a refined student, as his 
      grades and position in the student council will show. He even shares a passion for photography with Inco, helping 
      solidify the two as friends. However, Inco may slowly realize that there's more to him as he uncovers the rocky relationship 
      between him and Olivia.`,
    },
  },
  {
    id: "mia",
    name: "Mia",
    img: miaImg,
    es: {
      personality:
        "También un Parasaurolophus, Rudo, Crudo, Le encanta lo teatral (díselo a alguien y te clavará los pinchos de su cola)",
      text: `La matona del instituto y la pesadilla de cualquiera que se atreva a cruzarse en su camino (o a mirarla mal). A Mia 
      le gusta meterse con los que considera presas fáciles, lo que aumenta su ego y sus niveles de intimidación. Aunque no lo 
      parezca, Mia es una maestra de la manipulación a la que le encanta maquinar a espaldas de todo el mundo, y no le importa que 
      Inco quede atrapado en la estela.`,
    },
    en: {
      personality:
        "Also a Parasaurolophus, Rude, Crude, Has a love for the theatrics (tell anybody and she'll pike you on her tail spikes)",
      text: `The school's resident bully and the bane of anyone who dares to cross her path (or so much as look at her wrong). 
      Mia enjoys picking on those she sees as easy prey, making both her ego and intimidation levels grow. Though she doesn't 
      look like the type, Mia is a master manipulator who loves to scheme behind everyone’s back, and cares not when Inco is 
      caught up in the wake.`,
    },
  },
];
