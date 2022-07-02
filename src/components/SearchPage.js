import React from "react";
import "../styles/SearchPage.css";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { videoRowData } from "../Data/VideoRowData";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/-syoRcPPGt3NE3TzbKJsefa5Rej4w_lSof-aXSm1Q9cDx5Gyn-Cuus8UKjKBtILs_Bqwgc_i0A=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Ed Sheeran"
        verified
        subs="52M"
        noOfVideos={250}
        description='The new album "=" is out now - listen here:'
      />
      <hr />
      {videoRowData.map((video) => (
        <VideoRow
          views={video.views}
          subs={video.subs}
          description={video.description}
          timestamp={video.timestamp}
          channel={video.channel}
          channelImage={video.channelImage}
          title={video.title}
          image={video.image}
        />
      ))}
    </div>
  );
}

export default SearchPage;
