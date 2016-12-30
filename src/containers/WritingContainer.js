import React, {Component} from 'react';

class WritingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imageURL: '',
      name: '',
      posts: []
    };
  }
  render() {
    let style = {
      textAlign: 'center'
    }
    return (
      <div style={style}>
        <h1>Writing:</h1><hr />
      </div>
    );
  }
};

export default WritingContainer;
