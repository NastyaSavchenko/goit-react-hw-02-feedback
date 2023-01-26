import css from './statistics.module.css';
import React from 'react';
import PT from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.stats}>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {positivePercentage} %</span>
    </div>
  );
};

export default Statistics;

Statistics.propsType = {
  good: PT.number.isRequired,
  neutral: PT.number.isRequired,
  bad: PT.number.isRequired,
  total: PT.number.isRequired,
  percentage: PT.number.isRequired,
};
