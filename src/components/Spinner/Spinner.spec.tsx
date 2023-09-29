import { render } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner component", () => {
  test(" snapshot", () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
