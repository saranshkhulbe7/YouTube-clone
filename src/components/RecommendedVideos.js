import React from "react";
import "../styles/RecommendedVideos.css";
import VideoCard from "./VideoCard.js";
import { videoCardData } from "../Data/VideoCardData.js";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {videoCardData.map((video) => (
          <VideoCard
            title={video.title}
            views={video.views}
            timestamp={video.timestamp}
            channelImage={video.channelImage}
            channel={video.channel}
            image={video.image}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
