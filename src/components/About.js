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
  }
  return (
    <div style={style}>
      <h2>About me:</h2><hr />
        <p>
          Hi! My name is Bryan. I am a Full Stack Javascript Developer with a focus on front end and UX/UI Design.
          I mostly use React, but only because it's the best framework, wanna fight about it?
        </p>
        <p>Some bits about me are:</p>
        <ul style={{listStyle: 'none'}}>
          <li>I use Javascript wherever I can ( Mongo, Node, Express, and React is &lt;3 )</li>
          <li>I know some Python and Ruby too</li>
          <li>I am very interested in creating APIs and find security and user authentication fascinating</li>
          <li>I am a professional learner -- A.A. in Graphic Design, B.A. in Psychology and self taught programmer</li>
          <li>I am passionate about teaching others, whether one-on-one or <Link to='/writing'>through tutorials</Link></li>
          <li>I am pretty into functional programming</li>
        </ul>
        <p>
          So... what do you say we take this to the next level? You can hit me up through one of these
          <i className='fa fa-arrow-down'></i>
          <i className='fa fa-arrow-down'></i>
          <i className='fa fa-arrow-down'></i>
        </p>
        <p>Im out. But first... <a href='https://www.youtube.com/watch?v=kdemFfbS5H0'>let me take a selfie</a></p>
        <img style={imageStyle} src='/assets/selfie.jpg' />
    </div>
  )
}

// I am a full stack web developer with a focus on front end development and UI design.
// My focus is Javascript with some experience using Ruby. I am an advocate for React - the component system makes separating your logic and presentational layers easy and intuitive, leading to cleaner, easier to reason about code. I have also been spending time working with authentication and securing API endpoints with OAuth and JSON Web Tokens.
// I am passionate about learning and helping others. I am often in the Free Code Camp Slack channel for the San Diego branch which I helped start and foster to answer newcomers questions — or you can find me writing tutorials on Medium.
