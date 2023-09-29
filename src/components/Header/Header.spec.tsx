import { render } from "@testing-library/react";
import { Header } from ".";

jest.mock("../../hooks/store", () => ({
  useAppSelector: jest.fn(() => {
    ("");
  }),
}));

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("Header component", () => {
  test("snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
