import express from 'express';
import { create, login } from '../controllers/user.js';

const router = express.Router();

router.post('/', create);
router.get('/:userEmail', login);

export default router;
