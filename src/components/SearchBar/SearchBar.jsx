import React from "react";
import { Input } from "antd";
import './SearchBar.scss';

const { Search } = Input;

export default function SearchBar() {
  return (
    <div>
      <Search
        placeholder="search for recipes"
        onSearch={value => this.props.search(value)}
        enterButton
        className="SearchBar-Wrapper"
      />
    </div>
  );
}
