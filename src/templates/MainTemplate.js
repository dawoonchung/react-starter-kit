import React from 'react';
import PropTypes from 'prop-types';

const MainTemplate = ({children}) => (
  <div className="app-wrapper">
    {children}
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
