import React from 'react';
import { Button } from 'react-bootstrap';
import { handleOnSearch } from './controller';

const SearchButton = ({ searchTerm, mediaType }) => {
  const [Results, setResults] = React.useState([]);
  return (
    <Button
      onClick={() => handleOnSearch(searchTerm, mediaType, setResults)}
      variant="outline-dark"
    >
      Search
    </Button>
  );
};

export default SearchButton;
