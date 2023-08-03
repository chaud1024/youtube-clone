import axios from "axios";

export async function search(keyword) {
  return axios
    .get(`/videos/${keyword ? "search" : "most-popular"}.json`)
    .then((res) => res.data.items);
}
