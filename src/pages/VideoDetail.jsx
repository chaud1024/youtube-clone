import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/Channel/ChannelInfo";
import RelatedVideos from "../components/Video/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  console.log("video", video);

  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <div className="w-full aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"></iframe>
        </div>
        <div className="p-4 box-border">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6 ml-4">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
