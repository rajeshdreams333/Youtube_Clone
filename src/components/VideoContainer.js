import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/constant";

const VideoContainer = () => {
  useEffect(() => {
    getvideos();
  }, []);
  const getvideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    // console.log(data);
  };
  return <div>VideoContainer</div>;
};

export default VideoContainer;
