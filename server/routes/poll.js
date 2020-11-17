import express from 'express';
import { listAllPolls, submit } from '../controllers/poll.js';

const router = express.Router();

router.get('/', listAllPolls);
router.put('/:id', submit);

export default router;
