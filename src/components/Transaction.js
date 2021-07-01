import React from 'react';

const Transaction = (props) => {
  return (
    <li className='minus'>
      {props.text} <span>-$400</span>
      <button className='delete-btn'>x</button>
    </li>
  );
};

export default Transaction;
