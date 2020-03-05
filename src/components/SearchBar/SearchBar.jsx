import React from "react";
import { Input } from "antd";
import './SearchBar.scss';

const { Search } = Input;

export default function SearchBar(props) {
  return (
    <div>
      <Search
        placeholder="search for recipes"
        onSearch={value => props.search(value)}
        enterButton
        className="SearchBar"
      />
    </div>
  );
}
