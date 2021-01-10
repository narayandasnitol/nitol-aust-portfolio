﻿/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Nitol\'s Portfolio',
  title: "I'm Narayan Das Nitol",
  subTitle: emoji(
    'Computer Science graduate passionate about software engineering and web development. Highly-capable leader, having led multiple projects to completion. Proficient in a range of modern technologies including Python, Java, C++ and Problem Solving.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1M7A7HmQrTKIJ0UBJU202RCwXxAxrJH04/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/narayandasnitol/',
  linkedin: 'https://www.linkedin.com/in/narayandasnitol/',
  gmail: 'nitol.aust.cse@gmail.com',
  facebook: 'https://www.facebook.com/nitoldasneel',
  stackoverflow: 'https://stackoverflow.com/users/7060019/nitol-das-neel',

  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY PROGRAMMER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Academic experience in Mobile App Development, Web Design, Web Development and Database Management System.'
    ),
    emoji('⚡ Completed more than 10+ academic projects.'),
    emoji(
      '⚡ Self-motivated individual with exceptional communication and interpersonal skills.'
    ),
  ],

  /*icon credit : https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'bootstrap',
      fontAwesomeClassname: 'fab fa-bootstrap',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'fab fa-git',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'java',
      fontAwesomeClassname: 'fab fa-java',
    },
    {
      skillName: 'android development',
      fontAwesomeClassname: 'fab fa-android',
    },
    {
      skillName: 'web development',
      fontAwesomeClassname: 'fas fa-file-code',
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Ahsanullah University of Science and Technology (AUST)',
      logo: require('./assets/images/LogoAust.jpg'),
      subHeader: 'B.Sc in Computer Science and Engineering',
      duration: 'November 2015 - January 2020',
      desc: 'CGPA : 3.23 / 4.00',
      
    },
    {
      schoolName: 'Jalalabad Cantonment Public School and College (JCPSC)',
      logo: require('./assets/images/LogoJcpsc.jpg'),
      subHeader: 'HSC - Science',
      duration: 'July 2012 - June 2014',
      desc:
        'GPA : 5.00 / 5.00',
      
    },
    {
      schoolName: 'Border Guard Public School and College (BGPSC)',
      logo: require('./assets/images/LogoBgpsc.jpg'),
      subHeader: 'SCC - Science',
      duration: 'January 2003 - June 2012',
      desc:
        'GPA : 5.00 / 5.00',
    }
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Android Development', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Web Design and Development', 
      progressPercentage: '80%',
    },
    {
      Stack: 'Database',
      progressPercentage: '70%',
    },
    {
      Stack: 'Object Oriented Programming',
      progressPercentage: '70%',
    },
    {
      Stack: 'Problem Solving',
      progressPercentage: '70%',
    },
    {
      Stack: 'UI Design',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Project section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Duck Shooter - Game',
      company: 'Java',
      companylogo: require('./assets/images/Duck.png'),
      date: 'January 2017 - April 2017',
      desc:
        'This is a 2D platform game created with Java. You can run this with Eclipse IDE.',
      descBullets: [
        'You can set timer manually how long you want to play.',
        'You can shoot ducks, birds and also a mega duck to collect bonus point.',
        'After killing a bird, my dog Tommy will catch that bird to help you.',
        'You can also see your current score and high score while playing.'
      ]
    },
    {
      role: 'AUST Class Manager',
      company: 'Android',
      companylogo: require('./assets/images/AustClassManager.png'),
      date: 'June 2017 – September 2017',
      desc:
        'This is an Android App which can do basic tasks to help a student studying in AUST.',
      descBullets: [
          'You can see class routine, official notice and results.',
          'It can calculate CGPA.',
          'It also can calculate quiz final marks that will directly add with final marks of the semester.',
          'It has a notification system where you can set the upcoming quiz date. Before the quiz date, it will notify you through alarm.'
      ]
    },
    {
      role: 'CGPA Calculator',
      company: 'Android',
      companylogo: require('./assets/images/AustCgpa.png'),
      date: 'June 2017 – September 2017',
      desc:
        'This is an Android App which can calculate undergrad CGPA.',
      descBullets: [
        'Calculate CGPA.',
        'Instant display the input.',
        'Material Design UI.'
    ]
    },
    {
      role: 'YTube Downloader',
      company: 'Android',
      companylogo: require('./assets/images/DownloadY.jpg'),
      date: 'June 2017 – September 2017',
      desc:
        'This is an Android App which can download youtube video directly on local device.',
      descBullets: [
        'File storage',
        'Downloader',
        'Material Design UI.'
    ]
    },
    {
      role: 'BUS Ticket Reservation Manager',
      company: 'JAVA Swing',
      companylogo: require('./assets/images/AustBus.png'),
      date: 'December 2017 – March 2018',
      desc:
        'This is a JAVA Swing project using MYSQL. You can book your upcoming bus ticket on it.',
      descBullets: [
        'User Login / Registration.',
        'User Profile Management.',
        'Ticket booking system.',
        'Ticket Information.'
    ]
    },
    {
      role: 'Car Rent & Sell',
      company: 'ASP.NET',
      companylogo: require('./assets/images/AustCar.png'),
      date: 'May 2018 – September 2018',
      desc:
        'This is an ASP.NET project. The owner of this site can sell and rent cars in Bangladesh',
      descBullets: [
        'User Login / Registration.',
        'User Profile Management.',
        'Car Gallery with price.',
        'Time Schedule.'
      ]
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'narayandasnitol', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// projects source code you have worked on

const bigProjects = {
  title: 'Github Repository',
  subtitle: 'Source Code of my projects are given below: ',
  projects: [
    {
      image: require('./assets/images/Duck.png'),
      link: 'https://github.com/narayandasnitol/Shoot-The-Duck',
    },
    {
      image: require('./assets/images/AustClassManager1.png'),
      link: 'https://github.com/narayandasnitol/Aust-Class-Manager',
    },
    {
      image: require('./assets/images/AustCgpa1.png'),
      link: 'https://github.com/narayandasnitol/CGPA-Calculator',
    },
    {
      image: require('./assets/images/AustBus.png'),
      link: 'https://github.com/narayandasnitol/Bus-Ticket-Reservation-Manager',
    },
    {
      image: require('./assets/images/AustCar.png'),
      link: 'https://github.com/narayandasnitol/Car-Rent-Sell',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji('Projects'),
  subtitle:
    '',

  achievementsCards: [
    {
      title: '',
      subtitle:
        '',
      // image: require('./assets/images/xyz.jpg'),
      footerLink: [
        {
          name: '',
          url:
            '',
        }
      ],
    }
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Source Code Section

const blogSection = {
  title: 'Project Source Code',
  subtitle:
    '',

  blogs: [
    {
      url:
        'https://github.com/narayandasnitol/Shoot-The-Duck',
      title: 'Duck Shooter - Game',
      description:
        '',
    },
    {
      url: 'https://github.com/narayandasnitol/Aust-Class-Manager',
      title: 'AUST Class Manager',
      description:
        '',
    },
    {
      url: 'https://github.com/narayandasnitol/CGPA-Calculator',
      title: 'CGPA Calculator',
      description:
        '',
    },
    {
      url: 'https://github.com/narayandasnitol/YTubeDownloader',
      title: 'YTube Downloader',
      description:
        '',
    },
    {
      url: 'https://github.com/narayandasnitol/Bus-Ticket-Reservation-Manager',
      title: 'BUS Ticket Reservation Manager',
      description:
        '',
    },
    {
      url: 'https://github.com/narayandasnitol/Car-Rent-Sell',
      title: 'Car Rent & Sell',
      description:
        '',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {

  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Listen it 🎙️'),
  subtitle: 'The most common way people give up their power is by thinking they don’t have any.',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/nitol-das-neel/embed/episodes/ep-eoppqh'
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Email : nitol.aust.cse@gmail.com  || Phone : +8801753458871, +8801645332843',
  number: '+8801753458871',
  emailAddress: 'nitol.aust.cse@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'TechCrunch', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
