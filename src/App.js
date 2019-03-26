import React, { Component } from "react";
import Select from "./components/Select";
import SearchOwner from "./components/SearchOwner";
import SortOrderButton from "./components/SortOrderButton";
import LayoutBase from "./components/LayoutBase";
import RepoTable from "./components/RepoDisplay/RepoTable";
import "./App.css";

const apiBase = "https://api.github.com";
const ownerChoices = ["orgs", "users"];
const sortOptions = ["stargazers_count", "forks_count", "open_issues_count"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      owner: "hubSpot",
      ownerChoices: ownerChoices[0],
      sortBy: sortOptions[0],
      direction: 1,
      commits: [],
      commitName: "",
      repoError: undefined
    };

    this.selectOnChange = this.selectOnChange.bind(this);
    this.selectSortCount = this.selectSortCount.bind(this);
    this.reverseSort = this.reverseSort.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  newFetch() {
    const { ownerChoices, owner } = this.state;

    if (owner.length < 2) {
      this.setState({ repos: [], repoError: true });
      return null;
    }

    fetch(`${apiBase}/${ownerChoices}/${owner}/repos`)
      .then(data => data.json())
      .then(json => this.setState({ repos: json, repoError: false }))
      .catch(() => {
        this.setState({ repoError: true });
      });
  }

  componentWillMount() {
    this.newFetch();
  }

  handleInputChange(e) {
    this.setState({ owner: e });
    this.newFetch();
  }

  selectOnChange(e) {
    this.setState({
      ownerChoices: ownerChoices[e.nativeEvent.srcElement.selectedIndex]
    });
    this.newFetch();
  }

  selectSortCount(e) {
    this.setState({
      sortBy: sortOptions[e.nativeEvent.srcElement.selectedIndex]
    });
  }

  reverseSort() {
    this.setState({ direction: this.state.direction * -1 });
  }

  renderSearchControls() {
    return (
      <React.Fragment>
        <SearchOwner onChange={this.handleInputChange} />
        <Select
          onChange={this.selectOnChange}
          name="ownerType"
          options={ownerChoices}
        />
        <Select
          onChange={this.selectSortCount}
          name="selectSortOption"
          options={sortOptions}
        />
        <SortOrderButton onClick={this.reverseSort} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <LayoutBase
        header={
          <RepoTable
            sortDirection={this.reverseSort()}
            commits={this.state.commits}
          />
        }
      >
        {this.renderReposList()}
      </LayoutBase>
    );
  }
}

export default App;
