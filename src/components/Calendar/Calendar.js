import React from "react";
import moment from 'moment';

import styles from './Calendar.css';

import CalendarHeader from '../CalendarHeader';
import Month from '../Month';

function renderMonths(startDate, dayCount, countryCode) {
  const endDate = startDate.clone().add(dayCount, 'days');
  let currDate = startDate.clone();
  let months = [];
  let key = 0;

  while (currDate.month() != endDate.month() || currDate.year() != endDate.year()) {
      months = [ ...months, <Month key={key++} startDate={currDate.clone()} /> ];
      currDate.date(1);
      currDate.add(1, 'month');
  }

  months = [ ...months, <Month key={key} startDate={currDate.clone()} dayCount={endDate.date() - currDate.date()} /> ];

  return months;
}

const Calendar = ({ startDate = "", dayCount = 0, countryCode = "US" }) => {
  startDate = moment(startDate, "MM/DD/YYYY");

  if (!startDate.isValid() || dayCount <= 0 || countryCode.length <= 0) return null;

  return (
    <div className={styles.root}>
      <CalendarHeader />
      {renderMonths(startDate, dayCount, countryCode)}
    </div>
  );

};

export default Calendar;
