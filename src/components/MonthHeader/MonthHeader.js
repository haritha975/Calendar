import React from "react";

import styles from './MonthHeader.css';

const MonthHeader = ({ month, year }) => {
  return (
    <div className={styles.root}>
      {month} {year}
    </div>
  );
};

export default MonthHeader;
