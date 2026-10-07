import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaChevronDown, FaLink, FaBars } from "react-icons/fa";
import logoDesktop from "../../assets/desktop-logo.png";
import logoMobile from "../../assets/Mobile-logo.png";
import "./navbar.scss";

// ===== Menu data (yahin navbar ke andar) =====
// Har path ki jagah apna link daal dena (path: "#" ko replace kar do)
const navMenus = [
  {
    title: "Patents",
    path: "#",
    columns: [
      {
        heading: "Get started",
        links: [
          {
            label: "Patent basics",
            path: "https://www.uspto.gov/patents/basics",
          },
          {
            label: "Search our patent database",
            path: "https://www.uspto.gov/patents/search/patent-public-search",
          },
          {
            label: "How to apply",
            path: "https://www.uspto.gov/patents/basics/patent-process-overview",
          },
          {
            label: "Patent videos",
            path: "https://www.uspto.gov/learning-and-resources/uspto-videos#patents",
          },
        ],
      },
      {
        heading: "Apply for patent",
        links: [
          {
            label: "Apply online",
            path: "https://www.uspto.gov/patents/apply/patent-center",
          },
          {
            label: "Checking application status",
            path: "https://www.uspto.gov/trademarks/apply/check-status-view-documents",
          },
          {
            label: "Patent forms",
            path: "https://www.uspto.gov/trademarks/apply/index-all-teas-forms",
          },
          {
            label: "Respond to office actions",
            path: "https://www.uspto.gov/patents/maintain/responding-office-actions",
          },
          {
            label: "Respond to notices",
            path: "https://www.uspto.gov/patents/maintain/responding-office-actions",
          },
          {
            label: "File a petition",
            path: "https://www.uspto.gov/patents/maintain/responding-office-actions",
          },
          {
            label: "Protect against scams",
            path: "https://www.uspto.gov/patents/fraud",
          },
        ],
      },
      {
        heading: "Maintain your patent",
        links: [
          {
            label: "How to renew",
            path: "https://www.uspto.gov/patents/maintain",
          },
          {
            label: "Maintenance fees",
            path: "https://www.uspto.gov/patents/basics/manage#fees",
          },
          {
            label: "Patent litigation",
            path: "https://www.uspto.gov/patents/basics/manage#infringement",
          },
          {
            label: "Correct your patent",
            path: "https://www.uspto.gov/patents/maintain/data-management-services",
          },
          {
            label: "Transfer ownership",
            path: "https://www.uspto.gov/patents/maintain/patents-assignments-change-search-ownership",
          },
        ],
      },
      {
        heading: "Patent practitioners",
        boxed: true,
        links: [
          {
            label: "Patent Center",
            path: "https://www.uspto.gov/patents/apply/patent-center",
          },
          {
            label: "Patent fees",
            path: "https://www.uspto.gov/patents/apply/forms",
          },
          {
            label: "MPEP manual",
            path: "https://certifiedcopycenter.uspto.gov/",
          },
          {
            label: "International patent filings",
            path: "https://www.uspto.gov/web/offices/pac/mpep/index.html",
          },
          {
            label: "Patent Trial and Appeal Board",
            path: "https://certifiedcopycenter.uspto.gov/",
          },
          {
            label: "Patent forms",
            path: "https://www.uspto.gov/trademarks/apply/index-all-teas-forms",
          },
          {
            label: "Order certified copies",
            ath: "https://certifiedcopycenter.uspto.gov/",
          },
          {
            label: "Open Data Portal",
            path: "https://certifiedcopycenter.uspto.gov/",
          },
          {
            label: "Request reexamination",
            path: "https://www.uspto.gov/about-us/organizational-offices/office-commissioner-patents/central-reexamination-unit",
          },
        ],
      },
    ],
  },

  {
    title: "Trademarks",
    path: "#",
    columns: [
      {
        heading: "Get started",
        links: [
          {
            label: "Learn about searching",
            path: "https://www.uspto.gov/trademarks/search",
          },
          {
            label: "Trademark basics",
            path: "https://www.uspto.gov/trademarks/basics",
          },
          {
            label: "Search our trademark database",
            path: "https://tmsearch.uspto.gov/",
          },
          {
            label: "How to apply",
            path: "https://www.uspto.gov/patents/basics/patent-process-overview",
          },
          {
            label: "Trademark videos",
            path: "https://www.uspto.gov/trademarks/videos#type-trademark-basics",
          },
        ],
      },
      {
        heading: "Apply to register",
        links: [
          {
            label: "Apply online",
            path: "https://www.uspto.gov/trademarks/apply/index-all-teas-forms",
          },
          {
            label: "Checking application status & viewing documents",
            path: "https://www.uspto.gov/patents/maintain/responding-office-actions",
          },
          {
            label: "All trademark forms",
            path: "https://www.uspto.gov/trademarks/apply/index-all-teas-forms",
          },
          {
            label: "Respond to office actions",
            path: "https://www.uspto.gov/trademarks/apply/check-status-view-documents",
          },
          {
            label: "Protect against scams",
            path: "https://www.uspto.gov/patents/fraud",
          },
        ],
      },
      {
        heading: "Maintain your trademark",
        links: [
          {
            label: "How to renew",
            path: "https://www.uspto.gov/patents/maintain",
          },
          {
            label: "Maintenance forms",
            path: "https://www.uspto.gov/trademarks/maintain",
          },
          {
            label: "Trademark litigation",
            path: "https://www.uspto.gov/trademarks/been-sued-or-received-cease-and-desist-letter-answers-common-questions-about-trademark",
          },
          {
            label: "Transferring ownership",
            path: "https://www.uspto.gov/trademarks/trademark-assignments-change-search-ownership",
          },
          {
            label: "Post-registration audits",
            path: "https://www.uspto.gov/trademarks/maintain/post-registration-audit-program",
          },
        ],
      },
      {
        heading: "Trademark practitioners",
        boxed: true,
        links: [
          {
            label: "Trademark Center",
            path: "https://trademarkcenter.uspto.gov/",
          },
          {
            label: "TEAS forms",
            path: "https://www.uspto.gov/trademarks/apply/index-all-teas-forms",
          },
          { label: "Check status in TSDR", path: "#" },
          { label: "Trademark Trial and Appeal Board", path: "#" },
          { label: "ID manual", path: "https://idm-tmng.uspto.gov/" },
          {
            label: "Request expungement or reexamination proceeding",
            path: "https://www.uspto.gov/trademarks/protect/requesting-expungement-or-reexamination-proceeding",
          },
          {
            label: "Madrid protocol international protection",
            path: "https://www.uspto.gov/ip-policy/international-protection/madrid-protocol",
          },
          {
            label: "Order certified copies",
            path: "https://certifiedcopycenter.uspto.gov/",
          },
        ],
      },
    ],
  },

  {
    title: "IP Policy",
    path: "#",
    columns: [
      {
        heading: "IP policy",
        links: [
          {
            label: "Patent policy",
            path: "https://www.uspto.gov/ip-policy/patent-policy",
          },
          {
            label: "Industrial design policy",
            path: "https://www.uspto.gov/ip-policy/industrial-design-policy",
          },
          {
            label: "Trademark policy",
            path: "https://www.uspto.gov/ip-policy/trademark-policy",
          },
          {
            label: "Copyright policy",
            path: "https://www.uspto.gov/ip-policy/copyright-policy",
          },
          {
            label: "Enforcement policy",
            path: "https://www.uspto.gov/ip-policy/enforcement-policy",
          },
          {
            label: "Trade secret policy",
            path: "https://www.uspto.gov/ip-policy/trade-secret-policy",
          },
        ],
      },
      {
        heading: "International affairs",
        links: [
          {
            label: "IP Attaché Program",
            path: "https://www.uspto.gov/ip-policy/ip-attache-program",
          },
          { label: "China IP", path: "https://www.uspto.gov/ip-policy/china" },
          {
            label: "IPR toolkits",
            path: "https://www.uspto.gov/ip-policy/ipr-toolkits",
          },
          {
            label: "International intergovernmental organizations",
            path: "https://www.uspto.gov/ip-policy/international-intergovernmental-organizations",
          },
        ],
      },
      {
        heading: "IP research and training",
        links: [
          {
            label: "Economic research",
            path: "https://www.uspto.gov/ip-policy/economic-research",
          },
          {
            label: "Global Intellectual Property Academy",
            path: "https://www.uspto.gov/ip-policy/global-intellectual-property-academy",
          },
        ],
      },
      {
        heading: "Tools & links",
        boxed: true,
        links: [
          {
            label: "Legislative resources",
            path: "https://www.uspto.gov/ip-policy/legislative-resources",
          },
          {
            label: "IP policy events",
            path: "https://www.uspto.gov/ip-policy/ip-policy-events",
          },
          {
            label: "IPR toolkits",
            path: "https://www.uspto.gov/ip-policy/ipr-toolkits",
          },
          {
            label: "More tools & links",
            path: "https://www.uspto.gov/ip-policy",
          },
        ],
      },
    ],
  },

  {
    title: "Learning and Resources",
    path: "#",
    columns: [
      {
        heading: "Resources by audience",
        links: [
          {
            label: "Attorneys, agents & paralegals",
            path: "https://www.uspto.gov/learning-and-resources/attorneys-agents-and-paralegals",
          },
          {
            label: "Inventors & entrepreneurs",
            path: "https://www.uspto.gov/learning-and-resources/inventors-entrepreneurs-resources",
          },
          {
            label: "Kids & educators",
            path: "https://www.uspto.gov/learning-and-resources/kids-educators",
          },
          {
            label: "Media",
            path: "https://www.uspto.gov/about-us/news-updates",
          },
          {
            label: "Researchers & librarians",
            path: "https://www.uspto.gov/learning-and-resources/patent-trademark-resource-centers",
          },
          {
            label: "Patent & trademark practitioners",
            path: "https://www.uspto.gov/learning-and-resources/patent-and-trademark-practitioners",
          },
          {
            label: "IP awards and recognition",
            path: "https://www.uspto.gov/learning-and-resources/honoring-innovation",
          },
        ],
      },
      {
        heading: "Getting started",
        links: [
          {
            label: "Create an account",
            path: "https://www.uspto.gov/about-us/usptogov-account",
          },
          {
            label: "General FAQs",
            path: "https://www.uspto.gov/learning-and-resources/general-faqs",
          },
          { label: "IP Identifier", path: "https://ipidentifier.uspto.gov/" },
          {
            label: "Glossary of terms",
            path: "https://www.uspto.gov/learning-and-resources/glossary",
          },
          {
            label: "Video Learning Center",
            path: "https://www.uspto.gov/learning-and-resources/uspto-videos",
          },
          {
            label: "Access free services",
            path: "https://www.uspto.gov/learning-and-resources/access-our-free-services",
          },
          {
            label: "Inspiring stories of innovation",
            path: "https://www.uspto.gov/learning-and-resources/innovation-inspiration",
          },
        ],
      },
      {
        heading: "Publications & data",
        links: [
          { label: "Open data portal", path: "https://data.uspto.gov/home" },
          {
            label: "Federal Register Notices",
            path: "https://www.uspto.gov/learning-and-resources/federal-register-notices/federal-register-notices-2026",
          },
          {
            label: "Official Gazette",
            path: "https://www.uspto.gov/learning-and-resources/official-gazette",
          },
          {
            label: "XML resources",
            path: "https://www.uspto.gov/learning-and-resources/xml-resources",
          },
          {
            label: "Classification",
            path: "https://www.uspto.gov/patents/search/classification-standards-and-development",
          },
          {
            label: "Guidance documents",
            path: "https://www.uspto.gov/guidance",
          },
          {
            label: "Statistics and dashboards",
            path: "https://www.uspto.gov/learning-and-resources/data-and-statistics",
          },
        ],
      },
      {
        heading: "Tools & links",
        boxed: true,
        links: [
          {
            label: "Fees and payment",
            path: "https://www.uspto.gov/learning-and-resources/fees-and-payment",
          },
          {
            label: "Training and events",
            path: "https://www.uspto.gov/about-us/events",
          },
          {
            label: "More tools & links",
            path: "https://www.uspto.gov/learning-resources",
          },
          {
            label: "System availability",
            path: "https://www.uspto.gov/system-status",
          },
          {
            label: "Operational status",
            path: "https://www.uspto.gov/learning-and-resources/operating-status",
          },
        ],
      },
    ],
  },
];

const topLinks = [
  { label: "About Us", path: "https://www.uspto.gov/about-us" },
  { label: "Jobs", path: "https://www.uspto.gov/jobs/join-us" },
  { label: "Contact Us", path: "https://www.uspto.gov/about-us/contact-us" },
  { label: "MyUSPTO", path: "https://my.uspto.gov/" },
];

const Navbar = () => {
  // mobile: "menu" | "search" | "links" | null
  const [openPanel, setOpenPanel] = useState(null);
  // mobile accordion: kaunsa main item khula hai
  const [openSub, setOpenSub] = useState(null);
  // desktop: kaunsa mega menu hover par khula hai (index)
  const [activeMenu, setActiveMenu] = useState(null);

  const togglePanel = (panel) =>
    setOpenPanel((prev) => (prev === panel ? null : panel));

  const toggleSub = (i) => setOpenSub((prev) => (prev === i ? null : i));

  const closeMobile = () => {
    setOpenPanel(null);
    setOpenSub(null);
  };

  return (
    <header className="navbar">
      {/* Government banner */}
      <div className="gov-banner">
        <img
          src="https://flagcdn.com/w40/us.png"
          alt="US flag"
          className="flag"
        />
        <span>An official website of the United States government</span>
        <a href="#" className="how-you-know">
          Here's how you know <FaChevronDown />
        </a>
      </div>

      {/* Main header */}
      <div className="main-header">
        <div className="main-header__inner">
          <Link to="/" className="logo">
            <img
              src={logoDesktop}
              alt="USPTO"
              className="logo__img logo__img--desktop"
            />
            <img
              src={logoMobile}
              alt="USPTO"
              className="logo__img logo__img--mobile"
            />
          </Link>

          {/* ===== Desktop right side ===== */}
          <div className="header-right desktop-only">
            <nav className="top-links">
              {topLinks.map((l, i) => (
                <React.Fragment key={l.label}>
                  <a href={l.path} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                  {i < topLinks.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </nav>

            <div className="search-box">
              <input type="text" placeholder="Search uspto.gov" />
              <button type="button">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* ===== Mobile icon buttons ===== */}
          <div className="mobile-icons mobile-only">
            <button
              type="button"
              className={openPanel === "menu" ? "active" : ""}
              onClick={() => togglePanel("menu")}
            >
              <FaBars />
              <span>MENU</span>
            </button>
            <button
              type="button"
              className={openPanel === "links" ? "active" : ""}
              onClick={() => togglePanel("links")}
            >
              <FaLink />
              <span>LINKS</span>
            </button>
            <button
              type="button"
              className={openPanel === "search" ? "active" : ""}
              onClick={() => togglePanel("search")}
            >
              <FaSearch />
              <span>SEARCH</span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== Desktop secondary nav + mega menu ===== */}
      <div
        className="sub-nav desktop-only"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="sub-nav__inner">
          <nav className="sub-nav__links">
            {navMenus.map((menu, i) => (
              <a
                key={menu.title}
                href={menu.path}
                target="_blank"
                rel="noopener noreferrer"
                className={activeMenu === i ? "active" : ""}
                onMouseEnter={() => setActiveMenu(i)}
              >
                {menu.title}
              </a>
            ))}
          </nav>
          <button type="button" className="find-fast">
            <FaLink /> Find It Fast <FaChevronDown />
          </button>
        </div>

        {/* Mega menu panel */}
        {activeMenu !== null && (
          <div className="mega-menu">
            <div className="mega-menu__inner">
              {navMenus[activeMenu].columns.map((col) => (
                <div
                  key={col.heading}
                  className={`mega-col ${col.boxed ? "mega-col--boxed" : ""}`}
                >
                  <h4>{col.heading}</h4>
                  <ul>
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ===== Mobile MENU (accordion) ===== */}
      {openPanel === "menu" && (
        <nav className="mobile-menu mobile-only">
          {navMenus.map((menu, i) => (
            <div key={menu.title} className="m-group">
              <button
                type="button"
                className={
                  openSub === i ? "m-group__head open" : "m-group__head"
                }
                onClick={() => toggleSub(i)}
              >
                {menu.title} <FaChevronDown />
              </button>

              {openSub === i && (
                <div className="m-group__body">
                  {menu.columns.map((col) => (
                    <div key={col.heading} className="m-col">
                      <p className="m-col__head">{col.heading}</p>
                      {col.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="m-link"
                          onClick={closeMobile}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {topLinks.map((l) => (
            <a
              key={l.label}
              href={l.path}
              target="_blank"
              rel="noopener noreferrer"
              className="sub-item"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}

      {/* ===== Mobile SEARCH ===== */}
      {openPanel === "search" && (
        <div className="mobile-search mobile-only">
          <input type="text" placeholder="Search uspto.gov" />
          <button type="button">
            <FaSearch />
          </button>
        </div>
      )}

      {/* ===== Mobile LINKS ===== */}
      {openPanel === "links" && (
        <div className="mobile-links mobile-only">
          <a href="#">
            <FaLink /> Find It Fast
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
