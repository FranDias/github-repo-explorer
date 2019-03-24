import React, { Component } from "react";
import PropTypes from "prop-types";

class SortOrderButton extends Component {
  static propTypes = {
    // sortDirection: PropTypes.oneOf(["asc", "dec"]),
    sortFunc: PropTypes.func.isRequired
  };

  // static defaultProps = {
  //   sortDirection: "asc"
  // };

  render() {
    return <button onClick={this.props.onClick}>↕ </button>;
  }
}
        
export default SortOrderButton;