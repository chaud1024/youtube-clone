import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Search from "./pages/Search";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Not Found😫</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/videos/:videoId",
        element: <VideoDetail />,
      },
      {
        path: "/search/:keyword",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
