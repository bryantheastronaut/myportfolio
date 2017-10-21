import React from 'react';
import {Link} from 'react-router';

export const About = () => {
  let style = {
    textAlign: 'center'
  };
  let imageStyle = {
    width: '40vw',
    minWidth: '250px',
    borderRadius: '15px',
    position: 'relative',
    boxShadow: '2px 2px 2px #333',
    margin: '10px',
    zIndex: '999'
  };
  return (
    <div style={style}>
      <h2>About me:</h2><hr />
        <p style={{maxWidth: 700, margin: '0 auto'}}>
          Hi! My name is Bryan. I am a Full Stack Javascript
          Developer with a focus on front end and UX/UI Design. I work
          as a React Developer in San Diego, CA. I like teaching, and learning.
          If you wanna chat, hit me up. Contacts below.
        </p>
        <p>Im out. But first... <a href='https://www.youtube.com/watch?v=kdemFfbS5H0'>let me take a selfie</a></p>
        <img style={imageStyle} src='/assets/selfie.jpg' />
    </div>
  );
};
