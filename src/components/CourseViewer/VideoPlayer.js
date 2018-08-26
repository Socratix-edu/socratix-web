import React from 'react';

const VideoPlayer = props => {
  return (
    <div className="embed-responsive embed-responsive-21by9">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ScMzIvxBSi4"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
