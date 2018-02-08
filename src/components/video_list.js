import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {

   const createSidebarVideo = () => {
    return props.videos.map( (video, index) => {
      return (
        <VideoListItem key={index} video={video} thumbnailUrl={video.snippet.thumbnails.high.url} title={video.snippet.title} changeCurrentVideo={props.changeCurrentVideo}/>
      )
    })
  }

  return (
    <ul className="col-md-4 list-group mt-5">
    {createSidebarVideo()}
    </ul>
  );
};

export default VideoList;
