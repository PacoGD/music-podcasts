import { useState, useEffect } from "react";
import { type Podcast } from "../types/types";
import { PodcastList } from "../components/PodcastList";
import { SearchBar } from "../components/SearchBar";

function Home() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const API_URL =
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

    const cachedData = localStorage.getItem("podcastsData");

    if (cachedData) {
      setPodcasts(JSON.parse(cachedData));
    } else {
      fetch(API_URL)
        .then(async (res) => await res.json())
        .then((res) => {
          localStorage.setItem("podcastsData", JSON.stringify(res.feed.entry));
          setPodcasts(res.feed.entry);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <>
      <SearchBar />
      <PodcastList podcasts={podcasts} />
    </>
  );
}

export default Home;
