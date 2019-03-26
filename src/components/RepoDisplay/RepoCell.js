import React from "react";
import PropTypes from "prop-types";
import "./../../css/RepoCell.css";

const RepoCell = ({ label, url, text, expands }) => {
  const renderText = () => {
    if (!text) {
      return null;
    }
    let textContent = text;
    if (url) {
      textContent = <a href={url}>{textContent}</a>;
    }
    return <div>{textContent}</div>;
  };

  const getClassNames = () => {
    const expandClass = expands ? 'flex-grow-1' : '';
    return `repo-cell ${expandClass}`
  }

  return (
    <div className={getClassNames()}>
      <div className="label">{label}</div>
      {renderText()}
    </div>
  );
};

RepoCell.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  expands: PropTypes.bool
};

RepoCell.defaultProps = {
  epxands: false,
  text: "none"
};

export default RepoCell;
