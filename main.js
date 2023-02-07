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
const worksContainer = document.querySelector('.works-container');

const projectInfo = [
  {
    title: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/background-2.svg',
    link: '',
    github: 'https://github.com/AbdusSattar-70/portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/dc-1.svg',
    link: '',
    github: 'https://github.com/AbdusSattar-70/portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/dc-2.svg',
    link: '',
    github: 'https://github.com/AbdusSattar-70/portfolio',
  },
  {
    title: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/dc-3.svg',
    link: '',
    github: 'https://github.com/AbdusSattar-70/portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/dc-1.svg',
    link: '',
    github: 'https://github.com/AbdusSattar-70/portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/dc-2.svg',
    link: '',
    github: 'https://github.com/AbdusSattar-70/portfolio',
  },
  {
    title: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    image: 'images/dc-3.svg',
    link: '',
    github: 'https://github.com/AbdusSattar-70/portfolio',
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
            <button class="see-project-btn" type="button" autofocus>See Project </button>
          </article>
          <article class="work-card-2 card">
            <h3>${projectInfo[2].title}</h3>
            <p class="description">
              ${projectInfo[2].description}
            </p>
            <ul class="card-ul">
              ${getTechList(projectInfo[2].technologies)}
            </ul>
            <button class="see-project-btn" type="button" autofocus>See Project </button>
          </article>
          <article class="work-card-3 card">
            <h3>${projectInfo[3].title}</h3>
            <p class="description">
              ${projectInfo[3].description}
            </p>
            <ul class="card-ul">
              ${getTechList(projectInfo[3].technologies)}
            </ul>
            <button class="see-project-btn" type="button" autofocus>See Project </button>
          </article>
          <article class="work-card-4 card">
            <h3>${projectInfo[4].title}</h3>
            <p class="description">
              ${projectInfo[4].description}
            </p>
            <ul class="card-ul">
              ${getTechList(projectInfo[4].technologies)}
            </ul>
            <button class="see-project-btn" type="button" autofocus>See Project </button>
          </article>
          <article class="work-card-5 card">
            <h3>${projectInfo[5].title}</h3>
            <p class="description">
              ${projectInfo[5].description}
            </p>
            <ul class="card-ul">
              ${getTechList(projectInfo[5].technologies)}
            </ul>
            <button class="see-project-btn" type="button" autofocus>See Project </button>
          </article>
          <article class="work-card-6 card">
            <h3>${projectInfo[6].title}</h3>
            <p class="description">
              ${projectInfo[6].description}
            </p>
            <ul class="card-ul">
              ${getTechList(projectInfo[6].technologies)}
            </ul>
            <button class="see-project-btn" type="button" autofocus>See Project </button>
          </article>
        </div>

        <!-- new created desktop work cards part -->

        <div class="desktop-cards">
          <article class="desktop-card-1 desk-card">
            <div class="card-text">
              <h3>Profesional Art <br>
                Printing Data more</h3>
              <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required. has been the
                industry's
                standard
              </p>
              <ul>
                <li>Html</li>
                <li>Bootstrap</li>
                <li>Ruby</li>
              </ul>
            </div>
            <button type="button">See Project </button>
          </article>
          <article class="desktop-card-2 desk-card">
            <div class="card-text">
              <h3> Data Dashboard <br>
                Healthcare
              </h3>
              <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required. has been the
                industry's
                standard
              </p>
              <ul>
                <li>Html</li>
                <li>Bootstrap</li>
                <li>Ruby</li>
              </ul>
            </div>
            <button type="button">See Project </button>
          </article>
          <article class="desktop-card-3 desk-card">
            <div class="card-text">
              <h3>Website Protfolio</h3>
              <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required. has been the
                industry's
                standard
              </p>
              <ul>
                <li>Html</li>
                <li>Bootstrap</li>
                <li>Ruby</li>
              </ul>
            </div>
            <button type="button">See Project </button>
          </article>
          <article class="desktop-card-4 desk-card">
            <div class="card-text">
              <h3>Profesional Art <br>
                Printing Data more</h3>
              <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required. has been the
                industry's
                standard
              </p>
              <ul>
                <li>Html</li>
                <li>Bootstrap</li>
                <li>Ruby</li>
              </ul>
            </div>
            <button type="button" autofocus>See Project </button>
          </article>
          <article class="desktop-card-5 desk-card">
            <div class="card-text">
              <h3> Data Dashboard <br>
                Healthcare
              </h3>
              <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required. has been the
                industry's
                standard
              </p>
              <ul>
                <li>Html</li>
                <li>Bootstrap</li>
                <li>Ruby</li>
              </ul>
            </div>
            <button type="button">See Project </button>
          </article>
          <article class="desktop-card-6 desk-card">
            <div class="card-text">
              <h3>Website Protfolio</h3>
              <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required. has been the
                industry's
                standard
              </p>
              <ul>
                <li>Html</li>
                <li>Bootstrap</li>
                <li>Ruby</li>
              </ul>
            </div>
            <button type="button">See Project </button>
          </article>
        </div>
      `;
}



loadData();
/* pop up window end */