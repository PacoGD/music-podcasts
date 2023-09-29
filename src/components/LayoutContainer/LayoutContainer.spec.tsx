import { render } from "@testing-library/react";
import { LayoutContainer } from "./LayoutContainer";

describe("LayoutContainer", () => {
  test("snapshot", () => {
    const { container } = render(
      <LayoutContainer>
        <div>Content</div>
      </LayoutContainer>
    );

    expect(container).toMatchSnapshot();
  });
});
