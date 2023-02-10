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
/* project data load start */

const projectInfo = [
  {
    title: 'Multi-Post Stories',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    imagePop: 'images/Snapshoot Portfolio.svg',
    image: 'images/background-2.svg',
    link: '',
    github: '',
  },
  {
    title: 'Profesional Art Printing Data',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description:
      "A daily selection of privatelyperson alized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s",
    technologies: ['html', 'bootstrap', 'Ruby'],
    imagePop: 'images/Snapshoot Portfolio.svg',
    image: 'images/dc-1.svg',
    link: '',
    github: '',
  },
  {
    title: 'Data Dashboard Healthcare',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s",
    technologies: ['html', 'bootstrap', 'Ruby'],
    imagePop: 'images/Snapshoot Portfolio.svg',
    image: 'images/dc-2.svg',
    link: '',
    github: '',
  },
  {
    title: 'Website Protfolio',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description:
       "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s",
    technologies: ['html', 'bootstrap', 'Ruby'],
    imagePop: 'images/Snapshoot Portfolio.svg',
    image: 'images/dc-3.svg',
    link: '',
    github: '',
  },
  {
    title: 'Profesional Art Printing Data',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s",
    technologies: ['html', 'bootstrap', 'Ruby'],
    imagePop: 'images/Snapshoot Portfolio.svg',
    image: 'images/dc-1.svg',
    link: '',
    github: '',
  },
  {
    title: 'Data Dashboard Healthcare',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s",
    technologies: ['html', 'bootstrap', 'Ruby'],
    imagePop: 'images/Snapshoot Portfolio.svg',
    image: 'images/dc-2.svg',
    link: '',
    github: '',
  },
  {
    title: 'Website Protfolio',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s",
    technologies: ['html', 'bootstrap', 'Ruby'],
    imagePop: 'images/Snapshoot Portfolio.svg',
    image: 'images/dc-3.svg',
    link: '',
    github: '',
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
  const worksContainer = document.querySelector('.works-container');
  worksContainer.innerHTML = `
    <article class="Recent-work">
      <div class="work-title-dv">
        <h2 class="works-title">${projectInfo[0].title}</h2>
        <hr>
      </div>
      <div class="feature-area">
        <img class="feature-image" src="${projectInfo[0].image}" alt="feature image about works">
        <div class="post-text">
          <h3 class="title-post">Multi-Post Stories</h3>
          <p class="post-description">
            ${projectInfo[0].description}
          </p>
          <ul class="tag-ul-1">
            ${getTechList(projectInfo[0].technologies)}
          </ul>
          <button id="popUpContFirstBtn" type="button" autofocus> See Project</button>
        </div>
      </div>
    </article>
    <div class="work-cards">
          <article class="work-card-1 card">
            <h3>${projectInfo[1].title}</h3>
            <p class="description">
              ${projectInfo[1].description}
            </p>
            <ul class="card-ul">
              ${getTechList(projectInfo[1].technologies)}
            </ul>
            <button class="see-project-btn seeProBtn" type="button" autofocus>See Project </button>
          </article>
          <article class="work-card-2 card">
            <h3>${projectInfo[2].title}</h3>
            <p class="description">
              ${projectInfo[2].description}
            </p>
            <ul class="card-ul">
              ${getTechList(projectInfo[2].technologies)}
            </ul>
            <button class="see-project-btn seeProBtn" type="button" autofocus>See Project </button>
          </article>
          <article class="work-card-3 card">
            <h3>${projectInfo[3].title}</h3>
            <p class="description">
              ${projectInfo[3].description}
            </p>
            <ul class="card-ul">
              ${getTechList(projectInfo[3].technologies)}
            </ul>
            <button class="see-project-btn seeProBtn" type="button" autofocus>See Project </button>
          </article>
          <article class="work-card-4 card">
            <h3>${projectInfo[4].title}</h3>
            <p class="description">
              ${projectInfo[4].description}
            </p>
            <ul class="card-ul">
              ${getTechList(projectInfo[4].technologies)}
            </ul>
            <button class="see-project-btn seeProBtn" type="button" autofocus>See Project </button>
          </article>
          <article class="work-card-5 card">
            <h3>${projectInfo[5].title}</h3>
            <p class="description">
              ${projectInfo[5].description}
            </p>
            <ul class="card-ul">
              ${getTechList(projectInfo[5].technologies)}
            </ul>
            <button class="see-project-btn seeProBtn" type="button" autofocus>See Project </button>
          </article>
          <article class="work-card-6 card">
            <h3>${projectInfo[6].title}</h3>
            <p class="description">
              ${projectInfo[6].description}
            </p>
            <ul class="card-ul">
              ${getTechList(projectInfo[6].technologies)}
            </ul>
            <button class="see-project-btn seeProBtn" type="button" autofocus>See Project </button>
          </article>
        </div>

        <!-- new created desktop work cards part -->

        <div class="desktop-cards">
          <article class="desktop-card-1 desk-card">
            <div class="card-text">
              <h3>${projectInfo[1].title}</h3>
              <p>
               ${projectInfo[1].description}
              </p>
              <ul>
                  ${getTechList(projectInfo[1].technologies)}
              </ul>
            </div>
            <button class = "seeProBtn" type="button">See Project </button>
          </article>
          <article class="desktop-card-2 desk-card">
            <div class="card-text">
              <h3>
              ${projectInfo[2].title}
              </h3>
              <p>
                  ${projectInfo[2].description}
              </p>
              <ul>
                 ${getTechList(projectInfo[2].technologies)}
              </ul>
            </div>
            <button class = "seeProBtn" type="button">See Project </button>
          </article>
          <article class="desktop-card-3 desk-card">
            <div class="card-text">
              <h3> ${projectInfo[3].title}</h3>
              <p>
                ${projectInfo[3].description}
              </p>
              <ul>
                ${getTechList(projectInfo[3].technologies)}
              </ul>
            </div>
            <button class = "seeProBtn" type="button">See Project </button>
          </article>
          <article class="desktop-card-4 desk-card">
            <div class="card-text">
              <h3> ${projectInfo[4].title}</h3>
              <p>
                ${projectInfo[4].description}
              </p>
              <ul>
              ${getTechList(projectInfo[4].technologies)}
              </ul>
            </div>
            <button class = "seeProBtn" type="button" autofocus>See Project </button>
          </article>
          <article class="desktop-card-5 desk-card">
            <div class="card-text">
              <h3>
               ${projectInfo[5].title}
              </h3>
              <p>
                ${projectInfo[5].description}
              </p>
              <ul>
                ${getTechList(projectInfo[5].technologies)}
              </ul>
            </div>
            <button class = "seeProBtn" type="button">See Project </button>
          </article>
          <article class="desktop-card-6 desk-card">
            <div class="card-text">
              <h3> ${projectInfo[6].title}</h3>
              <p>
                ${projectInfo[6].description}
              </p>
              <ul>
               ${getTechList(projectInfo[6].technologies)}
              </ul>
            </div>
            <button class = "seeProBtn" type="button">See Project </button>
          </article>
        </div>
      `;
}

loadData();
/* project data load end */
/* pop up window start */
const popUpWinFirst = document.querySelector('.popUpWinFirst');
const popUpWinSecond = document.querySelector('.popUpWinSecond');

function popUpOPenClose(section) {
  section.style.display = 'block';
  document.querySelector('#main').style.filter = 'blur(5px)';
  document.querySelector('#crossPop').addEventListener('click', () => {
    section.style.display = 'none';

    document.querySelector('#main').style.filter = 'none';
  });
}

function loadDataPopFirst() {
  popUpWinFirst.innerHTML = `
     <div class="projectPreview">
        <div class="head">
          <div id= "name_container">
            <h2>${projectInfo[0].title}</h2>
          </div>
          <img id ="crossPop" src="icons/cross.png" alt="cross">
        </div>
        <ul class="technologiesPreview">
          ${getTechList(projectInfo[0].technologies)}
        </ul>
        <div class="project_elements">
          <img class="projectImg" src="${projectInfo[0].imagePop}" alt="pop up image" />
          <div class="details_container">
            <div class="projectDescription">
                ${projectInfo[0].description}  and ${projectInfo[0].moreText}
            </div>
            <div class="projectButtons">
              <button class="cardButtons" href="${projectInfo[0].link}">
                <span>See Live</span>
                <img src="icons/seeLiveIcon.svg" alt="live" />
              </button>
              <button class="cardButtons" href="${projectInfo[0].github}">
                <span>See Source</span>
                <img src="icons/whiteGitHubIcon.png" alt="Source" />
              </button>
            </div>
          </div>
        </div>
      </div>
      `;

  popUpOPenClose(popUpWinFirst);
}

document.querySelector('#popUpContFirstBtn').addEventListener('click', loadDataPopFirst);
function loadDataPopCard() {
  projectInfo.forEach((info) => {
    popUpWinSecond.innerHTML = `
      <div class="projectPreview">
        <div class="head">
          <div id= "name_container">
            <h2>${info.title}</h2>
          </div>
          <img id ="crossPop" src="icons/cross.png" alt="cross">
        </div>
        <ul class="technologiesPreview">
          ${getTechList(info.technologies)}
        </ul>
        <div class="project_elements">
          <img class="projectImg" src="${info.imagePop}" alt="pop up image" />
          <div class="details_container">
            <div class="projectDescription">
                ${info.description} and ${info.moreText}
            </div>
            <div class="projectButtons">
              <button class="cardButtons" href="${info.link}">
                <span>See Live</span>
                <img src="icons/seeLiveIcon.svg" alt="live" />
              </button>
              <button class="cardButtons" href="${info.github}">
                <span>See Source</span>
                <img src="icons/whiteGitHubIcon.png" alt="Source" />
              </button>
            </div>
          </div>
        </div>
      </div>
      `;
  });
  popUpOPenClose(popUpWinSecond);
}

const seeProBtns = document.querySelectorAll('.seeProBtn');
seeProBtns.forEach((seeProBtn) => {
  seeProBtn.addEventListener('click', loadDataPopCard);
});

/* pop up window end */

// Email Validation
const email = document.getElementById('email');
const form = document.getElementsByTagName('form');
const submitButton = document.getElementById('submitBtn');

function validateEmail() {
  const emailRegExp = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  const isNotValid = !emailRegExp.test(email.value);

  if (isNotValid) {
    submitButton.setCustomValidity(
      `You should only use lowercase in the email field!!!\nLike: ${email.value.toLowerCase()}`,
    );
  } else submitButton.setCustomValidity('');
}

email.addEventListener('input', () => {
  validateEmail();
});

form.addEventListener('submit', () => {
  validateEmail();
});
