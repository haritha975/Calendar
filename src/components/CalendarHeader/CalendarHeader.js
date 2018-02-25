import React from "react";

import styles from './CalendarHeader.css';

const CalendarHeader = () => {
  return (
    <div className={styles.root}>
      <h3>S</h3>
      <h3>M</h3>
      <h3>T</h3>
      <h3>W</h3>
      <h3>T</h3>
      <h3>F</h3>
      <h3>S</h3>
    </div>
  );
};

export default CalendarHeader;
