import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./app/pages/Homepage/index";
import Header from "./app/shell/Header/index";
import { SearchProvider } from "./context/searchContext";
import { YoutubeDataProvider } from "./context/youtubeData";

function App() {
  return (
    <>
      <SearchProvider>
        <YoutubeDataProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </YoutubeDataProvider>
      </SearchProvider>
    </>
  );
}

export default App;
