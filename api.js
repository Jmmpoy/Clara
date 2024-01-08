import filmo1 from "./public/assets/Projects/Filmo/filmo-1.png";
import filmo2 from "./public/assets/Projects/Filmo/filmo-2.png";
import canal1 from "./public/assets/Projects/myCanal/canal-1.png";
import canal2 from "./public/assets/Projects/myCanal/canal-2.png";

//import elow1 from "./public/assets/Projects/Elow/elow-1.PNG";
import elow from "./public/assets/Projects/Elow/elow.png";
import elow2 from "./public/assets/Projects/Elow/elow-2.png";
import soundcharts1 from "./public/assets/Projects/Soundcharts/soundcharts-1.png";
import soundcharts2 from "./public/assets/Projects/Soundcharts/soundcharts-2.png";

import fiftyLab from "./public/assets/Projects/350lab/350lab.png";
import fiftylab2 from "./public/assets/Projects/350lab/350lab-2.png";

const data = [
  {
    id: 1,
    name: "Saggi Jewels",
    primaryImage: canal1,
    secondaryImage: canal2,
    description: [
      {
        id: 1,
        text: "Développment de l'application myCanal",
      },
      {
        id: 2,
        text: "sur Windows et Xbox.",
      },
    ],
    role: "Développeuse No-Code",
    year: "2020 - Aujourd'hui",
    link: "https://www.canalplus.com/",
  },
  {
    id: 2,
    name: "Euroblock",
    primaryImage: filmo1,
    secondaryImage: filmo2,
    description: [
      {
        id: 1,
        text: "Développment de l'application mobile FilmoTV",
      },
      {
        id: 2,
        text: "sur Android et IOS.",
      },
    ],
    role: "Développeuse No-Code",
    year: "2020 - Aujourd'hui",
    link: "https://www.filmotv.fr/",
  },
  {
    id: 3,
    name: "Acoustic Centre",
    primaryImage: soundcharts1,
    secondaryImage: soundcharts2,
    description: [
      {
        id: 1,
        text: "Développment du site web et de l'application",
      },
      {
        id: 2,
        text: "Soundcharts sur Ios et Android",
      },
    ],
    role: "Développeuse No-Code",
    year: "2020 - Aujourd'hui",
    link: "https://soundcharts.com/",
  },
  {
    id: 4,
    name: "Audition Direct Optic",
    primaryImage: elow,
    secondaryImage: elow2,
    description: [
      {
        id: 1,
        text: "Application permettant de mesurer la",
      },
      {
        id: 2,
        text: "consommation énergétique de son PC",
      },
    ],
    role: "Développeuse No-Code",
    year: "2020 - Aujourd'hui",
    link: "https://elow.energy/fr/",
  },
  {
    id: 5,
    name: "Manufacture Perrin",
    primaryImage: fiftyLab,
    secondaryImage: fiftylab2,
    description: [
      {
        id: 1,
        text: "Développement et Design de la landing page",
      },
      {
        id: 2,
        text: "du studio 350lab",
      },
    ],
    role: "Développeuse No-Code - Ui/Ux",
    year: "2022 - Aujourd'hui",
    link: "https://www.350lab.com/",
  },
];

export default data;
