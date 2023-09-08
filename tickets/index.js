import { Router } from 'express';
import { getAllTicketsAction } from './controller.js';

const router = Router();

router.get('/', getAllTicketsAction);

export { router };