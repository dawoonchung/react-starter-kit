import React from 'react';
import PropTypes from 'prop-types';

import GridSystem from '../utilities/GridSystem';

const gridSystem = process.env.NODE_ENV === 'development' ?
  <GridSystem /> : '';

const MainTemplate = ({children}) => (
  <div className="app-wrapper">
    <div className="container">
      {children}
    </div>

    {gridSystem}
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
