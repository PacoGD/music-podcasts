interface Podcast {
  image: string;
  title: string;
  author: string;
  description: string;
}

interface PodcastDetailsProps {
  podcast: Podcast;
}

function PodcastDetails({ podcast }: PodcastDetailsProps) {
  return (
    <div>
      <img src={podcast.image} alt={podcast.title} />
      <h2>{podcast.title}</h2>
      <p>Autor: {podcast.author}</p>
      <p>Descripción: {podcast.description}</p>
      {/* Lista de episodios */}
    </div>
  );
}

export default PodcastDetails;
