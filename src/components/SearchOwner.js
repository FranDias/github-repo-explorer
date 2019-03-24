import React, { Component } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

class SearchOwner extends Component {
  constructor(props) {
    super(props)
    const {onChange} = this.props

    this.onChange = debounce(onChange, 300) 
  }
  static defaultProps = {
    placeholder: "Search an organization's repositories",
    onChange: () => {}
  };

  static propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

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