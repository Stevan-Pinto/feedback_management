import React, { useEffect, useState } from 'react';
import '../App.css'; // Corrected path to App.css

const FeedbackList: React.FC = () => {
  const [feedback, setFeedback] = useState<any[]>([]);

  useEffect(() => {
    const worker = new Worker(new URL('../workers/feedbackWorker.ts', import.meta.url));

    worker.onmessage = (event) => {
      setFeedback(event.data);
    };

    worker.postMessage('fetch');

    return () => worker.terminate();
  }, []);

  return (
    <div>
      {feedback.map((entry, index) => (
        <div key={index}>
          <h4>{entry.name}</h4>
          <p>{entry.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
