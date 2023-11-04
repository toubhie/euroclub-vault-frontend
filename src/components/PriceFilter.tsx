import React, {useState} from 'react';

export default function PriceFilter({setPrices}) {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  let handleSubmit = event => {
    event.preventDefault();
    setPrices({min: minValue, max: maxValue});
  };

  return (
    <div>
      <h3>Filter By Player Value</h3>
      <form className="price-filter" onSubmit={handleSubmit}>
        <input
          placeholder="£ Min"
          value={minValue || ''}
          onChange={event => {
            setMinValue(event.target.value);
          }}
        />
        <input
          placeholder="£ Max"
          value={maxValue || ''}
          onChange={event => {
            setMaxValue(event.target.value);
          }}
        />
        <button className="button-submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
}