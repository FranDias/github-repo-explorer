import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// ****
// will hold state for orgs
//
// ****

class RepoTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commits: []
    };
    this.fetchCommits = this.fetchCommits.bind(this);
  }
  static propTypes = {
    sortDirection: PropTypes.oneOf(["asc", "dec"]),
    repos: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        created_at: PropTypes.string,
        description: PropTypes.string,
        language: PropTypes.string,
        license: PropTypes.object,
        stargazers_count: PropTypes.number,
        stargazers_url: PropTypes.string,
        forks_count: PropTypes.number,
        forks_url: PropTypes.string,
        url: PropTypes.string,
        open_issues_count: PropTypes.number,
        issues_url: PropTypes.string
      })
    )
  };

  static defaultProps = {};

  fetchCommits(commitURL, repoName) {
    fetch(commitURL)
      .then(data => data.json())
      .then(json => this.setState({ commits: json, commitName: repoName }));
  }

  renderRows() {
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
      </span>
    );
  }

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default RepoTable;
