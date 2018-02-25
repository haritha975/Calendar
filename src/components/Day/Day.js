import React from "react";

import styles from './Day.css';

const Day = ({ date = null, color = "blue" }) => {
  return (
    <div className={styles.root} style={{ backgroundColor: color }}>
      <span>{date}</span>
    </div>
  );
};

export default Day;
