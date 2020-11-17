import express from 'express';
import { create } from '../controllers/poll.js';

const router = express.Router();

router.post('/', create);

export default router;
