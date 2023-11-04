import React from 'react';

type PlayerCardProps = {
  dispatch?: any,
  player?: any
  id?: string,
  setModalOpen?: any
}

const PlayerCard = ({ dispatch, player, id, setModalOpen }: PlayerCardProps) => {
  const {name, price, images} = player;

  return (
    <button
      className="product-card"
      onClick={() => {
        dispatch({type: 'SET_ACTIVE_PRODUCT_ID', id});
      }}
    >
      <img className="product-card-image" src={images.medium} alt={name} />
      <p className="product-name">{name}</p>
      <p className="product-price">${price.toFixed(2)}</p>
    </button>
  );
};

export default function Players({ players, dispatch, categoryName }) {
  return (
    <div className="product-grid">
      <h2>{categoryName}</h2>
      {players.length > 0 ? (
        <div className="player-list">
          {players.map(player => (
            <PlayerCard
              key={player.id}
              player={player}
              id={player.id}
              dispatch={dispatch}
            />
          ))}
        </div>
      ) : (
        <h2>No items found...</h2>
      )}
    </div>
  );
}