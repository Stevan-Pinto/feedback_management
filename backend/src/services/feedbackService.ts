interface FeedbackEntry {
    name: string;
    feedback: string;
  }

  const feedbackEntries: FeedbackEntry[] = [];

  export const getFeedbackEntries = (): FeedbackEntry[] => {
    return feedbackEntries;
  };

  export const addFeedbackEntry = (name: string, feedback: string): void => {
    feedbackEntries.push({ name, feedback });
  };
