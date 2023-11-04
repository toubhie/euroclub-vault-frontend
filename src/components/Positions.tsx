import React from 'react';
import classNames from 'classnames';

type PositionsProps = {
  positions? : any,
  activePositionId? : any,
  dispatch? : any
};

export default function Positions({ positions, activePositionId, dispatch }: PositionsProps) {

  console.log('positions',  positions )
  return (
    <div className="categories">
      <h3>All Positions</h3>
      <div>
        {positions?.map(position => (
          <div
            className={classNames({
              category: true,
              activeCategory: position.id == activePositionId,
            })}
            key={position.id}
            onClick={() => {
              dispatch({ type: 'SELECT_CATEGORY', position });
            }}
          >
            {position.name}
          </div>
        ))}
      </div>
    </div>
  );
}