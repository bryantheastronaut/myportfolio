import React from 'react';

let style = {
  marginTop: '-65px'
};

export const HorizontalLines = () => {
  return (
    <div id='line-container' style={style}>
      <svg id='lines' width='100vw' height='60px'>
      <rect className='line' x='20vw' y='10' rx='2px' ry='2px' width="80vw" height='5px' fill='#979797' />
      <rect className='line' x='23vw' y='20' rx='2px' ry='2px' width='77vw' height='5px' fill='#AEACAC' />
      <rect className='line' x='26vw' y='30' rx='2px' ry='2px' width='74vw' height='5px' fill='#B5B3B3' />
      <rect className='line' x='29vw' y='40' rx='2px' ry='2px' width='71vw' height='5px' fill='#D2D0D0' />
      <rect className='line' x='32vw' y='50' rx='2px' ry='2px' width='68vw' height='5px' fill='#D9D6D6' />
      </svg>
    </div>
  );
};
