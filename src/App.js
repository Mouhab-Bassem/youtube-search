import React from "react";
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
          <Homepage />
        </YoutubeDataProvider>
      </SearchProvider>
    </>
  );
}

export default App;
