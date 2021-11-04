import React from "react";
import { weatherImageUrl } from "../config.json";
import PropTypes from "prop-types";

function WeatherData({ ts, tp, pr, hu, ws, wd, ic }) {
  const iconUrl = `${weatherImageUrl}/${ic}.png`;
  return (
    <>
      <div className="rounded shadow bg-white rounded pb-3">
        <div className="d-flex align-items-center justify-content-center py-3 mb-3">
          <img
            src={iconUrl}
            className="border-0 mx-2 img-fluid"
            width="100"
            height="100"
            alt="..."
          ></img>
          <span className="display-6">{tp} °C</span>
        </div>
        <div className="mt-2 text-muted">
          <h1 className="h6 mb-0 mt-2">Atmospheric pressure</h1>
          <small>{pr} hPa</small>
        </div>
        <div className="mt-2 text-muted">
          <h1 className="h6 mb-0 mt-2">Humidity</h1>
          <small>{hu} %</small>
        </div>
        <div className="mt-2 text-muted">
          <h1 className="h6 mb-0 mt-2">Wind speed</h1>
          <small>{ws} m/s</small>
        </div>
        <div className="mt-2 text-muted">
          <h1 className="h6 mb-0 mt-2">Wind direction</h1>
          <small>{wd}°</small>
        </div>
      </div>
    </>
  );
}

WeatherData.propTypes = {};

export default WeatherData;
