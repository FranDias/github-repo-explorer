import React from "react";
import PropTypes from "prop-types";

const LayoutBase = ({ header, children }) => {
  return (
    <div className="layout-base">
      {header && <header>{header}</header>}
      {children && <div className="body">{children}</div>}
    </div>
  );
};

LayoutBase.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node
};

export default LayoutBase;
