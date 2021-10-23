import React from "react";
import PropTypes from "prop-types";

function ListOfLinks({ links, onLinkClick }) {
  if (links.length === 0) {
    return (
      <div
        className="alert alert-warning d-flex align-items-center"
        role="alert"
      >
        <svg
          className="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Warning:"
        >
          <use xlinkHref="http://www.w3.org/2000/svg" />
        </svg>
        <div>Sorry we could not find this city.</div>
      </div>
    );
  }

  return (
    <div className="mt-5">
      {links.length > 1 && (
        <span>Looks like there are multiple cities against your entry...</span>
      )}
      <div className="list-group mt-5">
        {links.length !== 0 &&
          links.map((link, index) => {
            return (
              <button
                key={index}
                type="button"
                className="list-group-item list-group-item-action list-group-item-primary"
                style={{ cursor: "pointer" }}
                onClick={() => onLinkClick(link)}
              >
                {link.city}, {link.state}, {link.country}
              </button>
            );
          })}
      </div>
    </div>
  );
}

ListOfLinks.propTypes = {};

export default ListOfLinks;
