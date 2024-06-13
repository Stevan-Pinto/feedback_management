import { Request, Response } from 'express';
import { getFeedbackEntries, addFeedbackEntry } from '../services/feedbackService';

export const getAllFeedback = (req: Request, res: Response) => {
  const feedback = getFeedbackEntries();
  res.json(feedback);
};

export const submitFeedback = (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  if (!name || !feedback) {
    return res.status(400).send('Name and feedback are required');
  }
  addFeedbackEntry(name, feedback);
  res.status(201).send('Feedback submitted');
};

