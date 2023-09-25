interface Episode {
  title: string;
  description: string;
  audioUrl: string;
}

interface EpisodeDetailsProps {
  episode: Episode;
}

function EpisodeDetails({ episode }: EpisodeDetailsProps) {
  return (
    <div>
      <h2>{episode.title}</h2>
      <p>Descripción: {episode.description}</p>
      <audio controls>
        <source src={episode.audioUrl} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
}

export default EpisodeDetails;
