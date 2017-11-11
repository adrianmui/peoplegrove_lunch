import express, { Router } from 'express';
import path from 'path';

console.log('re');

console.log('generator re');

const router = Router();

router.get('*', (req, res) => {
  console.log('react');
  res.sendFile(path.join(__dirname, '../../client-react/build/index.html'));
});
export default router;
