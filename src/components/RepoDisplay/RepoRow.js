import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import RepoCell from "./RepoCell";
import CommitsGetter from "../commits/CommitsGetter";
import "./../../css/RepoRow.css";

class RepoRow extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      asked: false
    };
  }

  static propTypes = {
    repo: PropTypes.shape({
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
      issues_url: PropTypes.string,
      commits_url: PropTypes.string
    })
  };

  renderChosenAttributes() {
    // Test runner doesn't make the request
    if (!this.props.repo) {
      return undefined;
    }

    const {
      html_url,
      name,
      description,
      stargazers_count,
      forks_count,
      open_issues_count,
      open_issues_url
    } = this.props.repo;

    const chosenAttributes = {
      name: { label: "Name", url: html_url, text: name },
      description: { label: "Description", text: description, expands: true },
      stargazers_count: { label: "Stars", text: stargazers_count },
      forks_count: { label: "Forks", text: forks_count },
      open_issues_count: {
        label: "Issues",
        text: open_issues_count,
        url: open_issues_url
      }
    };

    return Object.values(chosenAttributes).map(
      ({ label, url, text, expands }) => (
        <RepoCell {...{ key: label, label, url, text, expands }} />
      )
    );
  }

  renderExpandButton() {
    const { expanded } = this.state;
    const className = expanded ? "rotate-90" : "";

    return (
      <button
        onClick={() => this.setState({ expanded: !expanded, asked: true })}
      >
        <div className={className}>▶</div>
      </button>
    );
  }

  render() {
    if (!this.props.repo) return null;
    const { commits_url } = this.props.repo;
    const { expanded, asked } = this.state;
    return (
      <div>
        <span className="repo-row">
          {this.renderChosenAttributes()}
          {this.renderExpandButton()}
        </span>
        <div className={expanded ? "" : "repo-row-commit-holder"}>
          {commits_url && asked && <CommitsGetter commits_url={commits_url} />}
        </div>
      </div>
    );
  }
}

export default RepoRow;
