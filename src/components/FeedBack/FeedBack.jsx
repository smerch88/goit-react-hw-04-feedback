import { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

export const FeedBack = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addRating = e => {
    const feedbackRating = e.target.id;
    console.log(feedbackRating);
    if (feedbackRating === 'good') {
      return setGood(good + 1);
    } else if (feedbackRating === 'neutral') {
      return setNeutral(neutral + 1);
    } else {
      return setBad(bad + 1);
    }
  };

  const countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  const countPositiveFeedbackPercentage = (good, neutral, bad) =>
    ((good * 100) / (good + neutral + bad)).toFixed(0);

  return (
    <div>
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        onLeaveFeedback={addRating}
        options={{ good, neutral, bad }}
      />
      {countTotalFeedback(good, neutral, bad) === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(good, neutral, bad)}
          positivePercentage={countPositiveFeedbackPercentage(
            good,
            neutral,
            bad
          )}
        />
      )}
    </div>
  );
};
