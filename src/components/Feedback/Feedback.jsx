import React from 'react';
import css from '../Feedback/feedback.module.css';
import PT from 'prop-types';

class Feedback extends React.Component {
  total = 0;
  percentage = 0;

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onGoodClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onNeutralClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onBadClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((a, b) => a + b);
    this.total = total;
  };

  countPositiveFeedbackPercentage = () => {

    if(this.total === 0){
        this.percentage = 0;
    } else {
        const percentage = Math.floor((this.state.good * 100) / this.total);
        this.percentage = percentage;
    }
  };

  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();

    return (
      <div className={css.feedbackWrapper}>

          <h2 className={css.title}>Please leave feedback</h2>
          <button className={css.btn} type="button" onClick={this.onGoodClick}>
            Good
          </button>
          <button
            className={css.btn}
            type="button"
            onClick={this.onNeutralClick}
          >
            Neutral
          </button>
          <button className={css.btn} type="button" onClick={this.onBadClick}>
            Bad
          </button>

        <h2 className={css.title}>Statistics</h2>
        <div className={css.stats}>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>Total:{this.total}</span>
          <span>
            Positive feedback:{this.percentage} %
          </span>
        </div>
      </div>
    );
  }
}

export default Feedback;

Feedback.propsType = {
  good: PT.number.isRequired,
  neutral: PT.number.isRequired,
  bad: PT.number.isRequired,
};
