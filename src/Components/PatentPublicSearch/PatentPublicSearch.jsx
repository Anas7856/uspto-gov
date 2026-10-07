import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";
import "./patentPublicSearch.scss";

const columns = [
  {
    heading: "Search references",
    links: [
      "Searchable indexes",
      "Operators",
      "Keyboard shortcuts",
      "Stopwords",
      "Efficient searching",
      "Case sensitivity",
    ],
  },
  {
    heading: "Training materials",
    links: ["Quick reference guides", "Tutorial videos"],
  },
  {
    heading: "Support & Assistance",
    links: ["Frequently asked questions", "Contact us", "Release notes"],
  },
];

const PatentPublicSearch = () => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      <Navbar />

      <main className="pps">
        {/* ===== Hero ===== */}
        <section className="pps-hero">
          <div className="pps-hero__inner">
            <div className="pps-hero__text">
              <h1>Patent Public Search</h1>
              <p>
                This online tool provides public access to search U.S. patents
                and published applications.
              </p>
              <p>
                Select <strong>Basic search</strong> to look for patents by
                keywords or common fields, such as inventor or publication
                number. Select <strong>Advanced search</strong> to unlock the
                full potential of patent searching with various search queries,
                detailed filtering options, and tools to tag and manage
                documents.
              </p>
              <div className="pps-hero__btns">
                <a href="#" className="btn-green">
                  Basic search
                </a>
                <a href="#" className="btn-green">
                  Advanced search
                </a>
              </div>
            </div>

            <div className="pps-hero__img">
              <img
                src="https://placehold.co/220x180/112e51/4a90c2?text=Search"
                alt="Patent search graphic"
              />
            </div>
          </div>
        </section>

        {/* ===== Alert ===== */}
        {showAlert && (
          <div className="pps-alert">
            <div className="pps-alert__inner">
              <FaExclamationTriangle className="pps-alert__icon" />
              <p>
                Beginning November 7, 2026, Patent Public Search (PPUBS) will
                require users to sign in with a <a href="#">USPTO account</a>.
                To ensure uninterrupted access and a smooth transition, current
                and prospective users who do not yet have an account are
                encouraged to <a href="#">create a USPTO account in advance</a>.
              </p>
              <button
                type="button"
                className="pps-alert__close"
                onClick={() => setShowAlert(false)}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )}

        {/* ===== Three columns ===== */}
        <section className="pps-cols">
          <div className="pps-cols__inner">
            {columns.map((col) => (
              <div key={col.heading} className="pps-col">
                <h3>{col.heading}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Additional resources ===== */}
        <section className="pps-extra">
          <div className="pps-extra__inner">
            <h3>Additional resources</h3>
            <ul>
              <li>
                To check the status of your patent application, visit{" "}
                <a href="#">Patent Center</a>.
              </li>
              <li>
                To search Patent File Wrapper or extract open-source USPTO data,
                visit <a href="#">Open Data Portal</a>.
              </li>
              <li>
                To find patent assignments and changes in ownership, visit{" "}
                <a href="#">Patent Assignment Search</a>.
              </li>
              <li>
                See additional information for <a href="#">Patent searches</a>.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PatentPublicSearch;
