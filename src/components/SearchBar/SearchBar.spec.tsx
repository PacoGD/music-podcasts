import { render } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar component", () => {
  const onChange = jest.fn();
  const value = "";
  const filteredPodcastCount = 0;
  test(" snapshot", () => {
    const { container } = render(
      <SearchBar
        onChange={onChange}
        value={value}
        filteredPodcastsCount={filteredPodcastCount}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
