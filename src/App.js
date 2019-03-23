import React, { Component } from "react";
import "./App.css";

const apiBase = "https://api.github.com";
const ownerChoices = ["users", "orgs"];
const sortOptions = ["stargazers_count", "forks_count", "open_issues_count"];
// const typeOptions = ["all", "public", "private", "forks", "sources", "member"]; //default al
// const sortOptions = ["created", "updated", "pushed", "full_name"]; // default created
// const direction = ["asc", "dec"]; // default full_name asc, otherwise desc

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      user: "netflix",
      ownerChoices: ownerChoices[1],
      sortBy: sortOptions[0],
      direction: 1,
      commits: [],
      commitName: ""
    };

    this.onChange = this.onChange.bind(this);
    this.selectOnChange = this.selectOnChange.bind(this);
    this.selectSortCount = this.selectSortCount.bind(this);
    this.reverseSort = this.reverseSort.bind(this);
    this.fetchCommits = this.fetchCommits.bind(this);
  }

  newFetch(url) {
    fetch(`${apiBase}/${this.state.ownerChoices}/${this.state.user}/repos`)
      .then(data => data.json())
      .then(json => this.setState({ repos: json }))
      .catch(error => {
        if (error) throw error;
      });
  }

  // to set up on click
  // get repo's commits
  // https://api.github.com/repos/netflix/astyanax/commits

  // get repo's contributors
  // https://api.github.com/repos/Netflix/astyanax/contributors

  componentWillMount() {
    this.newFetch(`frandias`);
  }

  componentDidUpdate() {
    console.log(this.state.commits);
  }

  onChange(e) {
    this.setState({ user: e.nativeEvent.target.value });
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

  render() {
    const { commits, direction, repos, sortBy, commitName } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <input type="text" onChange={this.onChange} />

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
                  {choice}
                </option>
              ))}
            </select>
            <button onClick={this.reverseSort}>reverse sort</button>
          </div>

          {repos.length > 0 &&
            repos
              .sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1) * direction)
              .map(repo => {
                return (
                  <span key={repo.name}>
                    {repo.name},
                    <span role="img" aria-labelledby="star">
                      ⭐
                    </span>{" "}
                    {repo.stargazers_count},
                    <span role="img" aria-labelledby="fork">
                      🍴
                    </span>
                    {repo.forks_count},
                    <span role="img" aria-labelledby="alarm">
                      🚨
                    </span>{" "}
                    {repo.open_issues_count},
                    <span role="img" aria-labelledby="commit">
                      💍
                    </span>{" "}
                    <button
                      onClick={() =>
                        this.fetchCommits(
                          repo.commits_url.split("{")[0],
                          repo.name
                        )
                      }
                    >
                      commits
                    </button>
                    {repo.name === commitName &&
                      commits.map(commit => <div>{commit.commit.author.name}</div>)}
                  </span>
                );
              })}
        </header>
      </div>
    );
  }
}

export default App;
