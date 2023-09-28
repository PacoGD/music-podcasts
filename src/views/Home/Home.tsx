import React, { useState } from "react";
import { PodcastList } from "../../components/PodcastList";
import { SearchBar } from "../../components/SearchBar";
import usePodcasts from "./hooks/usePodcasts";
import { filterPodcasts } from "./helper";

function Home() {
  const podcasts = usePodcasts();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPodcasts = filterPodcasts(podcasts, searchTerm);

  return (
    <>
      <SearchBar
        onChange={handleSearch}
        value={searchTerm}
        filteredPodcastsCount={filteredPodcasts.length}
      />
      <PodcastList podcasts={filteredPodcasts} searchTerm={searchTerm} />
    </>
  );
}

export default Home;
