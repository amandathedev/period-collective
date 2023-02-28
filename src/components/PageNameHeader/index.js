import React from 'react';

import PropTypes from 'prop-types';
import './index.scss';

const PageNameHeader = ({ pageName }) => {
  return (
    <div className="page-name">
      <h1>{pageName}</h1>
    </div>
  );
};

PageNameHeader.propTypes = {
  pageName: PropTypes.string
};

export default PageNameHeader;
