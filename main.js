/* eslint-disable linebreak-style */
/* mobile menu start */

const logoCon = document.querySelector('.logo-container');
const hamImg = document.querySelector('#hamImg');
const crossImg = document.querySelector('#crossImg');
const mobMenu = document.querySelector('.mobile-menu');
const mobileMenuItems = document.querySelectorAll('.mob-items');

const menu = () => {
  logoCon.style.display = 'none';
  hamImg.style.display = 'none';
  mobMenu.style.display = 'flex';
};

const menuNone = () => {
  mobMenu.style.display = 'none';
  logoCon.style.display = 'flex';
  hamImg.style.display = 'flex';
};

hamImg.addEventListener('click', menu);
crossImg.addEventListener('click', menuNone);
mobileMenuItems.forEach((item) => {
  item.addEventListener('click', menuNone);
});

/* mobile menu end */
/* pop up window start */

const projectInfo = [
  {
    id: 'multiPost',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: {
      src: 'images/Snapshoot Portfolio.svg',
      alt: 'Multi-Post Stories snapshot',
    },
    modalTechs: ['css', 'html', 'Bootstrap', 'Ruby on rails'],
    technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    links: {
      live: '',
      source: '',
    },
  },
  {
    id: 'card1',
    name: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    img: {
      src: 'images/Snapshoot Portfolio.svg',
      alt: 'Profesional Art Printing snapshot',
    },
    modalTechs: ['html', 'Bootstrap', 'Ruby on rails'],
    technologies: ['html', 'bootstrap', 'Ruby'],
    links: {
      live: '',
      source: '',
    },
  },
  {
    id: 'card2',
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    img: {
      src: 'images/Snapshoot Portfolio.svg',
      alt: 'Profesional Art Printing snapshot',
    },
    modalTechs: ['html', 'Bootstrap', 'Ruby on rails'],
    technologies: ['html', 'bootstrap', 'Ruby'],
    links: {
      live: '',
      source: '',
    },
  },
  {
    id: 'card3',
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    img: {
      src: 'images/Snapshoot Portfolio.svg',
      alt: 'Profesional Art Printing snapshot',
    },
    modalTechs: ['html', 'Bootstrap', 'Ruby on rails'],
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    links: {
      live: '',
      source: '',
    },
  },
];

/* pop up window end */