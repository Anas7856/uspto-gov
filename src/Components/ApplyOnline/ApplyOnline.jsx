import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PatentSidebar from "../PatentSidebar/PatentSidebar";
import "./applyOnline.scss";

const benefits = [
  "Filing and application management are incorporated within a single user interface for enhanced user experience",
  "Submission of the specification, claims, abstract and drawings in a single DOCX document without the need to manually separate sections",
  "Drag and drop interface allows filers to upload multiple files at once",
  "Separate submission and payment receipts clearly confirm status of submitted documents and successful payments",
  "Training mode is an interactive simulation where you can safely practice filing DOCX and PDF documents",
];

const whatsNew = ["What's New", "Coming soon", "Archive of What's New"];
const knownIssues = [
  "Known issues & workarounds",
  "Resolved Issues",
  "Archived Resolved Issues",
];
const feedback = [
  "Displaying the attorney document number on the fee payment page",
  "Filing an Assignment through Patent Center",
  "Inventor name filter in the Workbench",
  "Ability to remove a registration number from multiple customer numbers",
  "Download documents indicator for Correspondence",
];

const ApplyOnline = () => {
  return (
    <>
      <Navbar />
      <div className="patent-shell">
        <PatentSidebar />
        <main className="patent-content apply-online">
          <div className="ao-head">
            <div className="ao-head__text">
              <h1>Patent Center</h1>
              <p>
                Patent Center is available to all users for electronic filing
                and management of patent applications.
              </p>
              <p>
                You may access an on-demand recording of a previous Patent
                Center Training session to learn more about filing and managing
                patent applications.
              </p>
            </div>
            <img
              className="ao-head__img"
              src="https://placehold.co/230x150/112e51/ffffff?text=Patent+Center"
              alt="Patent Center"
            />
          </div>

          <h2>Patent Center Benefits</h2>
          <ul className="ao-list">
            {benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <h2>New Users</h2>
          <p>
            Only as a registered user can you electronically view your
            submission, track the progress of your application, and respond to
            USPTO correspondence. To register for access to USPTO electronic
            filing systems visit our <a href="#">Getting Started - New Users</a>{" "}
            page.
          </p>

          <h2>e-Office Action</h2>
          <p>Learn how to receive e-notification of USPTO communications.</p>

          <h2>What's new &amp; coming soon</h2>
          <p>
            See what's new in our latest release and upcoming features coming
            soon to Patent Center.
          </p>
          <ul className="ao-links">
            {whatsNew.map((w) => (
              <li key={w}>
                <a href="#">{w}</a>
              </li>
            ))}
          </ul>

          <h2>Patent Center known issues and workarounds</h2>
          <p>
            The following limitations and known issues apply to the current
            Patent Center release:
          </p>
          <ul className="ao-links">
            {knownIssues.map((k) => (
              <li key={k}>
                <a href="#">{k}</a>
              </li>
            ))}
          </ul>

          <h2>Additional feedback currently in development</h2>
          <p>
            We are working on additional functionality that you have suggested,
            which will be available soon:
          </p>
          <ul className="ao-list">
            {feedback.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <h2>Contact Information</h2>
          <p>
            We welcome your continued suggestions through email to the eMod
            mailbox.
          </p>
          <p>
            For questions, technical issues or troubleshooting, please contact
            the Patent Electronic Business Center at{" "}
            <a href="mailto:ebc@uspto.gov">ebc@uspto.gov</a> or 866-217-9197.
            Monday – Friday, 9 a.m. – 8 p.m. ET.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ApplyOnline;
