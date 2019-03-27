import React from "react";
import PropTypes from "prop-types";
import RepoRow from "./RepoRow";

const RepoTable = ({ repoError, repos, sortBy, sortDirection }) =>
  repoError || !repos ? (
    <div>That repo might not exist</div>
  ) : (
    <React.Fragment>
      {repos.length > 0 &&
        repos
          .sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1) * sortDirection)
          .map(repo => {
            return (
              <div key={repo.name} className="repo-list-item">
                {<RepoRow repo={repo} />}
              </div>
            );
          })}
    </React.Fragment>
  );

RepoTable.propTypes = {
  repoError: PropTypes.bool,
  sortDirection: PropTypes.oneOf([undefined, 1, -1]),
  sortBy: PropTypes.oneOf([
    "stargazers_count",
    "forks_count",
    "open_issues_count"
  ]),
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

export default RepoTable;
