import { render, screen } from "@testing-library/react";
import { SidebarNotStyled } from "./Sidebar";
import { SidebarlinksNotStyled } from '../../molecules/Sidebarlink/Sidebarlink'
test("renders heading correctly", () => {
  render(
      <SidebarNotStyled
        heading="More"
      />
  );
  const SidebarHeadingEl = screen.getByTestId("heading");
  expect(SidebarHeadingEl.innerHTML).toBe("More");
});

