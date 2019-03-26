import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./../../css/RepoRow.css";

class RepoRow extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
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
      issues_url: PropTypes.string
    })
  };

  renderChosenAttributes() {
    const {
      url,
      name,
      description,
      stargazers_count,
      forks_count,
      open_issues_count,
      open_issues_url
    } = this.props;

    const chonesAttrs = {
      name: { lable: "name", url: url, text: name },
      description: { label: "description", text: description, expands: true },
      stargazers_count: { lable: "⭐", text: stargazers_count },
      forks_count: { label: "forks", text: forks_count },
      open_issues_count: {
        label: "Open issues",
        text: open_issues_count,
        url: open_issues_url
      }
    };
  }

  renderExpandButton() {
    const { expanded } = this.state;
    const className = expanded ? "rotate-90" : "";
    return (
      <button onClick={() => this.setState({ expanded: !expanded })}>
        <span className={`expand-pointer ${className}`}>▶</span>
      </button>
    );
  }

  render() {
    const { repo } = this.props;
    return (
      <span className="repo-row">
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
        {repo.open_issues_count}
      </span>
    );
  }
}

export default RepoRow;
