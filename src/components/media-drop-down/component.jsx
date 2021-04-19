import React from 'react';
import { InputGroup } from 'react-bootstrap';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: initial;
  height: calc(1.5em + .75rem + 2px);
  border-radius: 0.5px;
  border 2px solid grey; 
`;

const options = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Music',
    value: 'music',
  },
  {
    label: 'TV Shows',
    value: 'mango',
  },
  {
    label: 'Podcasts',
    value: 'podcasts',
  },
  {
    label: 'E-Books',
    value: 'ebooks',
  },
];

const MediaTypeDropDown = ({ setMediaType }) => {
  return (
    <InputGroup>
      <StyledSelect onChange={(element) => setMediaType(element.target.value)}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </StyledSelect>
    </InputGroup>
  );
};

export default MediaTypeDropDown;
