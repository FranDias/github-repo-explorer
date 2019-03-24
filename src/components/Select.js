import React, { Component } from "react";

class App extends Component {

    render (
        <select onChange={this.selectSortCount} name="selectSortOption">
        {sortOptions.map(choice => (
          <option key={choice} value={choice}>
            Sort by {choice}
          </option>
        ))}
      </select>
    )
}

export default Select;