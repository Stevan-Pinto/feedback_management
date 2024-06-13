import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Feedback Management System</h1>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default App;
