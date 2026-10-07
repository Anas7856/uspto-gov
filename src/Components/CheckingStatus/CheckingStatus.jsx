import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PatentSidebar from "../PatentSidebar/PatentSidebar";
import "./checkingStatus.scss";

// chota pendency chart (big number + 3 mahine ki bars)
const Pendency = ({ title, current, month, bars }) => {
  const max = Math.max(...bars.map((b) => b.value)) * 1.15;
  return (
    <div className="cs-pendency">
      <h3>{title}</h3>
      <div className="cs-pendency__body">
        <div className="cs-pendency__now">
          <span className="num">{current}</span>
          <span className="unit">months</span>
          <span className="date">{month}</span>
        </div>
        <div className="cs-pendency__bars">
          {bars.map((b) => (
            <div key={b.label} className="bar-col">
              <div className="bar-wrap">
                <div
                  className="bar"
                  style={{ height: `${(b.value / max) * 100}%` }}
                >
                  <span>{b.value}</span>
                </div>
              </div>
              <span className="bar-label">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CheckingStatus = () => {
  return (
    <>
      <Navbar />
      <div className="patent-shell">
        <PatentSidebar />
        <main className="patent-content checking-status">
          <h1>Check the filing status of your patent application</h1>
          <p>
            Patent Center allows you to check your application status and
            electronically file and manage patent applications in one location.
          </p>

          <a href="#" className="cs-btn">
            Access Patent Center
          </a>

          <h2>
            How to check the status of your patent application in Patent Center
          </h2>

          <div className="cs-step">
            <div className="cs-step__text">
              <h3>Step 1: Sign in to Patent Center</h3>
              <ul>
                <li>
                  If you don't yet have access to USPTO electronic filing
                  systems, visit the <a href="#">Getting Started - New Users</a>{" "}
                  page. There, you can register for Patent Center access, so you
                  can file and manage your applications electronically.
                </li>
              </ul>
            </div>
            <img
              src="https://placehold.co/160x100/112e51/ffffff?text=Sign+in"
              alt="Sign in"
            />
          </div>

          <div className="cs-step">
            <div className="cs-step__text">
              <h3>Step 2: Find your patent application</h3>
              <ul>
                <li>
                  You can search for patent applications on both the Home page
                  and the Search page.
                </li>
                <li>
                  Select the search option (application, attorney docket,
                  patent, PCT, publication, Intl. Design Reg.), enter the
                  corresponding number, and click on the magnifying glass to
                  obtain results.
                </li>
              </ul>
            </div>
            <img
              src="https://placehold.co/160x100/1b4a6b/ffffff?text=Search"
              alt="Search"
            />
          </div>

          <div className="cs-step">
            <div className="cs-step__text">
              <h3>
                Step 3: Open the application record to view status of your
                patent application
              </h3>
              <ul>
                <li>
                  New documents may not display in Patent Center immediately
                  after filing them.
                </li>
              </ul>
              <p>
                See the{" "}
                <a href="#">Patent Center Application Search User Guide</a> for
                detailed instructions on searching and viewing your patent
                applications.
              </p>
              <p>
                You can also search public patent applications at the USPTO{" "}
                <a href="#">Open Data Portal (ODP)</a>, a data platform for
                discovering and easily extracting USPTO data without signing in
                to Patent Center.
              </p>
            </div>
          </div>

          <h2>Timeline for patent applications</h2>
          <p>
            Pendency times on the{" "}
            <a href="#">Patents Dashboard: USPTO Data Visualization Center</a>{" "}
            indicate when newly filed applications are likely to be examined
            (months to First Office Action) and disposed (months to when the
            patent is either issued or the application is abandoned).
          </p>

          <Pendency
            title="First Office Action Pendency"
            current="20.6"
            month="August 2026"
            bars={[
              { label: "May-26", value: 21.5 },
              { label: "Jun-26", value: 21 },
              { label: "Jul-26", value: 20.8 },
            ]}
          />
          <p className="cs-note">
            First Office Action Pendency is the average number of months from
            the date you file your patent application to the date the USPTO
            mails a First Office Action. "Pendency" refers to the application
            being "pending," or awaiting a decision.
          </p>

          <Pendency
            title="Traditional Total Pendency"
            current="29"
            month="August 2026"
            bars={[
              { label: "May-26", value: 29.4 },
              { label: "Jun-26", value: 29.3 },
              { label: "Jul-26", value: 29.3 },
            ]}
          />
          <p className="cs-note">
            The graphic chart above shows the historical measure of total patent
            pendency — the average number of months from the application filing
            date to the final disposition date (a patent is issued or the
            application is abandoned).
          </p>

          <h2>Contact us</h2>
          <p>
            If you need help registering to access USPTO filing systems, contact
            the <a href="#">Electronic Business Center (EBC)</a>.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CheckingStatus;
