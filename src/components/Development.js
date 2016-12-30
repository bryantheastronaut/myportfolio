import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export const Development = () => {
  let style = {
    textAlign: 'center'
  }
  let imageStyle = {
    width: '40vw',
    margin: '0 auto',
    border: '1px solid #999',
    borderRadius: '5px',
    boxShadow: '2px 2px 2px #999',
    marginBottom: '10px'
  }
  return (
    <div style={style}>
      <h2>DEVELOPMENT</h2><hr />
      <Grid>
        <Row>
          <Col md={6}>
            <h3>High-Low</h3>
            <img style={imageStyle} src='/assets/high-low-optimized.jpg' />
            <p>
              Built with React. Deployed with Heroku
            </p>
            <p>
              Check out the <a className='link' href='https://github.com/bryantheastronaut/high-low'>source code</a> or <a className='link' href='https://high-low.herokuapp.com'>see it live.</a>
            </p>
          </Col>
          <Col md={6}>
            <h3>MERN Stack Comment Box</h3>
            <img style={imageStyle} src='/assets/MERN-optimized.jpg' />
            <p>
              Built with MongoDB, Express, React, and Node
            </p>
            <p>
              Check out the <a className='link' href='https://github.com/bryantheastronaut/mernCommentBox'>source code</a> or check out the <a className='link' href='https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50#.16rkfz7mn'>tutorial.</a>
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
