import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Select extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  static defaultProps = {
    name: "default",
    onChange: () => {},
    options: ["no options provied"]
  };

  getname() {
    const { name } = this.props;
    return name !== undefined ? name : "";
  }

  render() {
    const { onChange, name, options } = this.props;

    return (
      <select {...{ onChange, name }}>
        {options.map(choice => (
          <option key={choice} value={choice}>
            Sort by {choice}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
