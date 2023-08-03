import React from "react";

export default function VideoCard({ video }) {
  return <div key={video.id}>{video.snippet.title}</div>;
}
