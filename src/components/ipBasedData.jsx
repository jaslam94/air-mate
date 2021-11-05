import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import httpService from "../services/httpService";
import AirData from "./airData";
import { apiUrlIp } from "../config.json";

function ShowIpData() {
  const [apiData, setApiData] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(true);

  const dataRef = useRef();

  const localData = JSON.parse(localStorage.getItem("airData"));

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading === true) {
        if (localData && !isLocalDataExpired()) {
          updateStates(localData.data, "", false);
        } else {
          getDataFromApi();
        }
      }
    }, 500);

    if (dataRef && dataRef.current) {
      dataRef.current.scrollIntoView({
        alignToTop: true,
      });
    }

    return () => clearTimeout(timeout);
  }, [loading]);

  function updateStates(data, error, loadingFlag) {
    setApiData(data);
    setApiError(error);
    setLoading(loadingFlag);
  }

  function getDataFromApi() {
    httpService
      .get(apiUrlIp + `?key=${process.env.REACT_APP_IQ_AIR_API_KEY}`)
      .then((response) => {
        const { data } = response.data;
        storeResultsLocally(data);
        updateStates(data, "", false);
      })
      .catch((error) => {
        const status = error.response?.status;
        updateStates({}, status, false);
      });
  }

  function storeResultsLocally(data) {
    var currentDateTime = new Date();
    currentDateTime.setMinutes(currentDateTime.getMinutes() + 10);

    localStorage.setItem(
      "airData",
      JSON.stringify({
        data: data,
        expDateTime: currentDateTime.toLocaleString(),
      })
    );
  }

  function isLocalDataExpired() {
    var currentDateTime = new Date();
    const expDateTime = new Date(localData.expDateTime);
    if (currentDateTime > expDateTime) {
      return true;
    }
    return false;
  }

  if (loading === true) {
    return (
      <>
        <div className="row justify-content-center py-5">
          <div className="col-md-10">
            <p className="mb-3 fw-light fs-2">
              Fetching data based on your ip address...
            </p>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="row justify-content-center py-5">
        <div className="col-md-8">
          {apiError === "" ? (
            apiData.current && (
              <div ref={dataRef}>
                <AirData
                  apiData={apiData.current}
                  city={apiData.city}
                  state={apiData.state}
                  country={apiData.country}
                />
              </div>
            )
          ) : (
            <div className="alert alert-warning mt-5" role="alert">
              <strong> No data is found against your ip.</strong>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

ShowIpData.propTypes = {};

export default ShowIpData;
