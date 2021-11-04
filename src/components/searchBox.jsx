import React from "react";
import PropTypes from "prop-types";

function SearchBox({ value, onChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="row">
      <div className="col-8 mx-auto my-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="textCityName" className="form-label display-6">
              City Name
            </label>
            <input
              className="form-control form-control-lg"
              id="textCityName"
              placeholder="Los Angeles"
              value={value}
              onChange={(e) => onChange(e.currentTarget.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string,
};

export default SearchBox;
