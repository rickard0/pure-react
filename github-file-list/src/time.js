import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Time = ({time}) => {
  // If this isn't destructured, we get an object instead of a string. odd.
  const timeString = moment(time, 'YYYY-MM-DD HH:mm:ss').fromNow();
  return (
    <span className="time">
      {timeString}
    </span>
  );
};
Time.propTypes = {
  time: PropTypes.string.isRequired,
};


export default Time;
