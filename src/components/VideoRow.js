import React from "react";
import "../styles/VideoRow.css";
import Avatar from "@material-ui/core/Avatar";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channelImage,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          <div className="videoRow__headline__div">
            <div className="videoRow__headline__avatar">
              <Avatar
                className="videoRow__avatar"
                alt={channel}
                src={channelImage}
              />
            </div>
            <div className="videoRow__headline__remaining">
              {channel} •{" "}
              <span className="videoRow__subs">
                <span className="videoRow__subsNumber">{subs}</span> Subscribers
              </span>{" "}
              {views} • {timestamp}
            </div>
          </div>
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
