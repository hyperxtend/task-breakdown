import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import MediaTypeDropDown from '../media-drop-down/component';
import SearchButton from '../search-button/component';

const StyledInputGroup = styled(InputGroup)`
  width: initial;
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mediaType, setMediaType] = useState('');
  return (
    <StyledInputGroup>
      <MediaTypeDropDown setMediaType={setMediaType} />
      <FormControl
        placeholder="Search..."
        value={searchTerm}
        onChange={(element) => setSearchTerm(element.target.value)}
      />
      <SearchButton searchTerm={searchTerm} mediaType={mediaType} />
    </StyledInputGroup>
  );
};

export default SearchBar;
