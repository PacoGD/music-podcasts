import { render } from "@testing-library/react";
import { PodcastItem } from "./PodcastItem";
import { podcastTestData } from "../../testutils/test-utils";

jest.mock("../../hooks/store", () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("PodcastItem component", () => {
  const podcastDetailsData = podcastTestData[0];

  test(" snapshot", () => {
    const { container } = render(<PodcastItem podcast={podcastDetailsData} />);
    expect(container).toMatchSnapshot();
  });
});
