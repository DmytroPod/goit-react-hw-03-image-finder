import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import getImages from './API/API';

export class App extends Component {
  state = {
    results: [],
    query: '',
    page: 1,
    totalImages: 0,

    loading: false,
  };

  getQuery = formSearch => {
    if (formSearch.trim() === '') {
      alert('Please, enter request');
      return;
    }
    this.setState({ query: formSearch, page: 1, results: [], totalImages: 0 });
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.updateGallery();
    }
  }
  updateGallery = async () => {
    try {
      this.setState({ loading: true });
      const data = await getImages(this.state.query, this.state.page);

      this.setState(prevState => ({
        results: [...prevState.results, ...data.hits],
        totalImages: data.totalHits,
      }));
    } catch {
      alert('Something went wrong');
    } finally {
      this.setState({ loading: false });
    }
  };
  loadMore = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { results, loading, totalImages } = this.state;
    return (
      <>
        <Searchbar getQuery={this.getQuery} />
        <ImageGallery array={results} />
        {results.length < totalImages && <Button onClick={this.loadMore} />}

        {loading && <Loader />}
      </>
    );
  }
}

export default App;
