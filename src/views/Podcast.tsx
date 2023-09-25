import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PodcastDetails from "../components/PodcastDetails";
import podcastService from "../services/podcastService";

function Podcast() {
  const { podcastId } = useParams<{ podcastId: string }>();
  const [podcast, setPodcast] = useState<Podcast | null>(null);

  useEffect(() => {
    // Función para cargar los detalles del podcast desde el servicio externo.
    const loadPodcastDetails = async () => {
      try {
        const podcastDetails: Podcast | null =
          await podcastService.fetchPopularPodcasts();
        setPodcast(podcastDetails);
      } catch (error) {
        console.error("Error al cargar los detalles del podcast", error);
      }
    };

    loadPodcastDetails();
  }, [podcastId]);

  return (
    <div>
      {podcast ? (
        <PodcastDetails podcast={podcast} />
      ) : (
        <p>Cargando detalles del podcast...</p>
      )}
    </div>
  );
}

export default Podcast;
