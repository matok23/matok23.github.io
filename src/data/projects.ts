import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    name: 'Mobile Parking App',
    description: 'Mobile application to create, manage and reserve parking anywhere in advance.',
    github: 'https://github.com/matok23/zmabt',
    sections: [
      {
        title: 'Frontend',
        description: 'React native frontend built with Expo. Includes full map view (Google Maps API SDK) and qr-code scanner. Notifications created with Firebase.',
        github: 'https://github.com/matok23/zmabt/tree/main/frontend'
      },
      {
        title: 'Backend',
        description: 'Backend built with AdonisJS using Lucid ORM and PostrgeSQL database. Built-in auth with optional Google OAuth.',
        github: 'https://github.com/matok23/zmabt/tree/main/backend'
      }
    ],
  },
  {
    name: 'Real-time Messaging PWA',
    description: 'Messaging progressive web application with direct messaging, channels, mentions and full auth.',
    github: 'https://github.com/sintaladam/VPWA',
    sections: [
      {
        title: 'Frontend',
        description: 'Frontend built on top of Vue.js using Quasar framework. PWA responsive on desktop aswell as phone.',
        github: 'https://github.com/sintaladam/VPWA/tree/main/slack_clone'
      },
      {
        title: 'Backend',
        description: 'Backend built with AdonisJS using Lucid ORM and PostrgeSQL database. Real-time communication using websockets.',
        github: 'https://github.com/sintaladam/VPWA/tree/main/slack_clone_backend'
      }
    ],
  },
  {
    name: 'Portfolio Website',
    description: 'My personal portfolio built with React and TypeScript.',
    github: 'https://github.com/matok23/matok23.github.io',
    sections: [
    ],
  },
  {
    name: 'E-shop Web',
    description: 'Simple e-shop built using Laravel framework. Includes browsing, search, cart and admin dashboard.',
    github: 'https://github.com/matok23/wtech',
    sections: [
    ],
  },
  {
    name: 'Credit Risk Assessment using CNN',
    description: 'Testing different convolutional neural network architectures on the Credit Risk Assessment dataset.',
    github: 'https://github.com/matok23/zneus_proj_1',
    sections: [
    ],
  },
  {
    name: 'Sports Image Classification using RESNET',
    description: 'Sports images classification with pretrained resnet backbones and training mimic architectures for comparison.',
    github: 'https://github.com/matok23/zneus_proj_2',
    sections: [
    ],
  },
];