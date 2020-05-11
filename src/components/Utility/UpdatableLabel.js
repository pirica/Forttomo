import React from 'react';
import PropTypes from 'prop-types';

import { useTransition, animated } from 'react-spring';

const UpdatableLabel = ({ children, className }) => {
  const transitions = useTransition(children, null, {
    from: { backgroundColor: '#ff652f' },
    enter: { backgroundColor: 'rgba(0,0,0,0)' },
    leave: { opacity: 0 },
  });

  return transitions.map(({ item, key, props }) => (
    <animated.div key={key} style={props} className={className}>
      {item}
    </animated.div>
  ));
};

UpdatableLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default UpdatableLabel;
