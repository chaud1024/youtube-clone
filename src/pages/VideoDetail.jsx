import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();
  return (
    <div>
      VideoDetail - videoId : {videoId}
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
  );
}
