import axios from "axios";

export default class Youtube {
  // axios 인스턴스 생성create
  // 기본적인 url과 사용하는 키 설정
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        // gitignore에 .env도 추가할 것
      },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    // axios대신 사용
    // 위의 constructor로 만든 인스턴스를 통해 이미 내부에 axios와 base url이 있음
    // youtube api에서 search?이후 params들 설정
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
          //   regionCode: "KR",
        },
      })
      .then((res) => res.data.items);
  }
}
