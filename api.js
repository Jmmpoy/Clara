import saggi from './public/assets/Projects/saggi.png';
import saggi2 from './public/assets/Projects/saggi2.png';

import euroblock from './public/assets/Projects/euroblock.png';
import euroblock2 from './public/assets/Projects/euroblock2.png';

import acousticentre from './public/assets/Projects/acousticentre.png';
import acousticentre2 from './public/assets/Projects/acousticentre2.png';

import directoptic from './public/assets/Projects/directoptic.png';
import directoptic2 from './public/assets/Projects/directoptic2.png';

import manufacture from './public/assets/Projects/manufacture.png';
import manufacture2 from './public/assets/Projects/manufacture2.png';


const data = [
  {
    id: 1,
    name: "Saggi Jewels",
    primaryImage: saggi,
    secondaryImage: saggi2,
    description: [
      {
        id: 1,
        text: "Développment d'une boutique",
      },
      {
        id: 2,
        text: "en ligne de bijoux.",
      },
    ],
    role: "Développeuse No-Code",
    technos:"Wordpress - Woocommerce - Elementor",
    link: "https://saggi-jewels.com/",
  },
  {
    id: 2,
    name: "Euroblock",
    primaryImage: euroblock,
    secondaryImage: euroblock2,
    description: [
      {
        id: 1,
        text: "Développment d'un site vitrine professionnelle pour une ",
      },
      {
        id: 2,
        text: "société dans le secteur du bâtiment. Optimisation SEO basique.",
      },
    ],
    role: "Développeuse No-Code",
    technos:"Wordpress - Elementor",
    link: "https://euroblock.fr/",
  },
  {
    id: 3,
    name: "AcoustiCentre",
    primaryImage: acousticentre,
    secondaryImage: acousticentre2,
    description: [
      {
        id: 1,
        text: "Développment d'un site vitrine pour une",
      },
      {
        id: 2,
        text: "société dans le secteur de l'audition.",
      },
    ],
    role: "Développeuse No-Code",
    technos:"Wordpress - Elementor",
    link: "https://www.acousticentre.ch/",
  },
  {
    id: 4,
    name: "Audition Direct Optic",
    primaryImage: directoptic,
    secondaryImage: directoptic2,
    description: [
      {
        id: 1,
        text: "Développement d'un site vitrine ",
      },
      {
        id: 2,
        text: "et création d'articles SEO.",
      },
    ],
    role: "Développeuse No-Code",
    technos:"Wordpress - Elementor",
    link: "https://audition.direct-optic.fr/",
  },
  {
    id: 5,
    name: "Manufacture Perrin",
    primaryImage: manufacture,
    secondaryImage: manufacture2,
    description: [
      {
        id: 1,
        text: "Développement d'un site vitrine",
      },
      {
        id: 2,
        text: "simplifié pour une boutique physique.",
      },
    ],
    role: "Développeuse No-Code",
    technos:"Wordpress - Gutenberg",
    link: "https://manufacture-perrin.com/",
  },
];

export default data;
