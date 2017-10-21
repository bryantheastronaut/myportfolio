import React, { Component } from 'react';
import Modal from 'react-modal';
import { Grid, Row, Col, Clearfix, Button } from 'react-bootstrap';

export class Design extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };
  }
  render() {
    const style = {
      textAlign: 'center'
    };
    const imgStyle = {
      textAlign: 'center',
      width: '90%'
    };
    const modalStyle = {
      content: {
        margin: 0,
        padding: 0,
        textAlign: 'center'
      }
    };
    let imageStyle = {
      width: '40vw',
      margin: '0 auto',
      boxShadow: '2px 2px 2px #999',
      marginBottom: '10px'
    };
    return (
      <div style={style}>
        <h2>DESIGN STUFF</h2><hr />
        <Grid>
          <Row>
            <Col md={12}>
              <h3>Approved</h3>
              <img className='thumbnail' src='/assets/approved.png' style={imageStyle} />
              <p>
                Check out the <a className='link' href='https://www.getapproved.io'>live site here.</a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
                <h3>Houston</h3>
                <img
                  className='thumbnail'
                  src='/assets/Houston-optimized.jpg'
                  style={imageStyle}
                  onClick={() => this.setState({modalOpen: true})}
                />
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
        <Modal
          isOpen={this.state.modalOpen}
          style={modalStyle}
          onRequestClose={() => this.setState({modalOpen: false})}
        >
          <img style={imgStyle} src='/assets/Houston-optimized.jpg' />
          <div>
            <Button bsStyle="warning" onClick={() => this.setState({modalOpen: false})}>Close</Button>
          </div>
        </Modal>
      </div>
    );
  }
};
