import { render } from "@testing-library/react";
import { PodcastList } from "./PodcastList";
import { podcastTestData } from "../../testutils/test-utils";

jest.mock("../../hooks/store", () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("PodcastList component", () => {
  const podcastDetailsData = podcastTestData;

  test(" snapshot", () => {
    const { container } = render(<PodcastList podcasts={podcastDetailsData} />);
    expect(container).toMatchSnapshot();
  });
});
