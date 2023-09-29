import { render } from "@testing-library/react";
import { PodcastDetails } from "./PodcastDetails";
import { podcastTestData } from "../../testutils/test-utils";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("PodcastDetails", () => {
  test("snapshot", () => {
    const podcastDetailsData = podcastTestData[0];
    const { container } = render(
      <PodcastDetails podcast={podcastDetailsData} />
    );

    expect(container).toMatchSnapshot();
  });
});
