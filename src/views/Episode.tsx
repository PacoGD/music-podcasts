import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import EpisodeDetails from "../components/EpisodeDetails";
import podcastService from "../services/podcastService";

interface Episode {
  title: string;
  description: string;
  audioUrl: string;
}

function Episode() {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  const [episode, setEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    // Función para cargar los detalles del episodio desde el servicio externo.
    const loadEpisodeDetails = async () => {
      try {
        const episodeDetails: Episode | null =
          await podcastService.fetchPopularPodcasts();
        setEpisode(episodeDetails);
      } catch (error) {
        console.error("Error al cargar los detalles del episodio", error);
      }
    };

    loadEpisodeDetails();
  }, [podcastId, episodeId]);

  return (
    <div>
      <Link to={`/podcast/${podcastId}`}>Volver al podcast</Link>
      {episode ? (
        <EpisodeDetails episode={episode} />
      ) : (
        <p>Cargando detalles del episodio...</p>
      )}
    </div>
  );
}

export default Episode;
