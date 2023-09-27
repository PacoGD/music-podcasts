import { PodcastList } from "../../components/PodcastList";
import { SearchBar } from "../../components/SearchBar";
import usePodcasts from "./hooks/usePodcasts";

function Home() {
  const podcasts = usePodcasts();

  return (
    <>
      <SearchBar />
      <PodcastList podcasts={podcasts} />
    </>
  );
}

export default Home;
