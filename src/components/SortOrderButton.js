import React, { Component } from "react";
import PropTypes from "prop-types";

class SortOrderButton extends Component {
  static propTypes = {
    sortDirection: PropTypes.oneOf([undefined, "asc", "dec"]),
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    sortDirection: undefined
  }

  renderArrowDirection() {
    const { sortDirection } = this.props;
    if (!sortDirection) return "•"

    return this.props.sortDirection === "asc" ? "⬆" : "⬇"
  }

  render() {
    return <button onClick={this.props.onClick}>{this.renderArrowDirection()}</button>;
  }
}
        
export default SortOrderButton;