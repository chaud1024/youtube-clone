import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/videos/related-videos.json")
      : axios.get("/videos/search.json");
  }
  async videos() {
    return axios.get("/videos/most-popular.json");
  }
  async channels() {
    return axios.get("/videos/channel.json");
  }
}
