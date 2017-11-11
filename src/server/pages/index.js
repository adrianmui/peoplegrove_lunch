import { Router } from 'express';
import { angularRouter, userRouter, reactRouter } from './routes';
import { loginRequired } from '../auth/auth';

const router = Router();

const cards = [
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

router.get('/', (req, res, next) => {
  console.log(`current user is: ${req.user}`);
  res.render('index', { user: req.user, cards: cards });
});

router.get('/profile', loginRequired, (req, res, next) => {
  res.render('user/profile', { user: req.user });
});

router.use('/angular', loginRequired, angularRouter);
router.use('/user', loginRequired, userRouter);
router.use('/react', loginRequired, userRouter);

export default router;
