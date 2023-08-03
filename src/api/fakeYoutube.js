import axios from "axios";

export default class FakeYoutube {
  constructor() {}
  // 생성 시 아무것도 constructor에 전달하지 않아도 됨

  // 클래스 멤버 함수이므로 async다음에 function 작성 안해도 됨
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  // 클래스(this) 안에 있는 멤버함수(프라이빗 함수: #)임을 나타냄
  // #: 클래스 내부에서는 호출이 가능, 클래스 외부에서는 불가능

  async #searchByKeyword() {
    // mock데이터라 어떤 keyword를 사용해도 동일한 결과값을 보여주기때문에
    // #searchByKeyword(keyword) 괄호 내 keyword 삭제해도 됨
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
    // items를 map을 통해 각자 순회하면서, item의 대부분의 정보를 그대로 사용할텐데
    // 그 안의 item의 id가 kind와 videoId로 나뉘어있었는데
    // videoId만을 string으로 덮어씌우도록 만들기
    // search.json과 popular.json의 id 포매팅이 달라서 서로 맞춰주기 위해
  }

  async #mostPopular() {
    return axios.get(`/videos/most-popular.json`).then((res) => res.data.items);
  }
}
