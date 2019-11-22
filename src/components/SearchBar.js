import React, { useState } from "react";
import { getData } from "../actions/index";
import { connect } from "react-redux";

function SearchBar({ getData }) {
  const [query, setQuery] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    getData(query);
  };

  const onChange = e => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <form className="form-inline" onSubmit={e => onSubmit(e)}>
        <input
          data-toggle="tooltip"
          data-placement="top"
          className="form-control mr-sm-2"
          type="search"
          title="input the name of a potential mentor"
          placeholder="Search"
          aria-label="Search"
          onChange={e => onChange(e)}
        />
        <input
          className="btn btn-outline-primary my-2 my-sm-0"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
}

export default connect(null, { getData })(SearchBar);
