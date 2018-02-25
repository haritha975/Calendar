import React from "react";

import styles from './Week.css';

import Day from '../Day';

const WEEKDAY_COLOR = "MediumSeaGreen";
const WEEKEND_COLOR = "Gold";
const INVALID_COLOR = "Silver";

function renderDays(startDay, dayCount, startDate) {
  let days = [];

  for (let i = 0; i < 7; i++) {
    if (i < startDay || i >= dayCount)
      days = [ ...days, <Day key={i} color={INVALID_COLOR} /> ];
    else if (i == 0 || i == 6)
      days = [ ...days, <Day key={i} date={startDate++} color={WEEKEND_COLOR} /> ];
    else
      days = [ ...days, <Day key={i} date={startDate++} color={WEEKDAY_COLOR} /> ];
  }

  return days;
}

const Week = ({ startDay = 0, dayCount = 7, startDate = 1 }) => {
  if (dayCount <= 0) return null;

  return (
    <div className={styles.root}>
      {renderDays(startDay, dayCount, startDate)}
    </div>
  );
};

export default Week;
