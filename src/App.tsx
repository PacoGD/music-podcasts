import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Podcast from "./views/Podcast/Podcast";
import Episode from "./views/EpisodeView/EpisodeView";
import { Header } from "./components/Header";
import { LayoutContainer } from "./components/LayoutContainer";
import { Provider } from "react-redux";
import { store } from "./state";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
