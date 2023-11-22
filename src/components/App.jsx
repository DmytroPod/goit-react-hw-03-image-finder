import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
export class App extends Component {
  state = {
    results: [],
    q: '',
    page: 1,
    totalImages: 0,
    loading: false,
  };

  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
        <Button />
        <Loader />
      </div>
    );
  }
}
export default App;
