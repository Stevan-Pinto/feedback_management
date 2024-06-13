import { fetchFeedback } from '../services/feedbackService';

/* eslint-disable no-restricted-globals */
self.onmessage = async () => {
  const feedback = await fetchFeedback();
  self.postMessage(feedback);
};
/* eslint-enable no-restricted-globals */
