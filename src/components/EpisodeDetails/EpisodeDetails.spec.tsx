import { render } from "@testing-library/react";
import EpisodeDetails from "./EpisodeDetails";

jest.mock("../../hooks/store", () => ({
  useAppSelector: jest.fn(() => {
    ("");
  }),
}));

describe("EpisodeDetails component", () => {
  test("snapshot", () => {
    const { container } = render(<EpisodeDetails />);
    expect(container).toMatchSnapshot();
  });
});
