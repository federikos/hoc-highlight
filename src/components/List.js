import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import Article from './Article';

const List = ({list}) => {
  return list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <Video key={item.url || item.title + item.views} {...item} />
        );

      case 'article':
        return (
          <Article key={item.url || item.title + item.views} {...item} />
        );
    }
  });
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['video', 'article']),
      url: PropTypes.string,
      title: PropTypes.string,
      views: PropTypes.number.isRequired,
    })
  )
};

export default List;