import React from "react";

export default function Video(props) {
  const { title, description, url, videoId } = props;

  return (
    <div key={videoId} className="col-sm-12 col-md-6 col-lg-4">
      <div className="singleVideoWrapper">
        <div className="videoThumbnail">
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={url} alt="/" />
          </a>
        </div>
        <div className="videoInfoWrapper">
          <div className="videoTitle">
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>
          </div>
          <div className="videoDesc">{description}</div>
        </div>
      </div>
    </div>
  );
}
