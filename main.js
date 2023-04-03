/* mobile menu start */

const hamImg = document.querySelector('#hamImg');
const crossImg = document.querySelector('#crossImg');
const mobileMenuItems = document.querySelectorAll('.mob-items');

const toggleDisplay = (ids, display) => {
  ids.forEach((id) => {
    const element = document.querySelector(id);
    element.style.display = display;
  });
};

const menu = () => {
  toggleDisplay(['.logo-container', '#hamImg'], 'none');
  toggleDisplay(['.mobile-menu'], 'flex');
};

const menuNone = () => {
  toggleDisplay(['.logo-container', '#hamImg'], 'flex');
  toggleDisplay(['.mobile-menu'], 'none');
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
    title: 'First Capstone',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: 'This repo is a part of the learning purpose that I made to how to use html css and js best practices.The Original design idea is by Cindy Shin in Behance Thanks ❤️ to Cindy Shin Creating such a beautiful design.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/capstone.png',
    bgImg: 'images/background-2.svg',
    link: 'https://abdussattar-70.github.io/FirstCapstone/',
    github: 'https://github.com/AbdusSattar-70/FirstCapstone',
  },
  {
    title: 'To Do List Project details',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: 'This repo is created for learning objectives on how to create a To-do-list and use Webpack with ES6 .it is a simple website that displays a list of To do tasks and allows you to add and remove tasks from that list ',
    technologies: ['css', 'html', 'bootstrap'],
    image: 'images/ToDoList.png',
    link: 'https://abdussattar-70.github.io/To-Do-List/dist/',
    github: 'https://github.com/AbdusSattar-70/To-Do-List',
  },
  {
    title: 'AwesomeBookES6 Project Detail',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: 'AwesomeBookES6 is a simple website that displays a list of books and allows you to add and remove books from that list. unknown printer took a galley of type and scrambled it to make a type specimen book.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: 'images/bookStore.png',
    link: 'https://abdussattar-70.github.io/Awesome-Book-ES6/',
    github: 'https://github.com/AbdusSattar-70/Awesome-Book-ES6',
  },
  {
    title: 'Leaderboard Protfolio',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: "Leaderboard is my demo project for learning the usage of API and Git workflow and it is a simple website that displays a list of players' names and scores and allows you to add that info to the list.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: 'images/Leaderboard.png',
    link: 'https://abdussattar-70.github.io/Leaderboard/dist',
    github: 'https://github.com/AbdusSattar-70/Leaderboard',
  },
  {
    title: 'ToDoListAgain Project Detail',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description:
      "A daily selection of privately personalized reads; printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap This has been the industry's standard dummy text ever since the 1500s",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: 'images/ToDoList.png',
    link: 'https://abdussattar-70.github.io/ToDoListAgain/dist/',
    github: 'https://github.com/AbdusSattar-70/ToDoListAgain',
  },
  {
    title: 'Testing-practice project',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: 'In this exercise repo, I wrote a few practical tests for JavaScript functions using the Jest library and followed the AAA pattern to make my tests easier for other developers to read and understand. I also used the TDD approach in practice.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: 'images/capstone.png',
    link: '',
    github: 'https://github.com/AbdusSattar-70/Testing-practice',
  },
  {
    title: 'FirstCapstone project details',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: 'This repo is a part of the learning purpose that I made to how to use html css and js best practices.The Original design idea is by Cindy Shin in Behance Thanks ❤️ to Cindy Shin Creating such a beautiful design.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/capstone.png',
    link: 'https://abdussattar-70.github.io/FirstCapstone/',
    github: 'https://github.com/AbdusSattar-70/FirstCapstone',
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

function loadRecentWork() {
  const worksContainer = document.querySelector('.works-container');
  worksContainer.innerHTML = `
    <article class="Recent-work">
      <div class="work-title-dv">
        <h2 class="works-title">My Recent Works</h2>
        <hr>
      </div>
      <div class="feature-area">
        <img class="feature-image" src="${projectInfo[0].bgImg}" alt="feature image about works">
        <div class="post-text">
          <h3 class="title-post">${projectInfo[0].title}</h3>
          <p class="post-description">
            ${projectInfo[0].description}
          </p>
          <ul class="tag-ul-1">
            ${getTechList(projectInfo[0].technologies)}
          </ul>
          <button class="popUpMob popUpDesk" type="button"> See Project</button>
        </div>
      </div>
    </article>
     <div class="work-cards"></div>
    `;
}
loadRecentWork();

const loadWorkCard = () => {
  const workCards = document.querySelector('.work-cards');
  workCards.innerHTML = '';
  const newInfo = projectInfo.filter((info, i) => i !== 0);
  newInfo.forEach((info, i) => {
    const article = document.createElement('article');
    article.className = `card card-${i}`;
    article.innerHTML = `
            <div class="card-text">
            <h3>${info.title}</h3>
            <p class="description">
              ${info.description}
            </p>
            <ul class="card-ul">
              ${getTechList(info.technologies)}
            </ul>
            </div>
            <button class="see-project-btn seeProBtn popUpMob" type="button" autofocus>See Project </button>
`;
    workCards.appendChild(article);
  });
};
loadWorkCard();

/* project data load end */

/* pop up window start */
function popUpOPenClose() {
  const popUpWindow = document.querySelector('.popUpSection');
  const crossBtns = document.querySelectorAll('#crossPop');
  crossBtns.forEach((crossBtn) => {
    crossBtn.addEventListener('click', () => {
      document.querySelector('#main').style.filter = 'none';
      popUpWindow.style.display = 'none';
    });
  });
}

function loadPopUPWindow(newProjectInfo) {
  const popUpWindow = document.querySelector('.popUpSection');
  popUpWindow.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('projectPreview');
  div.innerHTML += `
<div class="head">
          <div id= "name_container">
            <h2>${newProjectInfo.title}</h2>
          </div>
          <img id ="crossPop" src="icons/cross.png" alt="cross">
        </div>
        <ul class="technologiesPreview">
          ${getTechList(newProjectInfo.technologies)}
        </ul>
        <div class="project_elements">
          <img class="projectImg" src="${newProjectInfo.image}" alt="pop up image" />
          <div class="details_container">
            <div class="projectDescription">
                ${newProjectInfo.description}  and ${newProjectInfo.moreText}
            </div>
            <div class="projectButtons">
              <a href="${newProjectInfo.link}" target ="_blank">
               <button class="cardButtons">
               <span>See Live</span>
              <img src="icons/seeLiveIcon.svg" alt="live" />
              </button>
              </a>
              <a href="${newProjectInfo.github}" target ="_blank">
              <button class="cardButtons">
                <span>See Source</span>
                <img src="icons/whiteGitHubIcon.png" alt="Source" />
              </button>
              </a>
            </div>
          </div>
        </div> `;
  popUpWindow.appendChild(div);
  popUpOPenClose();
}

const seeProMob = document.querySelectorAll('.popUpMob');
const popUpWinListener = (seeProBtns) => {
  const popUpWindow = document.querySelector('.popUpSection');
  seeProBtns.forEach((seeProBtn, i) => {
    seeProBtn.addEventListener('click', () => {
      popUpWindow.style.display = 'block';
      document.querySelector('#main').style.filter = 'blur(5px)';
      loadPopUPWindow(projectInfo[i]);
    });
  });
};

popUpWinListener(seeProMob);

/* pop up window end */

// Email Validation
const email = document.getElementById('email');
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

submitButton.addEventListener('submit', () => {
  validateEmail();
});
