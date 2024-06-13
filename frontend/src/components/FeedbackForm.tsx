import React, { useState } from 'react';
import { submitFeedback } from '../services/feedbackService';
import '../App.css';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitFeedback(name, feedback);
      setName('');
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Feedback</label>
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
