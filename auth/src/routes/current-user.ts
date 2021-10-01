import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  return res.send('Hi there!');
});

export { router as currentUserRouter };