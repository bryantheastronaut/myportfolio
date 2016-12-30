import React, {Component} from 'react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {Background} from '../components/Background';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      name: 'potato'
    };
  }
  render() {
    return (
      <div>
          <Header />
          <Background />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
