import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const Select = ({ name, onChange, options }) => (
  <select {...{ onChange, name }}>
    {options.map(choice => (
      <option key={choice} value={choice}>
        Sort by {choice}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

Select.defaultProps = {
  name: "default",
  onChange: () => {},
  options: ["no options provied"]
};

export default Select;
