import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PatentSidebar from "../PatentSidebar/PatentSidebar";
import "./respondNotices.scss";

const guideItems = [
  "Application not entitled to a filing date",
  "Inventor/application information",
  "Fees",
  "Specification, claims, and abstract",
  "Drawings",
  "Other",
];

const RespondNotices = () => {
  return (
    <>
      <Navbar />
      <div className="patent-shell">
        <PatentSidebar />
        <main className="patent-content respond-notices">
          <h1>When patent applications are incomplete or missing information</h1>

          <h2>Understanding Office of Patent Application Processing (OPAP) notices</h2>
          <p>
            An Office of Patent Application Processing (OPAP) notice identifies what is
            incomplete or missing in your application, what you need to do to correct
            all issues, the time period you have to file a complete reply to the notice,
            and any additional fees required. Each notice may indicate more than one
            problem with your application, so read the notice carefully and provide all
            required items with your reply including any fees required by the notice.
          </p>
          <p>
            The information below guides you through the types of notices you may receive
            and how to correct any deficiencies in your application revealed by those
            notices. If you need additional assistance, contact the Application
            Assistance Unit (AAU).
          </p>

          <h2>Types of notices</h2>
          <p>
            The <strong>Notice of Incomplete Application</strong> is sent to you when any
            application part necessary for a filing date is missing or deficient, meaning
            a filing date cannot yet be granted. Application parts necessary for a filing
            date include the specification for all applications and drawings for design
            applications. The filing date will be the date on which all application parts
            necessary for a filing date are submitted. More information can be found in
            Section 506 of the Manual of Patent Examination and Procedure (MPEP).
          </p>
          <p>
            The <strong>Notice to File Missing Parts</strong> is sent to you when your
            application is entitled to a filing date, but a necessary part for a complete
            application is found to be missing or deficient. Examples include appropriate
            filing fees, proper establishment of an entity status discount, and
            establishment of inventorship.
          </p>
          <p>
            Other notices issued by OPAP include the{" "}
            <strong>Notice to File Corrected Application Papers</strong> and{" "}
            <strong>Notice of Omitted Item(s)</strong>.
          </p>
          <p>
            This information below helps to address some of the more common problems with
            patent applications for which OPAP issues notices. As noted earlier, you may
            have to pay additional fees along with submitting documents to the USPTO.
          </p>

          <h2>OPAP Notices guide</h2>
          <div className="rn-guide">
            {guideItems.map((item) => (
              <a key={item} href="#" className="rn-guide__item">
                {item}
              </a>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default RespondNotices;
