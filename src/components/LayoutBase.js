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
  header: PropTypes.oneOf([PropTypes.node, PropTypes.func]),
  children: PropTypes.oneOf([PropTypes.node, PropTypes.func])
};

export default LayoutBase;
