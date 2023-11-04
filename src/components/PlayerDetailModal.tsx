import React from 'react';

export default function PlayerDetailModal({ player, dispatch }) {
  const {name, price, images, description} = player;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          className="modal-content-close"
          onClick={() => dispatch({type: 'CLOSE_MODAL_RESET_ACTIVE_PRODUCT'})}
        >
          &times;
        </button>
        <div className="modal-content">
          <div className="modal-content-image">
            <img src={images.large} alt={name} />
          </div>
          <div className="modal-content-description">
            <h2 className="modal-content-title">{name}</h2>
            <h2 className="modal-content-price">${price.toFixed(2)}</h2>
            <p className="modal-content-product-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}