import React from "react";

export default function Avatar({ url, channelId }) {
  return (
    <div>
      <img src={url} alt={`Profile of ${channelId}`} />
    </div>
  );
}
