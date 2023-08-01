import React from "react";
import { useParams } from "react-router-dom";

export default function Search() {
  const { keyword } = useParams();
  return <div>Search videos by: {keyword}</div>;
}
