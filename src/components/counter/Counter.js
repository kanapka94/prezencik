import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Wrapper = styled.div`
    margin-top: 20px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

const Number = styled.span`
    width: 100px;
    font-size: 42px;
    font-family: 'Sacramento', cursive;

    @media (max-width: 567px) {
        width: 70px;
        font-size: 24px;
    }
`;

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

const Counter = ({ toDate }) => {
    function updateDiff () {
        const now = dayjs();

        return {
            year: toDate.diff(now, 'year'),
            month: toDate.diff(now, 'month') % 12,
            day: toDate.diff(now, 'day') % 365,
            hour: toDate.diff(now, 'hour') % 24 - 1,
            minute: toDate.diff(now, 'minute') % 60,
            second: toDate.diff(now, 'second') % 60,
        }
    }

    const [diff, setDiff] = useState(updateDiff());
    
    useInterval(() => {
        setDiff(updateDiff())
    }, 1000);

    return (
        <Wrapper>
            <Number>{ diff.day } dni </Number>
            <Number>{ diff.hour } godzin </Number>
            <Number>{ diff.minute } minut </Number>
            <Number>{ diff.second } sekund </Number>
        </Wrapper>
    );
};

Counter.propTypes = {
    toDate: PropTypes.object
};

export default Counter;