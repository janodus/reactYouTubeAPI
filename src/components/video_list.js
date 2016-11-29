import React from 'react';
import VideoListItem from './video_list_items';

const VideoList = (props) => {

  const videoItems = props.vids.map( (video) => {
    return <VideoListItem key={ video.etag } video={ video }/>
  });

  return (

    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>

  );
}

export default VideoList;
