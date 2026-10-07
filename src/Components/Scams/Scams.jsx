import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./scams.scss";

const goals = [
  "Identifying and reviewing potential misrepresentations to the USPTO, and when appropriate using the administrative sanctions process to address misrepresentations, including false signatures;",
  "Addressing mistakes in fee certifications and assertions;",
  "Monitoring suspicious filings;",
  "Preventing non-practitioners from engaging in the unauthorized practice of law;",
  "Serving as the main point of contact within the USPTO for reporting potential threats to the patent system; and",
  "Adapting USPTO systems and processes to respond to new schemes.",
];

const resources = [
  { title: "Scam prevention", desc: "Find information on known scams, locating a registered practitioner, and avoiding unauthorized practice of law." },
  { title: "Office of Enrollment and Discipline (OED) decisions", desc: "Look up decisions about practitioners who have been disciplined for violations of the USPTO Rules of Professional Conduct." },
  { title: "Patent system threat detection data", desc: "Data outlining the finances and resources saved due to the Working Group's efforts to detect and mitigate patent threats." },
];

const Scams = () => {
  return (
    <>
      <Navbar />
      <main className="scams">
        <section className="sc-intro">
          <h1>Mitigating threats to the patent system</h1>
          <p className="sc-lead">
            To help protect the integrity of the patent system, the USPTO has created a
            new Patent Fraud Mitigation Unit.
          </p>
          <p>
            The U.S. patent system helps inventors by giving them legal protection for
            their new ideas. This encourages people to invest in new technologies and
            keep innovation moving forward. Protecting the integrity of the U.S. patent
            system is of the utmost concern to the U.S. Patent and Trademark Office
            (USPTO). To address this concern, the USPTO created the Patent Fraud
            Mitigation Unit.
          </p>

          <p>The Working Group's goal is to detect and mitigate threats to the patent system by:</p>
          <ul className="sc-goals">
            {goals.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>

          <p>
            The USPTO is focused on ensuring that the public can rely on the integrity
            and veracity of the contents of patent application files.
          </p>
        </section>

        <section className="sc-resources">
          {resources.map((r) => (
            <a key={r.title} href="#" className="sc-card">
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </a>
          ))}
        </section>

        <section className="sc-contact">
          <h2>Contact us</h2>
          <p>
            The Patent Fraud Mitigation Unit represents the USPTO's commitment to
            protecting the integrity of the patent system and raising awareness of filing
            scams. If you believe that one of the above-mentioned activities is occurring
            in your application(s), relevant details or information may be sent to the
            Patent Fraud Mitigation Unit at{" "}
            <a href="mailto:patentscams@uspto.gov">patentscams@uspto.gov</a>.
          </p>
          <p>
            Please note that the USPTO will not directly respond to any reports or
            submissions sent to this email account.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Scams;
