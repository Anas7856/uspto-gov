import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./infoPage.scss";

/*
  props:
    title    : string
    intro    : string | string[]
    sections : [{ heading, text (string|string[]) }]
    columns  : [{ heading, links:[{label,to}] }]   (hub pages)
    related  : [{ label, to }]                       (cards in body)
*/
const InfoPage = ({ title, intro = [], sections = [], columns = [], related = [] }) => {
  const introArr = Array.isArray(intro) ? intro : [intro];

  return (
    <>
      <Navbar />
      <main className="info-page">
        {/* Hero */}
        <section className="ip-hero">
          <div className="ip-hero__inner">
            <h1>{title}</h1>
            {introArr.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Hub pages: columns of links */}
        {columns.length > 0 && (
          <section className="ip-columns">
            {columns.map((c, i) => (
              <div className="ip-col" key={i}>
                <h3>{c.heading}</h3>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Normal pages: body with real content */}
        {columns.length === 0 && (
          <div className="ip-body">
            <div className="ip-main">
              {sections.map((s, i) => (
                <section key={i} className="ip-section">
                  {s.heading && <h2>{s.heading}</h2>}
                  {(Array.isArray(s.text) ? s.text : [s.text]).map((t, j) => (
                    <p key={j}>{t}</p>
                  ))}
                </section>
              ))}
            </div>

            {related.length > 0 && (
              <section className="ip-related">
                <h2>Related topics</h2>
                <div className="ip-related__grid">
                  {related.map((r) => (
                    <Link key={r.to} to={r.to} className="ip-card">
                      <span className="ip-card__label">{r.label}</span>
                      <span className="ip-card__arrow">Learn more &rarr;</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default InfoPage;
