import { render } from "@testing-library/react";
import Episode from "./Episode";

jest.mock("../../hooks/store", () => ({
  useAppSelector: jest.fn(),
}));

describe("Episode component", () => {
  test(" snapshot", () => {
    const { container } = render(<Episode />);
    expect(container).toMatchSnapshot();
  });
});
