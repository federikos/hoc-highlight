import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import Article from './Article';

const List = ({list}) => {
  return list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <Video {...item} />
        );

      case 'article':
        return (
          <Article {...item} />
        );
    }
  });
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['video', 'article']),
      url: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
    })
  )
};

export default List;