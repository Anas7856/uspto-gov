import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./filePetition.scss";

const highlights = [
  { title: "PETITIONS FAQs", desc: "Commonly asked petitions-related questions" },
  { title: "e-PETITIONS", desc: "Get an immediate decision on certain petition types" },
  { title: "PETITIONS TIMELINE", desc: "Petition types and corresponding offices at all stages of patent prosecution" },
];

const columns = [
  {
    title: "Essentials",
    sub: "Need-to-know information about petitions",
    links: [
      "Required elements",
      "Where to file petitions",
      { label: "Available petition forms", to: "/patents/forms" },
      "Current fee schedule",
      "Searchable Manual of Patent Examining Procedure (MPEP)",
      "Videos about general petitions practice",
      "Information on common petitions for OPET",
    ],
  },
  {
    title: "Statistics and data",
    sub: "For those looking to dig deeper",
    links: [
      "Timeline for typical petitions",
      "Petitions data on Patents dashboard",
      "Final Agency Decisions from the Commissioner for Patents",
    ],
  },
  {
    title: "Contact us",
    sub: "Additional help with your petition",
    links: [
      "Office of Petitions (OPET)",
      "Office of Patent Legal Administration (OPLA)",
      "International Patent Legal Administration (IPLA)",
      "Application Assistance Unit (including ODM)",
      "Central Reexamination Unit",
      "Technology Centers",
    ],
  },
];

const FilePetition = () => {
  return (
    <>
      <Navbar />
      <main className="file-petition">
        <section className="fp-intro">
          <h1>Patent petitions</h1>
          <p>
            If you would like to make a request for the USPTO to take certain action in
            your patent or patent application, you may file a written submission known as
            a "petition." The Office of Petitions (OPET) reviews and decides most
            patent-related petitions, including requests for supervisory review by the
            USPTO Director, situations not specifically covered in the patent rules,
            suspension of patent rules, and other matters delegated to OPET. However,
            there are other areas within the Patents organization that process petitions,
            depending on the action being requested and the associated laws, rules, and
            USPTO policies.
          </p>

          <div className="fp-highlights">
            {highlights.map((h) => (
              <a key={h.title} href="#" className="fp-highlight">
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="fp-cols">
          {columns.map((col) => (
            <div key={col.title} className="fp-col">
              <h2>{col.title}</h2>
              <p className="fp-col__sub">{col.sub}</p>
              <ul>
                {col.links.map((l, i) => {
                  const isObj = typeof l === "object";
                  return (
                    <li key={i}>
                      {isObj ? (
                        <Link to={l.to}>{l.label}</Link>
                      ) : (
                        <a href="#">{l}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FilePetition;
