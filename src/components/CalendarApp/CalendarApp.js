import React, { Component } from "react";

import styles from './CalendarApp.css';

import Calendar from '../Calendar';

class CalendarApp extends Component {
  constructor() {
    super();

    this.state = {
      startDate: "02/24/2018",
      dayCount: 30,
      countryCode: "US"
    };
  }
  onStartDateChange(e) {
    this.setState({ ...this.state, startDate: e.target.value });
  }
  onCountryCodeChange(e) {
    this.setState({ ...this.state, countryCode: e.target.value });
  }
  onDayCountChange(e) {
    this.setState({ ...this.state, dayCount: e.target.value });
  }
  render() {
    const { startDate, dayCount, countryCode } = this.state;
    const { onStartDateChange, onDayCountChange, 
            onCountryCodeChange } = this;

    return (
      <div className={styles.root}>
        <div className={styles.form}>

          <div className={styles['form-group']}>
            <span>Enter Start Date:</span>
            <input type="text" value={startDate} onChange={onStartDateChange.bind(this)} />
          </div>


          <div className={styles['form-group']}>
            <label>Enter Number of Days:</label>
            <input type="number" min="1" value={dayCount} onChange={onDayCountChange.bind(this)} />
          </div>

          <div className={styles['form-group']}>
            <label>Country Code</label>
            <input type="text" placeholder="US" value={countryCode} onChange={onCountryCodeChange.bind(this)}/>
          </div>

        </div>
        <div className={styles["calendar-area"]}>
          <Calendar startDate={startDate} dayCount={dayCount} countryCode={countryCode} />
        </div>
      </div>
    );
  }
}

export default CalendarApp;
