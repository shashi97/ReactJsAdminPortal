// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const ServiceCategoryCard = ({
  statValue,
  statLabel,
  icon,
  backColor
}) => (
  <div className="sm-st clearfix">
    <span className={ `sm-st-icon st-${backColor}` }>
      { icon }
    </span>
    <div className="sm-st-info">
      <span>
        { statValue }
      </span>
      <div>
        { statLabel }
      </div>
    </div>
  </div>
);

ServiceCategoryCard.propTypes = {
  statValue:  PropTypes.string,
  statLabel:  PropTypes.string,
  icon:       PropTypes.node,
  backColor:  PropTypes.oneOf([
    'red',
    'blue',
    'violet',
    'green'
  ])
};

ServiceCategoryCard.defaultProps = {
  statValue:  '0',
  statLabel:  'unknown',
  icon:       (<i className="fa fa-check-square-o"></i>),
  backColor:  'blue'
};

export default ServiceCategoryCard;
