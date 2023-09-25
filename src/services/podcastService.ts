const API_URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

// Función para obtener los podcasts desde el servicio externo y manejar el almacenamiento en caché.
async function fetchPopularPodcasts() {
  try {
    const cachedData = localStorage.getItem("popularPodcastsData");
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      const currentTime = new Date().getTime();
      const cacheDuration = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

      if (currentTime - timestamp < cacheDuration) {
        return data;
      }
    }

    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("No se pudo obtener la lista de podcasts");
    }

    const data = await response.json();
    const podcasts = data.feed.entry;

    // Almacenar los datos en caché en el localStorage
    const cacheData = {
      podcasts,
      timestamp: new Date().getTime(),
    };
    localStorage.setItem("popularPodcastsData", JSON.stringify(cacheData));

    return data.feed.entry;
  } catch (error) {
    console.error("Error al obtener los podcasts populares", error);
    throw error;
  }
}

export default {
  fetchPopularPodcasts,
};
