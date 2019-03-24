import React, { Component } from "react";
import debounce from "lodash/debounce";
import "./App.css";

const apiBase = "https://api.github.com";
const ownerChoices = ["orgs", "users"];
const sortOptions = ["stargazers_count", "forks_count", "open_issues_count"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      user: "netflix",
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
    this.fetchCommits = this.fetchCommits.bind(this);
    this.handleInputChange = debounce(this.handleInputChange.bind(this), 300);
  }

  newFetch(url) {
    fetch(`${apiBase}/${this.state.ownerChoices}/${this.state.user}/repos`)
      .then(data => data.json())
      .then(json => this.setState({ repos: json, repoError: false }))
      .catch(() => {
        this.setState({ repoError: true});
      });
  }

  componentWillMount() {
    this.newFetch();
  }

  componentWillUnmount() {
    this.handleInputChange.cancel();
  }

  handleInputChange(e) {
    this.setState({ user: e });
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

  fetchCommits(commitURL, repoName) {
    fetch(commitURL)
      .then(data => data.json())
      .then(json => this.setState({ commits: json, commitName: repoName }));
  }

  renderRepoAttributes(repo) {
    const { commits, commitName, repoError } = this.state;
    if (repoError) {
      return <span>…looks like we ran into a problem</span>;
    }
    return (
      <span>
        <span>{repo.name}</span>,
        <span role="img" aria-labelledby="star">
          ⭐
        </span>
        {repo.stargazers_count},
        <span role="img" aria-labelledby="fork">
          🍴
        </span>
        {repo.forks_count},
        <span role="img" aria-labelledby="alarm">
          🚨
        </span>
        {repo.open_issues_count},
        <button
          onClick={() =>
            this.fetchCommits(repo.commits_url.split("{")[0], repo.name)
          }
        >
          <span role="img" aria-labelledby="commit">
            💍
          </span>
          commits
        </button>
        {repo.name === commitName &&
          commits.map(commit => <div>{commit.commit.author.name}</div>)}
        }
      </span>
    );
  }

  render() {
    const { direction, repos, sortBy } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <input
              type="text"
              placeholder="Search an organization's repositories"
              onChange={e => this.handleInputChange(e.nativeEvent.target.value)}
            />

            <select onChange={this.selectOnChange} name="ownerType">
              {ownerChoices.map(choice => (
                <option key={choice} value={choice}>
                  {choice}
                </option>
              ))}
            </select>

            <select onChange={this.selectSortCount} name="selectSortOption">
              {sortOptions.map(choice => (
                <option key={choice} value={choice}>
                  Sort by {choice}
                </option>
              ))}
            </select>
            <button onClick={this.reverseSort}>reverse sort</button>
          </div>
          <div>
            {repos.length > 0 &&
              repos
                .sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1) * direction)
                .map(repo => {
                  return (
                    <div key={repo.name} className="repo-list-item">
                      {this.renderRepoAttributes(repo)}
                    </div>
                  );
                })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
