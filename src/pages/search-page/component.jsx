import React from 'react';
import SearchBar from '../../components/search-bar';
import { Container } from 'react-bootstrap';

const SearchPage = ({ searchTerm, mediaType }) => {
  return (
    <Container>
      <SearchBar searchTerm={searchTerm} mediaType={mediaType} />
    </Container>
  );
};

export default SearchPage;
