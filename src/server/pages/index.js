import angularRouter from './angular';
import reactRouter from './react';
import userRouter from './users';

const appCards = [
  {
    title: 'Angular',
    subtitle: 'code',
    icon: 'web',
    description: 'integrated bymyself.',
    url: '/angular',
    url2: 'javascript:void(0)',
  },
  {
    title: 'React',
    subtitle: 'create-react-app',
    icon: 'web',
    description: 'cli-generated.',
    url: '/react',
    url2: 'javascript:void(0)',
  },
  {
    title: 'api',
    subtitle: 'backend',
    icon: 'data_usage',
    description: 'written from scratch.',
    url: '/user',
    url2: 'javascript:void(0)',
  },
];

export { angularRouter, userRouter, reactRouter, appCards };
