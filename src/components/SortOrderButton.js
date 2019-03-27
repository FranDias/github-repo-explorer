import React from "react";
import PropTypes from "prop-types";

const arrowDirectionContent = sortDirection => {
  if (!sortDirection) return "•";
  return sortDirection === 1 ? "⬆" : "⬇";
};

const SortOrderButton = ({ sortDirection, onClick }) => (
  <button onClick={onClick}>{arrowDirectionContent(sortDirection)}</button>
);

SortOrderButton.ropTypes = {
  sortDirection: PropTypes.oneOf([undefined, 1, -1]),
  onClick: PropTypes.func.isRequired
};

SortOrderButton.defaultProps = {
  sortDirection: undefined
};

export default SortOrderButton;
