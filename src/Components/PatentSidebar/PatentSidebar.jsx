import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./patentSidebar.scss";

const links = [
  { label: "Apply online", to: "/patents/apply-online" },
  { label: "Checking application status", to: "/patents/application-status" },
  { label: "Patent forms", to: "/patents/forms" },
  { label: "Respond to office actions", to: "/patents/respond-office-actions" },
  { label: "Respond to notices", to: "/patents/respond-notices" },
  { label: "File a petition", to: "/patents/file-petition" },
  { label: "Avoid scams and fraud", to: "/patents/scams" },
  { label: "Patent Public Search", to: "/patents/search/patent-public-search" },
  { label: "Search for patents", to: "/patents/search" },
  { label: "Petitions", to: "/patents/file-petition" },
  { label: "Patent Trial and Appeal Board", to: "/patents/ptab" },
];

const PatentSidebar = () => (
  <aside className="patent-sidebar">
    <Link to="/patents" className="patent-sidebar__title">
      Apply for patent
    </Link>
    <nav>
      {links.map((l, i) => (
        <NavLink
          key={i}
          to={l.to}
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default PatentSidebar;
