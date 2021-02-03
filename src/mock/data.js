import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abi | Full-Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi! 👋🏾 I'm `,
  name: 'Abi',
  subtitle: `I'm a Full-Stack Developer from Birmingham, UK.
  Take a look at my work, and say hello!`,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'modal',
  paragraphOne: 'Full-Stack Developer passionate about workplace diversity.',
  paragraphTwo:
    'My passion for tech initially sparked when volunteering as a Code Club Tutor where I helped teach young children about Scratch, HTML and Python.',
  paragraphThree: 'Keep scrolling to see what these passions have led me to create!',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bookcase-app.png',
    title: 'Bookcase App',
    info: 'Bookcase App made using Reactjs.',
    info2: '',
    url: 'https://bonsaibooks.netlify.app/',
    repo: 'https://github.com/iya-wo/Bookcase-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'black-history-quiz',
    title: 'Black History Quiz',
    info: 'Black History quiz made with JavaScript',
    info2: '',
    url: 'https://blackhistoryquiz.netlify.app',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'affirmation-generator',
    title: 'Affirmation Generator (Open-Source Contribution)',
    info: 'Random affirmation generator ✨ after each visit or when the next button is pushed.',
    info2: '',
    url: 'https://www.affirmations.madewithtech.com/',
    repo: 'https://github.com/iya-wo/affirmation_generator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: '',
  email: 'abigailadewoyin@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abigail-adewoyin-3672711aa/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/iya-wo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
