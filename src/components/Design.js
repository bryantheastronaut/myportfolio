import React from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

export const Design = () => {
  let style = {
    textAlign: 'center'
  }
  let imageStyle = {
    width: '40vw',
    margin: '0 auto',
    boxShadow: '2px 2px 2px #999',
    marginBottom: '10px'
  }
  return (
    <div style={style}>
      <h2>DESIGN STUFF</h2><hr />
      <Grid>
        <Row>
          <Col md={6}>
            <h3>Houston</h3>
            <img className='thumbnail' src='/assets/Houston-optimized.jpg' style={imageStyle}/>
            <p>
              Original concept design for a SaaS. Created in Sketch (with a little help from photoshop).
            </p>
          </Col>
          <Col md={6}>
            <h3>Circle</h3>
            <img className='thumbnail' src='/assets/Circle-optimized.jpg' style={imageStyle}/>
            <p>
              Re-creation of the Square site, built with pure HTML/CSS
            </p>
            <p>
              Check out the <a className='link' href='http://bryangilbraith.com/landing_two/index.html'>full recreation here.</a>
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
