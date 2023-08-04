import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/Nav/SearchHeader";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="w-full max-w-screen-2xl flex justify-center flex-col items-center m-auto">
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}
