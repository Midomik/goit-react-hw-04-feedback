import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const objKeys = { good, neutral, bad };

  const getFeedbeck = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        console.log('Ooops! Something went wrong (');

        break;
    }
    // [feedback]: this.state[feedback] + 1,
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <div className={css.main_container}>
      <Section title={'Option'}>
        <FeedbackOptions
          getFeedbeck={getFeedbeck}
          options={Object.keys(objKeys)}
        />
      </Section>

      <Section title={'Statistic'}>
        <Statistics
          data={objKeys}
          total={countTotalFeedback()}
          goodPercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

//http://localhost:3000/react-homework-template
