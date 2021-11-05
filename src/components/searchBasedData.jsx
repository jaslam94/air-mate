import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SearchBox from "./searchBox";
import httpService from "../services/httpService";
import ListOfLinks from "./listOfLinks";
import CountryCityState from "countrycitystatejson";
import AirData from "./airData";
import { apiUrlCity } from "../config.json";

function ShowSearchedData({ onGoBackClick }) {
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [links, setLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState({});
  const [apiData, setApiData] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const listRef = useRef();
  const airDataRef = useRef();

  const handleSearchBoxSubmit = () => {
    //reset existing states
    setSelectedLink({});
    setApiData("");
    setApiError("");

    const linksData = getLinks(searchBoxValue);
    setLinks(linksData);
  };

  const handleLinkClick = (link) => {
    setLoading(true);
    setSelectedLink(link);
    setApiData({});

    const timeout = setTimeout(() => {
      getDataFromApi(link);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(() => {
    if (listRef && listRef.current) {
      listRef.current.scrollIntoView({
        alignToTop: true,
      });
    }
    if (airDataRef && airDataRef.current) {
      airDataRef.current.scrollIntoView({
        alignToTop: true,
      });
    }
  }, [links, apiData, apiError, loading]);

  const getLinks = (value) => {
    const links = [];
    const cscs = CountryCityState.getCitiesByName(value);

    cscs.forEach((data) => {
      const linkData = { city: value };
      linkData.state = data.state;
      linkData.country = data.country.name;
      links.push(linkData);
    });

    return links;
  };

  function getDataFromApi(link) {
    httpService
      .get(
        apiUrlCity +
          `?city=${link.city}&state=${link.state}&country=${link.country}&key=${process.env.REACT_APP_IQ_AIR_API_KEY}`
      )
      .then((response) => {
        const { current } = response.data.data;
        setApiData(current);
        setApiError("");
      })
      .catch((error) => {
        const status = error.response?.status;
        setApiError(status);
        setApiData({});
      })
      .then(() => {
        setLoading(false);
      });
  }

  if (loading === true) {
    return (
      <>
        <div className="row py-5">
          <div className="col">
            <p className="mb-3 fw-light fs-2">Fetching data...</p>
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
        <div className="col-md-6">
          <SearchBox
            value={searchBoxValue}
            onChange={setSearchBoxValue}
            onClick={handleSearchBoxSubmit}
          />
          {links.length !== 0 && (
            <div className="row justify-content-center">
              <div className="col-md-10" ref={listRef}>
                <ListOfLinks links={links} onLinkClick={handleLinkClick} />
              </div>
            </div>
          )}
        </div>
        {apiError === "" ? (
          apiData.weather && (
            <div className="col-md-6" ref={airDataRef}>
              <AirData
                apiData={apiData}
                city={selectedLink.city}
                state={selectedLink.state}
                country={selectedLink.country}
              />
            </div>
          )
        ) : (
          <div className="d-inline-flex justify-content-center">
            <div className="alert alert-warning mt-5" role="alert">
              <strong>
                {" "}
                No data is found against the selected location (
                {selectedLink.city}, {selectedLink.state},{" "}
                {selectedLink.country}).
              </strong>
            </div>
          </div>
        )}
      </div>
      <div className="row justify-content-center pb-5">
        <div className="col">
          <button
            className="btn btn-lg btn-secondary"
            onClick={() => onGoBackClick(false)}
          >
            Go back to IP address based result?
          </button>
        </div>
      </div>
    </>
  );
}

ShowSearchedData.propTypes = {};

export default ShowSearchedData;
