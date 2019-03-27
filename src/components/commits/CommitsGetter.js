import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./../../css/Commits.css";

class CommitsGetter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      commits: [],
      lastRequest: undefined
    };

    this.fetchCommits = this.fetchCommits.bind(this);
  }

  static propTypes = {
    commits_url: PropTypes.string.isRequired
  };

  componentWillMount() {
    this.fetchCommits(this.props.commits_url);
  }

  fixCommits_url(URL) {
    return URL.split("{")[0];
  }

  shouldFetchNewCommits() {
    const { lastRequest, commits } = this.state;
    if (
      !lastRequest ||
      commits.length < 1 ||
      Date.now() - lastRequest > 60 * 1000 // Which is just different debounce…
    )
      return true;
    return false;
  }

  fetchCommits(commits_url) {
    commits_url = this.fixCommits_url(commits_url);
    if (!this.shouldFetchNewCommits()) {
      return null;
    }

    fetch(commits_url)
      .then(data => data.json())
      .then(json => this.setState({ commits: json, lastRequest: Date.now() }));
  }

  render() {
    const { commits } = this.state;
    if (commits.length < 1) return <span>loading</span>;
    return (
      <div className="commits">
        {/* this would have the same pattern as RepoTable & RepoRow but I'm running up against the clock */}
        {commits &&
          commits.map(({ sha, author, commit, html_url }) => {
            if (!author) {
              return null;
            }
            const { avatar_url, login } = author;
            return (
              <div key={sha} className="display-flex flex-direction-row commit">
                <img
                  className="commit-author"
                  src={avatar_url}
                  alt="commit author"
                />
                <div className="display-flex flex-direction-column">
                  <a href={author.html_url}>{login}</a>
                  <span>{commit.message}</span>
                  <a href={html_url}>Go</a>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
export default CommitsGetter;
