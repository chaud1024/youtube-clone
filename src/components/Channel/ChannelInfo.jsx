import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: url,
  } = useQuery(["channel", id], () => youtube.channelImageURL(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="flex gap-2  items-center my-4 mb-8">
      {url && (
        <div>
          <img src={url} alt={name} className="w-10 h-10 rounded-full" />
        </div>
      )}
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
}
