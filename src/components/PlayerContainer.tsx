import React from 'react';
import PriceFilter from './PriceFilter';
import Positions from './Positions';
import Players from './Players';

type PlayerContainerProps = {
  positions?: any;
  players?: any;
  setPrices?: any;
  categoryName?: any;
  activePositionId?: any;
  dispatch?: any;
};

export default function PlayerContainer({
  positions,
  players,
  setPrices,
  categoryName,
  activePositionId,
  dispatch,
}: PlayerContainerProps) {
  return (
    <section className="product-container">
      <div className="sidebar-filters">
        <Positions
          positions={positions}
          dispatch={dispatch}
          activePositionId={activePositionId}
        />

        <PriceFilter setPrices={setPrices} />
      </div>

      <Players
        players={players}
        categoryName={categoryName}
        dispatch={dispatch}
      />
    </section>
  );
}