import React from "react";
import { pollutionIconUrl } from "../config.json";
import PropTypes from "prop-types";

function PollutionData({ ts, aqius, mainus, aqicn, maincn }) {
  const units = {
    p2: "ugm3", //pm2.5
    p1: "ugm3", //pm10
    o3: "ppb", //Ozone O3
    n2: "ppb", //Nitrogen dioxide NO2
    s2: "ppb", //Sulfur dioxide SO2
    co: "ppm", //Carbon monoxide CO
  };

  let heading = "";
  let style = {};
  let iconUrl = "";

  if (aqius > 0 && aqius <= 50) {
    heading = "Good";
    style = { backgroundColor: "#D6F1C6" };
    iconUrl = `${pollutionIconUrl}/ic-face-green.svg`;
  } else if (aqius > 50 && aqius <= 100) {
    heading = "Moderate";
    style = { backgroundColor: "#FFFDC3" };
    iconUrl = `${pollutionIconUrl}/ic-face-yellow.svg`;
  } else if (aqius > 100 && aqius <= 150) {
    heading = "Unhealthy for sensitive groups";
    style = { backgroundColor: "#FFDA83" };
    iconUrl = `${pollutionIconUrl}/ic-face-orange.svg`;
  } else if (aqius > 150 && aqius <= 200) {
    heading = "Unhealthy";
    style = { backgroundColor: "#FFA318" };
    iconUrl = `${pollutionIconUrl}/ic-face-red.svg`;
  } else if (aqius > 200 && aqius <= 300) {
    heading = "Very Unhealthy";
    style = { backgroundColor: "#FF1F24" };
    iconUrl = `${pollutionIconUrl}/ic-face-purple.svg`;
  } else if (aqius > 300 && aqius <= 500) {
    heading = "Hazardous";
    style = { backgroundColor: "#801738" };
    iconUrl = `${pollutionIconUrl}/ic-face-maroon.svg`;
  }

  return (
    <>
      <div className="rounded shadow bg-white rounded pb-3">
        <div
          className="d-flex align-items-center justify-content-center py-3 mb-3"
          style={style}
        >
          <img
            src={iconUrl}
            className="border-0 mx-2 img-fluid"
            width="100"
            height="100"
            alt="..."
          ></img>
          <p className="fs-3 text-secondary fw-light text-wrap">{heading}</p>
        </div>
        <div className="mt-2 text-muted">
          <h1 className="h6 mb-0 mt-2">AQI US</h1>
          <small>{aqius}</small>
        </div>
        <div className="mt-2 text-muted">
          <h1 className="h6 mb-0 mt-2">AQI China</h1>
          <small>{aqicn}</small>
        </div>
        <div className="mt-2 text-muted">
          <h1 className="h6 mb-0 mt-2">Main pollutant for US AQI</h1>
          <small>
            {mainus} {units[mainus]}
          </small>
        </div>
        <div className="mt-2 text-muted">
          <h1 className="h6 mb-0 mt-2">Main pollutant for Chinese AQI</h1>
          <small>
            {maincn} {units[maincn]}
          </small>
        </div>
      </div>
    </>
  );
}

PollutionData.propTypes = {};

export default PollutionData;
