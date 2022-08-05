import { FaCss3, FaJs, FaPhp, FaReact } from "react-icons/fa";

export const portfolioData = [
  {
    id: 1,
    name: "Inventaire",
    languages: [ "css", "php"],
    languagesIcons: [
      <FaJs className="iprojet" />,
      <FaPhp className="iprojet" />,
      <FaCss3 className="iprojet" />,
    ],
    source: "http://www.github.com",
    info: "Réalisation d'une application pour l'inventaire du CECADO de l'Aeroport de libreville. Réalisé principalement avec le framework codeIgniter.",
    picture: "./media/inventaire.png",
  },
  {
    id: 2,
    name: "Business 241",
    languages: [ "php", "css"],
    languagesIcons: [
      <FaJs className="iprojet" />,
      <FaPhp className="iprojet" />,
      <FaCss3 className="iprojet" />,
    ],
    source: "http://www.github.com",
    info: "Réalisation d'une application de formation dans le domaine du n'umérique pour l'école 241 business. Réalisé principalement avec le framework codeIgniter",
    picture: "./media/business.jpg",
  },
  {
    id: 3,
    name: "Ntchina",
    languages: ["php", "css"],
    languagesIcons: [
      <FaJs className="iprojet" />,
      <FaPhp className="iprojet" />,
      <FaCss3 className="iprojet" />,
    ],
    source: "http://www.github.com",
    info: "Réalisation d'une application prototype pour la startup Ntchina, dans le cadre du e startup challenge. Une application qui met en relation des donneurs et demandeurs de sang. Réalisé principalement avec le framework codeIgniter",
    picture: "./media/tchina.png",
  },
  {
    id: 4,
    name: "Portfolio",
    languages: ["javascript", "reactjs"],
    languagesIcons: [
      <FaJs className="iprojet" />,
      <FaCss3 className="iprojet" />,
      <FaReact className="iprojet" />,
    ],
    source: "",
    info: "Portfolio",
    picture: "./media/portefolio.png",
  },
  // {
  //   id: 5,
  //   name: 'repudiante.com',
  //   languages: ['javascript','css'],
  //   languagesIcons: ['fab fa-js', 'fab fa-css3-alt'],
  //   source: 'http://www.github.com',
  //   info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
  //   picture: './media/project5.JPG'
  // },
  // {
  //   id: 6,
  //   name: 'test.io',
  //   languages: ['javascript','react', 'css'],
  //   languagesIcons: ['fab fa-js','fab fa-react','fab fa-css3-alt'],
  //   source: 'http://www.github.com',
  //   info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
  //   picture: './media/project6.JPG'
  // },
];

export const radio = [
  {
    id: 1,
    value: "javascript",
  },
  {
    id: 2,
    value: "reactjs",
  },
  {
    id: 3,
    value: "php",
  },
];
