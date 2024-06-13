import axios from 'axios';

const API_URL = 'http://localhost:3000/feedback';

export const fetchFeedback = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const submitFeedback = async (name: string, feedback: string) => {
  await axios.post(API_URL, { name, feedback });
};
