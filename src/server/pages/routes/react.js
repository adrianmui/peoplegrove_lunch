import express, { Router } from 'express';
import path from 'path';

const router = Router();

const publicPath = path.join(__dirname, '../../../dist');

router.use(express.static(publicPath));

router.get('/', (req, res) => {
  res.sendFile(publicPath + '/index.html');
});

export default router;
