import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";
import Video from "./Video";
export default function YoutubeVideos() {
  const [youTube, setYouTube] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=12`
    )
      .then((items) => items.json())
      .then((data) => {
        const youTubeData = data.items;
        setYouTube(youTubeData);
      });
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper bold">Latest videos</div>
          </div>
          {youTube?.map((singleVideo, i) => {
            const {
              id: { videoId },
              snippet: {
                title,
                description,
                thumbnails: {
                  high: { url },
                },
              },
            } = singleVideo;

            // // let vidLink = `https://www.youtube.com/watch?v=${videoId}`;

            let videoWrapper = (
              <Video
                key={videoId}
                href={videoId}
                url={url}
                title={title}
                description={description}
              />
            );
            return videoWrapper;
          
          })}
        </div>
      </div>
    </div>
  );
}
