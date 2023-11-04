import React, {useState} from 'react';

const Search = ({setSearchText}) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchText(inputText);
    setInputText('');
  };

  const handleChange = event => {
    setInputText(event.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <i className="fas fa-search search-icon" />
        <input
          className="search-form"
          placeholder="Search players by name"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default Search;