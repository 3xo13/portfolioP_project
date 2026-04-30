import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    mostaql,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

const serviceIcons = [web, mobile, backend, creator];
const experienceVisuals = {
  freelance: {
    icon: web,
    iconBg: '#1f1638',
    iconLabel: 'FL',
  },
  logica: {
    icon: '',
    iconBg: '#12213b',
    iconLabel: 'LS',
  },
  mostaql: {
    icon: mostaql,
    iconBg: '#11352d',
    iconLabel: 'M',
  },
};
const projectImages = [carrent, jobit, tripguide];
const projectTags = [
  [
    { name: 'react', color: 'blue-text-gradient' },
    { name: 'mongodb', color: 'green-text-gradient' },
    { name: 'tailwind', color: 'pink-text-gradient' },
  ],
  [
    { name: 'react', color: 'blue-text-gradient' },
    { name: 'restapi', color: 'green-text-gradient' },
    { name: 'scss', color: 'pink-text-gradient' },
  ],
  [
    { name: 'nextjs', color: 'blue-text-gradient' },
    { name: 'supabase', color: 'green-text-gradient' },
    { name: 'css', color: 'pink-text-gradient' },
  ],
];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

export function buildLocalizedContent(dictionary) {
  return {
    navLinks: dictionary.navbar.links,
    services: dictionary.about.services.map((title, index) => ({
      title,
      icon: serviceIcons[index],
    })),
    experiences: dictionary.experience.items.map((item) => ({
      ...item,
      ...(experienceVisuals[item.iconKey] ?? {
        icon: '',
        iconBg: '#1d1836',
        iconLabel: 'WK',
      }),
    })),
    testimonials: dictionary.testimonials.items,
    projects: dictionary.works.items.map((item, index) => ({
      ...item,
      tags: projectTags[index],
      image: projectImages[index],
      source_code_link: 'https://github.com/',
    })),
  };
}

export { technologies };
  