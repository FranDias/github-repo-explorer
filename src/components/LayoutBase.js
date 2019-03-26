import React from "react";
import PropTypes from "prop-types";

const LayoutBase = ({ header, children }) => {
  return (
    <div>
      {header && <header>{header}</header>}
      {children && <div>{children}</div>}
    </div>
  );
};

LayoutBase.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node
};

export default LayoutBase;
