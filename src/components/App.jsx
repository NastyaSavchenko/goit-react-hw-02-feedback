import React, { Component } from 'react';
import PT from 'prop-types';
import css from './app.module.css';
import {Statistics, Notification, FeedbackOptions, Section} from '../components'


export class App extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PT.number,
    neutral: PT.number,
    bad: PT.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = 0;
  percentage = 0;

  onBtnOptionClick = stateKey => {
    this.setState(prevState => {
      return {
        [stateKey]: prevState[stateKey] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((a, b) => a + b);
    this.total = total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.total !== 0) {
      const newPercentage = Math.floor((this.state.good * 100) / this.total);
      this.percentage = newPercentage;
    }
  };

  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();

    return (
      <div className={css.feedbackWrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onBtnOptionClick}
          />
        </Section>

        <Section title="Statistics">
          {this.total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total}
              positivePercentage={this.percentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
