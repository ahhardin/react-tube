import React from "react"

const VideoListItem = (props) => {
  return (
    <li onClick={ event =>
      props.changeCurrentVideo(props.video)} className="list-group-item"><div className="row"><div className="col-md-6"><img className="img-fluid" src={props.thumbnailUrl}/></div><div className="d-flex align-items-center col-md-6"> {props.title}</div></div></li>
  )
}

export default VideoListItem;
