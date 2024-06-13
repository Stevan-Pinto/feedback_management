import { Router } from 'express';
import { getAllFeedback, submitFeedback } from '../controllers/feedbackController';
import rateLimiter from '../middlewares/rateLimiter';

const router = Router();

router.get('/', getAllFeedback);
router.post('/', rateLimiter, submitFeedback);

export default router;

