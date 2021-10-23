import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import ShowIpData from "./ipBasedData";
import ShowSearchedData from "./searchBasedData";

function Main() {
  const [searchByCity, setSearchByCity] = useState(false);

  useEffect(() => {}, [searchByCity]);

  const handleSearchByCityClick = () => {
    setSearchByCity(true);
  };

  const handleSearchByIpClick = (value) => {
    setSearchByCity(value);
  };

  return (
    <main className="flex-shrink-0">
      <div className="container-fluid">
        <Header />
        {!searchByCity && (
          <>
            <ShowIpData />
            <div className="row pb-5 my-5">
              <div className="col">
                <button
                  className="btn btn-lg btn-secondary"
                  onClick={handleSearchByCityClick}
                >
                  Search by city name?
                </button>
              </div>
            </div>
          </>
        )}
        {searchByCity && (
          <ShowSearchedData onGoBackClick={handleSearchByIpClick} />
        )}
      </div>
    </main>
  );
}

Main.propTypes = {};

export default Main;
