import React from "react";
import ReactPlayer from "react-player";

export default function Thumbnail() {

  return (
    <div className="App">
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=_ztLXq5Urx8"}
        volume={0.00}
        playing={true}
        config={{
            youtube: {
                preload: false,
            },
            vimeo: {
                preload: true
            },
        }}
      />
    </div>
  );
}