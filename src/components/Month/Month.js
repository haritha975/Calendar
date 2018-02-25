import React from "react";
import moment from 'moment';

import MonthHeader from '../MonthHeader';
import Week from '../Week';

import { getLastDateOfMonth } from '../../helpers';

import styles from './Month.css';

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function renderWeeks(startDate, dayCount) {
  const startDay = startDate.day();
  const endDate = startDate.clone().add(dayCount, "days");
  const endDay = endDate.day();
  const endWeek = Math.floor((dayCount+startDay) / 7);

  let currStartDate = startDate.date();
  let currStartDay = startDay;
  let currWeek = 0;
  let weeks = [];

  while (currWeek != endWeek) {
      weeks = [ ...weeks, <Week key={currWeek} startDay={currStartDay} startDate={currStartDate} /> ];
      currStartDate += (7 - currStartDay);
      currStartDay = 0;
      currWeek++;
  }

  weeks = [ ...weeks, <Week
    key={currWeek} 
    startDay={currStartDay}
    dayCount={endDay-currStartDay}
    startDate={currStartDate} /> ];

  return weeks;
}

const Month = ({ startDate, dayCount = getLastDateOfMonth(startDate) - startDate.date() + 1}) => {
  if (dayCount <= 0) return null;

  return (
    <div className={styles.root}>
      <MonthHeader month={months[startDate.month()]} year={startDate.year()} />
      <div className={styles["week-area"]}>
        {renderWeeks(startDate, dayCount)}
      </div>
    </div>
  );
};

export default Month;
