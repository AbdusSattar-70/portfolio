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

function getTechList(technologies) {
  let list = '';
  if (technologies) {
    technologies.forEach((tech) => {
      list += `<li class="tag">${tech}</li>`;
    });
  }
  return list;
}

function loadData() {
  const popUpContFirst = document.querySelector('#popUpContFirst');
  popUpContFirst.innerHTML = `
      <div class="projectPreview" data-target="${projectInfo[0].id}">
        <div class="projectHeader">
          <div class="head">
            <h2>${projectInfo[0].name}</h2>
            <img id="crossPopUp" src="icons/cross.png" alt="cross">
          </div>
          <ul class="technologiesPreview">
            ${getTechList(projectInfo[0].modalTechs)}
          </ul>
        </div>
        <div class="projectElements">
          <img class="projectImg" src="${projectInfo[0].img.src}" alt="${projectInfo[0].img.alt}" />
          <div class="projectContent">
            <div class="projectDescription">
              <p>
                ${projectInfo[0].description}
              </p>
            </div>
            <div class="projectButtons">
              <div>
                <button class="button cardButtons" href="${projectInfo[0].links.live}">
                  <span>See Live</span>
                  <img src="icons/seeLiveIcon.svg" alt="Live" />
                </button>
              </div>
              <div>
                <button class="button cardButtons" href="${projectInfo[0].links.live}">
                  <span>See Source</span>
                  <img src="icons/whiteGitHubIcon.png" alt="Source" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      `;
}

const popUpContFirstBtn = document.querySelector('#popUpContFirstBtn');
popUpContFirstBtn.addEventListener('click', loadData);

/* pop up window end */