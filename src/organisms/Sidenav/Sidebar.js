import React from "react";
import withStyles from "../../withstyle";
import { SidebarStyle } from "./Sidebar.style";

const Sidebar = ({ children, heading, className }) => {
  return (
    <nav className={`${className}`}>
      <div className="nav-heading" tabIndex="0">
        <span data-testid="heading">{heading}</span>
      </div>
      <div>
        {children && (
          <ul className="nav-list">
            {children.length > 1 ? (
              children.map((child, index) => <li key={index}>{child}</li>)
            ) : (
              <li>{children}</li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default withStyles(Sidebar, SidebarStyle);
export { Sidebar as SidebarNotStyled };
