import React from "react";
import PropTypes from "prop-types";
import WeatherData from "./weatherData";
import PollutionData from "./pollutionData";

function AirData({ apiData, city, state, country }) {
  const { weather, pollution } = apiData;
  return (
    <div className="card border-0">
      <div className="card-body py-3">
        <h4 className="card-title display-6">{city}</h4>
        <h5 className="card-title mb-5 fw-light fs-2">
          {state}, {country}
        </h5>
        <div className="row">
          {pollution.ts && (
            <div className="col-md-6 mb-3">
              <PollutionData {...pollution} />
            </div>
          )}
          {weather.ts && (
            <div className="col-md-6 mb-3">
              <WeatherData {...weather} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

AirData.propTypes = {};

export default AirData;
