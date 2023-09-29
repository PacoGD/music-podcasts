import { episodeTestData } from "../../testutils/test-utils";
import { Episode } from "../../types";
import {
  isCacheRecent,
  getCachedPodcastData,
  cachePodcastData,
} from "./helper";

describe("Cache Functions", () => {
  afterEach(() => {
    localStorage.clear();
  });
  const testData: Episode[] = episodeTestData;

  it("should return false if cache is not recent", () => {
    localStorage.setItem("podcast_1_date", new Date("2022-01-01").toString());

    const result = isCacheRecent("1");

    expect(result).toBe(false);
  });

  it("should return true if cache is recent", () => {
    localStorage.setItem(
      "podcast_2_date",
      new Date(Date.now() - 60 * 60 * 1000).toString()
    );

    const result = isCacheRecent("2");

    expect(result).toBe(true);
  });

  it("should return null if no cached data exists", () => {
    const result = getCachedPodcastData("3");

    expect(result).toBeNull();
  });

  it("should return cached podcast data", () => {
    localStorage.setItem("podcast_4", JSON.stringify(testData));

    const result = getCachedPodcastData("4");
    if (Array.isArray(result) && result?.length > 0) {
      result[0].releaseDate = new Date(result[0].releaseDate);
      result[1].releaseDate = new Date(result[1].releaseDate);
    }

    expect(result).toEqual(testData);
  });

  it("should cache podcast data and date", () => {
    cachePodcastData("5", testData);

    const cachedData = localStorage.getItem("podcast_5");
    const cachedDate = localStorage.getItem("podcast_5_date");

    expect(cachedData).toEqual(JSON.stringify(testData));
    expect(cachedDate).toBeTruthy();
  });
});
