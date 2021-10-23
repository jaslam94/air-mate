import React from "react";
import PropTypes from "prop-types";

function SearchBox({ value, onChange, onClick }) {
  return (
    <div className="row">
      <div className="col-8 mx-auto my-auto">
        <div className="mb-3">
          <label htmlFor="textCityName" className="form-label display-6">
            City Name
          </label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="textCityName"
            placeholder="Los Angeles"
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </div>
        <button onClick={() => onClick()} className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string,
};

export default SearchBox;
