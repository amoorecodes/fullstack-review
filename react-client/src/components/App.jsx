import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './Search.jsx';
import RepoList from './RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [1, 2, 3, 4]
    }

  }

  componentDidMount() {
    axios.get('/')
      .then((results) => {
        this.setState({
          repos: results
        })
      })
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    axios.post(`/repos`, {
      username: term
    })
    .then((results) => {
      console.log(results);
      this.setState({
        repos: results
      });
    })
    .catch((err) => {
      console.log('failed to search', err);
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

export default App;