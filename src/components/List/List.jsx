import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "../ListItem/ListItem";

export default function List() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`/data/most-popular.json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const videos = data.items;
  console.log("videos", videos);

  return (
    <ul>
      {videos.map((item) => (
        <li key={item.id} onClick={() => navigate(`/videos/${item.id}`)}>
          <ListItem
            href={item.id}
            url={item.snippet.thumbnails.standard.url}
            title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
          />
        </li>
      ))}
    </ul>
  );
}
