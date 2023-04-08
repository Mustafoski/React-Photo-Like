import React from 'react';

const Title = ({ text, classes }) => {
  return (
    <h1 className={!classes ? 'title ' : classes && 'title'}>
      {!text ? 'Title' : text}
    </h1>
  );
};

export default Title;
