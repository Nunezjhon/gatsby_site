module.exports = {
  siteTitle: 'Jhon Nunez | Software Engineer',
  siteDescription:
    'Jhon Nunez is a software engineer based in Chicago, IL who specializes in developing exceptional, high-quality applications.',
  siteKeywords:
    'Jhon Nunez, Jhon, Nunez, software engineer, UIC',
  siteUrl: 'https://jhonnunez.com',
  siteLanguage: 'en_US',

  //googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Jhon Nunez',
  location: 'Chicago, IL',
  email: 'nunezjhon32@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/Nunezjhon',
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/jhonnunez/',
    },
    //{
    //  name: 'Instagram',
    //  url: 'https://www.instagram.com/bchiang7/',
    //},
    //{
    //  name: 'Twitter',
    //  url: 'https://twitter.com/bchiang7',
    //},
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  //twitterHandle: '@bchiang7',
  //googleAnalyticsID: 'UA-45666519-2',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
