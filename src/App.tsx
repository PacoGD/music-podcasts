import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Podcast from "./views/Podcast/Podcast";
import Episode from "./views/EpisodeView/EpisodeView";
import { Header } from "./components/Header";
import { LayoutContainer } from "./components/LayoutContainer";

function App() {
  return (
    <BrowserRouter>
      <LayoutContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast/:podcastId" element={<Podcast />} />
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            element={<Episode />}
          />
        </Routes>
      </LayoutContainer>
    </BrowserRouter>
  );
}

export default App;
