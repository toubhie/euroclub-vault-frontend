import React from 'react';

type PlayerCardProps = {
  dispatch?: any,
  player?: any
  id?: string,
  setModalOpen?: any
}

const PlayerCard = ({ dispatch, player, id, setModalOpen }: PlayerCardProps) => {

  const {fullname, player_value: playerValue, images} = player;

  return (
    // <button
    //   className="product-card"
    //   onClick={() => {
    //     dispatch({type: 'SET_ACTIVE_PLAYER_ID', id});
    //   }}
    // >
    //   <img className="product-card-image" src={'https://picsum.photos/id/237/200/300'} alt={fullname} />
    //   <p className="product-name">{fullname}</p>
    //   <p className="product-price">£{Number(playerValue).toFixed(2)}</p>
    // </button>

    <div className="random-user">
      <div className="user-image">
        <img src={'https://picsum.photos/id/237/200/300'} alt={fullname} />
      </div>
      <div className="user-details">
        <div>
          <strong>Name:</strong> {fullname}
        </div>
        <div>
          <strong>Country:</strong> £{Number(playerValue).toFixed(2)}
        </div>
        <div>
         
        </div>
      </div>
    </div>
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