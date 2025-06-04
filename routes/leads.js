import express from 'express';
import { authenticate } from '../utils/auth.js';
import { discoverLeads } from '../controllers/discover.js';

const router = express.Router();

router.post('/discover', authenticate, discoverLeads);

export default router;
