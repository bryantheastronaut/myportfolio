import React, {Component} from 'react';
import axios from 'axios';

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

  componentDidMount() {
    axios.get('/posts.json')
      .then(data => {
        this.setState({
          posts: data.items,
          isLoading: false
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    let style = {
      textAlign: 'center'
    }
    let listStyle = {
      listStyle: 'none',
      fontSize: '1.85rem',
      marginBottom: '150px'
    }
    let listItem = {
      margin: '20px',
      color: '#e08453'
    }
    console.log(this.state);
    return (
      <div style={style}>
        <h1>Writing:</h1><hr />
        <ul style={listStyle}>
          <li style={{margin: '10px'}}><a style={listItem}  href='https://medium.com/@bryantheastronaut/fpf-2-functional-programming-fridays-the-saturday-edition-d1d1fa602f98#.5aw28gl83'>FPF #2: Functional Programming Fridays (…the Saturday edition) !</a></li>
          <li style={{margin: '10px'}}><a style={listItem}  href='https://medium.com/@bryantheastronaut/fpf-1-functional-programming-fridays-b23f583ff9c4#.5b8z4iac3'>FPF #1: Functional Programming Fridays!</a></li>
          <li style={{margin: '10px'}}><a style={listItem}  href='https://medium.com/@bryantheastronaut/fpf-0-functional-programming-fridays-b8c9a0c082dc#.4949408pj'>FPF #0: Functional Programming Fridays!</a></li>
          <li style={{margin: '10px'}}><a style={listItem}  href='https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50#.bb4lfc95p'>React Getting Started — The MERN Stack Tutorial! (feat. ES6!)</a></li>
        </ul>
      </div>
    );
  }
};

export default WritingContainer;
