import { render } from "@testing-library/react";
import { EpisodeList } from "./EpisodesList";
import { episodeTestData } from "../../testutils/test-utils";

jest.mock("../../hooks/store", () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("EpisodeList component", () => {
  test(" snapshot", () => {
    const episodes = episodeTestData;

    const { container } = render(
      <EpisodeList results={episodes} trackCount={2} />
    );
    expect(container).toMatchSnapshot();
  });
});
