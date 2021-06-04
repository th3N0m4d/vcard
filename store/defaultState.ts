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
    headline: 'Fullstack Frontend Engineer',
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
    phoneNumber: '48 662 868 789',
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
    'Traveling',
    'Playing guitar',
    'Blogging',
    'Books',
    'Biking',
    'Hard Sciences',
  ],
}
