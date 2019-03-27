import React, { Component } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

class SearchOwner extends Component {
  constructor(props) {
    super(props);
    this.onChange = debounce(this.props.onChange, 300);
  }

  static defaultProps = {
    placeholder:
      "Search an organization's repositories, now dispaying HubSpot:",
    onChange: () => {}
  };

  static propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  componentWillUnmount() {
    this.onChange.cancel();
  }

  render() {
    const { placeholder } = this.props;

    return (
      <input
        {...{
          type: "text",
          placeholder,
          onChange: e => this.onChange(e.nativeEvent.target.value)
        }}
      />
    );
  }
}

export default SearchOwner;
