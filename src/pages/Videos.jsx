import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import FakeYoutube from "../api/fakeYoutube";
import VideoCard from "../components/Video/VideoCard";

export default function Video() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () =>
    // search(keyword) 아래의 클래스 안 쓰고 바로 youtube.js 사용시
    // 비동기 내부 네트워크 구현사항을 별도의 네트워크 담당 모듈로 설정
    {
      const youtube = new FakeYoutube();
      return youtube.search(keyword);
    },
  );
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
