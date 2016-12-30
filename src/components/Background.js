import React from 'react';

let img1 = {
  position: 'fixed',
  left: '-40px',
  top: '75px',
  width: '45vw',
  minWidth: '200px'
}

let img2 = {
  position: 'fixed',
  bottom: '0',
  right: '-10px',
  width: '35vw',
  minWidth: '150px'
}

export const Background = () => {
  return (
    <div>
      <img style={img1} src='/assets/bg1.png' />
      <img style={img2} src='/assets/bg2.png' />
    </div>
  )
}
