import { render } from "@testing-library/react";
import { PodcastCard } from "./PodcastCard";
import { podcastTestData } from "../../testutils/test-utils";

const podcastCardData = {
  img: podcastTestData[0]["im:image"],
  title: podcastTestData[0].title,
  autor: podcastTestData[0]["im:artist"],
  summary: podcastTestData[0].summary,
  id: podcastTestData[0].id.attributes["im:id"],
};

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("PodcastCard", () => {
  test("snapshot", () => {
    const { container } = render(<PodcastCard {...podcastCardData} />);

    expect(container).toMatchSnapshot();
  });
});
