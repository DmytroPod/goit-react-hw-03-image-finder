import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { smallImg, largeImg } = this.props;
    const { isModalOpen } = this.state;
    return (
      <li className={css.item}>
        <img
          className={css.img}
          src={smallImg}
          alt=""
          onClick={this.openModal}
        />
        {isModalOpen && <Modal largeImg={largeImg} onClose={this.closeModal} />}
      </li>
    );
  }
}
export default ImageGalleryItem;
