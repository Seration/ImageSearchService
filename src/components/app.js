import React, { Component } from 'react';
import SearchBar from './searchBar/searchBar';
import './app.css';
import axios from 'axios';
import ImageList from './image/imageList'

class App extends Component {
   
state = {
  images:[]
}

  onSearchImage = async (search) => {

   const result = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: search
      },
      headers: {
        Authorization: 'Client-ID 1707fd9f10a6ea96a7b6cc07005237abb96dfda2a29a64c9b7e624f3b5042ecb'
      }
    })

    this.setState({
      images: result.data.results
    });
    
  }

  render() {
    return (
      <div className='app-container'>
        <SearchBar onSearchImage={this.onSearchImage}></SearchBar>
        <ImageList images={this.state.images}></ImageList>
      </div>
    )
  }
};

export default App;