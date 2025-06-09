import React from 'react';
import style from "styled-components";
import { SearchOutlined } from '@mui/icons-material';

const SearchBarContainer = style.div`
    max-width: 550px;
    display: flex;
    width: 90%;
    border: 1px solid ${({ theme }) => theme.text_secondary + 90};
    color: ${({ theme }) => theme.text_primary};
    border-radius: 8px;
    padding: 12px 6px;
    cursor: pointer;
    gap: 6px;
    align-items: center;
`;

const SearchBar = ({ search, handleChange }) => {
  return (
    <SearchBarContainer>
      <SearchOutlined sx={{ color: "inherit" }} />
      <input
        type="text"
        placeholder="Search with prompt or name. . ."
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          background: "inherit",
          color: "inherit",
        }}
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </SearchBarContainer>
  );
};

export default SearchBar