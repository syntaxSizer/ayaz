import React from 'react';
import Text from '../../../../layout/elements/Text';
import NotThereYetWrapper from './notThereYet.style';

const NotThereYet = ({}) => {
  return (
    <NotThereYetWrapper>
      <div className="section">
        <h3 className="title">No fulfilment stores here yet. Stay tuned!</h3>
        <Text
          content={`We're working everyday to expand our reach, so stay tuned as we are on our way to deliver quality, and affordability. You can help bring Ayazona to your neighbourhood.`}
        />
        <a href="mailto:samson@ayazona.com?cc=partners@ayazona.com&subject=Ayazona%20Ambassador&body=[Please%20tell%20us%20about%20yourself,%20why%20you%20want%20to%20bring%20Ayazona%20to%20your%20city,%20and%20ofcourse%20which%20city!]">
          <button className="action">BECOME AN AMBASSADOR</button>
        </a>
      </div>
    </NotThereYetWrapper>
  );
};

export default NotThereYet;
