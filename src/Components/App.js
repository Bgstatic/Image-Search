import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './App.css';
import axios from 'axios';
import ImageList from './ImageList';

class App extends Component {

  state = {

    images : []
  };

  onSearchImage = async (search) => {

    const result = await axios.get('https://api.unsplash.com/search/photos', {
      params: {

        query: search

      },
      headers: {

        Authorization: 'Client-ID tfB55cAzJv9ofuc60dPMMBfvp52a2FUaqsd5DrveBZo'

      }

    })
    this.setState({

      images : result.data.results

    })
  }

  render() {

    return (

      <div className="App-container">
        <SearchBar onSearchImage={this.onSearchImage} />
        <ImageList images = {this.state.images}/>
      </div>

    )

  }

}

export default App;
