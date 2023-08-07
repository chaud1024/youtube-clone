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
    <section className="w-full">
      <article className="w-full">
        <div className="w-full lg:w-3/5 aspect-[16/9]">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <h2>{title}</h2>
        <ChannelInfo id={channelId} name={channelTitle} />
        <pre>{description}</pre>
      </article>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
