import React from "react";
import PropTypes from "prop-types";

const arrowDirectionContent = sortDirection => {
  if (!sortDirection) return "•";
  return sortDirection === "asc" ? "⬆" : "⬇";
};

const SortOrderButton = ({ sortDirection, onClick }) => (
  <button onClick={onClick}>{arrowDirectionContent(sortDirection)}</button>
);

SortOrderButton.ropTypes = {
  sortDirection: PropTypes.oneOf([undefined, "asc", "dec"]),
  onClick: PropTypes.func.isRequired
};

SortOrderButton.defaultProps = {
  sortDirection: undefined
};

export default SortOrderButton;
