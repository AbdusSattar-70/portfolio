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
    title: 'FirstCapstone project details',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: "This repo is a part of the learning purpose that I made to how to use html css and js best practices.The Original design idea is by Cindy Shin in Behance Thanks ❤️ to Cindy Shin Creating such a beautiful design.",
    technologies: ['HTML','CSS', 'JavaScript', 'Ruby'],
    image: 'images/capstone.png',
    bgImg: 'images/background-2.svg',
    link: 'https://abdussattar-70.github.io/FirstCapstone/',
    github: 'https://github.com/AbdusSattar-70/FirstCapstone',
  },
   {
    title: 'To Do List Project details',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: "This repo is created for learning objectives on how to create a To-do-list and use Webpack with ES6 .it is a simple website that displays a list of To do tasks and allows you to add and remove tasks from that list",
    technologies: ['css', 'html', 'bootstrap'],
    image: 'images/ToDoList.png',
    link: 'https://abdussattar-70.github.io/To-Do-List/dist/',
    github: 'https://github.com/AbdusSattar-70/To-Do-List',
  },
  {
    title: 'AwesomeBookES6 Project Detail',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description:"AwesomeBookES6 is a simple website that displays a list of books and allows you to add and remove books from that list. unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: 'images/bookStore.png',
    link: 'https://abdussattar-70.github.io/Awesome-Book-ES6/',
    github: 'https://github.com/AbdusSattar-70/Awesome-Book-ES6',
  },
  {
    title: 'Leaderboard Protfolio',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description:"Leaderboard is my demo project for learning the usage of API and Git workflow and it is a simple website that displays a list of players' names and scores and allows you to add that info to the list.",
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
    description: "In this exercise repo, I wrote a few practical tests for JavaScript functions using the Jest library and followed the AAA pattern to make my tests easier for other developers to read and understand. I also used the TDD approach in practice.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: 'images/capstone.png',
    link: '',
    github: 'https://github.com/AbdusSattar-70/Testing-practice',
  },
   {
    title: 'FirstCapstone project details',
    moreText: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description: "This repo is a part of the learning purpose that I made to how to use html css and js best practices.The Original design idea is by Cindy Shin in Behance Thanks ❤️ to Cindy Shin Creating such a beautiful design.",
    technologies: ['HTML','CSS', 'JavaScript'],
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
        <h2 class="works-title">Recent Work</h2>
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
     <div class="desktop-cards"></div>
    `;
}
loadRecentWork();

 const  loadWorkCardMobile= () => {
 const workCards = document.querySelector('.work-cards');
workCards.innerHTML = '';
const newInfo = projectInfo.filter((info,i) => i !==0);
newInfo.forEach((info)=>{
  const article = document.createElement('article');
  article.classList.add('card');
article.innerHTML = `
            <h3>${info.title}</h3>
            <p class="description">
              ${info.description}
            </p>
            <ul class="card-ul">
              ${getTechList(info.technologies)}
            </ul>
            <button class="see-project-btn seeProBtn popUpMob" type="button" autofocus>See Project </button>
`
workCards.appendChild(article);
});
   }
     loadWorkCardMobile();

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
