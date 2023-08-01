import React from "react";

export default function ListItem({ url, title, channelTitle }) {
  return (
    <>
      <div>
        <img src={url} alt={`thumbnail of ${title}`} />
      </div>
      <div>
        <div>
          <h2>{title}</h2>
          <p>{channelTitle}</p>
        </div>
      </div>
    </>
  );
}
