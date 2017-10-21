import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export const Footer = () => {
  let iconStyle = {
    fontSize: '3rem',
    textAlign: 'center',
    color: 'lightblue',
    textShadow: '1px 1px 1px black',
    width: '100vw'
  };

  let fontStyle = {
    textAlign: 'center',
    fontSize: '1rem',
    color: '#222',
    textShadow: 'none',
    paddingTop: '10px'
  };
  return (
    <Grid style={iconStyle}>
      <Row>
        <Col xs={2} xsOffset={3}><a href='http://www.twitter.com/spacebrayn'><i className='icon fa fa-twitter'></i></a></Col>
        <Col xs={2}><a href='https://www.github.com/bryantheastronaut'><i className='icon fa fa-github'></i></a></Col>
        <Col xs={2}><a href='https://www.linkedin.com/in/bryangilbraith'><i className='icon fa fa-linkedin'></i></a></Col>
      </Row>
      <Row style={fontStyle}>
        <Col sm={6} smOffset={3}>or email me at gilbraith.bryan@gmail.com</Col>
      </Row>
    </Grid>
  );
};
