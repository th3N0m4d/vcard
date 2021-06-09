import { State } from './state'

export const defaultState: State = {
  profile: {
    aboutMe:
      'A web developer with a proven record of client-side programming with a focus on clean code and performance. Good at communicating novel approaches and open to new ideas.',
    firstName: 'Edielton',
    lastName: 'Dantas',
    isAvailableForWork: true,
    avatarUrl:
      'https://s.gravatar.com/avatar/ee7632fa6bd3b38b930a0f9fbdff7e74?s=195',
    headline: 'Fullstack Javascript Engineer',
    socialMediaLinks: [
      {
        id: '1',
        profileUrl: 'https://www.linkedin.com/in/n0m4d/',
        title: 'Linkedin',
        icon: 'crt-icon crt-icon-linkedin',
      },
      {
        id: '2',
        profileUrl: 'https://stackoverflow.com/users/6459874/n0m4d',
        title: 'Stackoverflow',
        icon: 'crt-icon crt-icon-stack-overflow',
      },
      {
        id: '3',
        profileUrl: 'https://github.com/th3N0m4d',
        title: 'Github',
        icon: 'crt-icon crt-icon-github',
      },
      {
        id: '4',
        profileUrl: 'https://codepen.io/th3n0m4d',
        title: 'Code Pend',
        icon: 'crt-icon crt-icon-codepen',
      },
      {
        id: '5',
        profileUrl: 'https://api.whatsapp.com/send?phone=48662868789',
        title: 'Whatsapp',
        icon: 'crt-icon crt-icon-whatsapp',
      },
    ],
  },
  personalInfo: {
    dateOfBirth: '1987-03-25',
    country: 'Poland',
    location: 'Prądzyńskiego 61',
    city: 'Wrocław',
    geolocation: {
      lat: 51.098433368667955,
      lng: 17.047957998200125,
    },
    emailAddress: 'edielton.dantas@hotmail.com',
    phoneNumber: '+48 662 868 789',
  },
  languages: [
    {
      name: 'Portuguese',
      level: 9,
    },
    {
      name: 'English',
      level: 7,
    },
    {
      name: 'Polish',
      level: 3,
    },
  ],
  interests: [
    { name: 'Traveling', icon: 'crt-icon crt-icon-map' },
    { name: 'Playing guitar', icon: 'crt-icon crt-icon-music' },
    { name: 'Blogging', icon: 'crt-icon crt-icon-pencil' },
    { name: 'Books', icon: 'crt-icon crt-icon-book' },
    { name: 'Biking', icon: 'crt-icon crt-icon-heart' },
    { name: 'Hard Sciences', icon: 'crt-icon crt-icon-flask' },
  ],
  isSideBarOpen: false,
  skills: [
    {
      name: 'VueJs',
      level: 9,
    },
    {
      name: 'React',
      level: 9,
    },
    {
      name: 'Angular',
      level: 9,
    },
    {
      name: 'Rxjs',
      level: 7,
    },
    {
      name: 'Nuxtjs',
      level: 7,
    },
  ],
  topSkills: [
    {
      name: 'Javascript',
      level: 9,
    },
    {
      name: 'Html5',
      level: 8,
    },
    {
      name: 'CSS',
      level: 7,
    },
  ],
  workHistory: [
    {
      startDate: '2020-09-01',
      endDate: null,
      title: 'Software Engineer',
      logoUrl: 'anixe-logo.svg',
      name: 'Anixe',
      description:
        '\r\nANIXE is a leading travel technology provider specialized in third-party hotel supplier aggregation and distribution, accelerated search and response, offline rate and availability exports in various formats, hotel and room type automated mapping, and high data load and traffic management.\r\n\r\n### ECOM team\r\nECOM is responsible for maintaining a wide range of projects developed in a variety of different technology stacks.\r\nSupported mainly a back-end system for our booking flight app. This system is written in NodeJs and Firebase.\r\n**Key technologies: NodeJs, Firebase, Angular, VueJs, Jest, Sass, Postman**\r\n### Code Assessment (still at ECOM)\r\nHelped raise awareness about several quality issues regarding a project which is going to be handed over to us by a third party firm.\r\nShowed actual code from the repository with its corresponding anti-pattern. These anti-patterns were grouped into three categories: programming, methodological, and architectural anti-patterns.\r\nThis initiative was praised by our management and led our business unit to request immediate changes to the source code before the handover.\r\n### VASCO team\r\nDue to budget cuts caused by the pandemic, temporarily had to join another team called Vasco. This team is responsible for developing and maintaining an online travel agency application, an in-house component\u2019s library, and a back-office portal (all of which I had the chance to work with).\r\n     \r\nAs of this moment, I\u2019m implementing a new module that will allow our users to search for cars for rental (akin to RentalCars.com).\r\n**Key technologies: Angular 10, NGRx Store, Responsive Web Design, Sasss, Jasmine**\r\n### Blog posts\r\nWithin the span of two months of joining the company, wrote and shared articles about emerging technologies, such as:\r\n- Testing Firebase Cloud Functions (three-part series) - Authentication with VueJs and Firebase\r\n- Automated E2E tests with Postman',
    },
    {
      startDate: '2019-01-01',
      endDate: '2019-11-01',
      title: 'Software Engineer',
      logoUrl: 'vonage-logo.png',
      name: 'Vonage',
      description:
        "\r\nHelped define and implement the new programming guidelines for UI teams across the whole company. These guidelines served as a means to help front end teams to hit the ground running and create uniformity across the organization.\r\n\r\nAs part of the platform's team, I contributed to developing the React incarnation of the established Component's UI library originally written in pure HTML and CSS. The components were written in React and Styled Components and unit tested with Jest and Cypress. We also used Storybook to demo the components at the end of the product increment.\r\n\r\nTutored the team's first intern. He eventually got a contract deal after his 3-month training.\r\nParticipated as a speaker in one of our quarterly meetups. The topic was \"Functional programming with Ramda\".\r\n\r\n**Key technologies: React, Styled Components, Bootstrap, Webpack 4, Jest, Redux, Storybook, Ramda, Jira, GIT, NPM**\r\n",
    },
    {
      startDate: '2017-03-01',
      endDate: '2018-12-01',
      title: 'Software Engineer',
      logoUrl: 'logo-sii.png',
      name: 'SII Poland (Client Credit Suisse)',
      description:
        "\r\nLed a groundbreaking POC on how to integrate and extend static SSRS reports with Angular and ship them as an NPM package. This package allowed front-end teams to add SSRS reports to their projects and use a set of widgets to add extra functionality to the reports (e.g. paging, drill-down, drill-through...)\r\n\r\nAt the end of each sprint, I took the responsibility of preparing and presenting a demo to the project's stakeholders.\r\n\r\nThe Dashboard is the team's most important product. It helps business personnel to track and analyze important KPI's. I helped modernize the product's tech stack, earlier written in AngularJs with Typescript, to Angular (5).\r\n\r\n**Key technologies: AngularJs, Jasmine, Karma, Angular (5), Typescript, Lodash, RxJs, GIT**\r\n",
    },
    {
      startDate: '2015-06-01',
      endDate: '2017-02-01',
      title: 'Software Engineer',
      logoUrl: 'safra-logo.png',
      name: 'Bank Safra',
      description:
        "\r\nAs part of the initiative to revamp one of our leading products, I spiked and implemented a prototype of what became the department's first mobile project.\r\n      \r\nThe fronted stack consisted of Framework7 as the presentation layer fully integrated with VueJs. The backend was also affected by this revamping. We designed, implemented, and tested the new API following RESTFul principles which were innovative within the bank.\r\n\r\nImplemented a web scraper - written in C# and Cron - that automated repetitive manual queries on third party legacy systems.\r\n\r\nDesigned and co-authored a proprietary Workflow system written in AngularJs and Bootstrap.\r\nIntroduced best practices for querying and manipulating the DOM (Document Object Model) with jQuery.\r\n\r\n**Key technologies: AngularJs, jQuery, VueJs, Framework7, Quartz, Web Api, PL-SQL, Oracle, ASP.NET MVC, Simple Injector, Windows Services, SVN**",
    },
  ],
}
