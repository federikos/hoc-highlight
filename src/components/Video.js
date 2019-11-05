import React from 'react';
import PropTypes from 'prop-types';
import withHighlight from './withHighlight';

const Video = ({url, views}) => {
  return (
    <div className="item item-video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default withHighlight(Video);