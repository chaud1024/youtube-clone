import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/Video/VideoCard";

export default function Video() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return axios
      .get(`/videos/${keyword ? "search" : "most-popular"}.json`)
      .then((res) => res.data.items);
  });
  return (
    <div>
      {keyword ? `search: ${keyword}` : "🔥"}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong: {error}</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
