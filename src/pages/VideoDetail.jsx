import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`/data/related-videos.json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const related = data.items;
  return (
    <div>
      VideoDetail - videoId : {videoId}
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 aspect-[16/9]">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <ul className="w-2/5">
          {related.map((item, index) => (
            <li
              key={index}
              className="flex"
              onClick={() => navigate(`/videos/${item.id.videoId}`)}>
              <div className="overflow-hidden w-96 h-24 flex justify-center items-center">
                <img
                  src={item.snippet.thumbnails.standard.url}
                  alt={`thumbnail of ${item.snippet.title}`}
                  className="w-full h-auto"
                />
              </div>
              <p>{item.snippet.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
