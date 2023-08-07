import { createContext, useContext } from "react";
import FakeYoutubeClient from "../api/fakeYoutubeClient";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();

// const client = new YoutubeClient();
const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {/* YoutubeApiContext.Provider가 제공하는 value는 Youtube인스턴스를 구조분해할당한 것 */}
      {children}
    </YoutubeApiContext.Provider>
  );
}

// 사용하는곳에서 Provider안에 있는 그 어떤 children 컴포넌트에서도
// useYoutubeApi함수를 사용하면 value={youtube}에 접근할 수 있도록 만들어준다
// 위의 클래스를 통해 만든 인스턴스를 자식 컴포넌트에서 손쉽게 사용할 수 있도록
// useYoutubeApi를 만듦
export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}

// App.js에 Contenxt Provider 우산을 씌워주고,
// 사용하는 곳(여기서는 Videos.jsx)에
// const {youtube} = useYoutubeApi();
// useYoutubeApi()함수를 통해 컨텍스트에 있는 value={youtube}를 가져와서
// useQuery(["videos", keyword], () => youtube.search(keyword));
// youtube.search()를 가져온다
// search에 필요한 keyword 전달: youtube.search(keyword)
