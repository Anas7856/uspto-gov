import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PatentSidebar from "../PatentSidebar/PatentSidebar";
import "./respondOfficeActions.scss";

const RespondOfficeActions = () => {
  return (
    <>
      <Navbar />
      <div className="patent-shell">
        <PatentSidebar />
        <main className="patent-content roa">
          <h1>Responding to Office Actions</h1>
          <p>
            A USPTO patent examiner may take action in your application with any
            of various official letters. Below we describe each type of letter
            and how to respond. These letters require careful reading in order
            to understand the response deadlines and requirements.
          </p>

          <h2>Types of official letters</h2>
          <p>
            <strong>Office Action</strong> — written correspondence from the
            patent examiner requiring a properly signed written response from
            you in order for prosecution of your application to continue.
            Examples include a restriction requirement, a non-final office
            action, and a final office action. Your reply must address each
            ground of rejection and objection the examiner has made.
          </p>
          <p>
            <strong>Notice of Allowability</strong> — a USPTO form (
            <a href="#">PTOL-37</a>) is mailed to you if the patent examiner
            determines that all pending claims in the application are allowable
            (eligible to receive a patent). The notice not only identifies the
            allowable claims, but also the required fees to be paid before a
            patent is issued.
          </p>
          <p>
            The examiner may mail another type of notice identifying any
            deficiencies in the application or your correspondence. You usually
            have two months to correct the deficiency unless the notice
            accompanies an office action. An example of such a notice is a{" "}
            <a href="#">Notice of Non-Compliant Amendment</a>.
          </p>

          <h2>Response deadlines</h2>
          <p>
            By law, most replies to office actions (official letters) must be
            received within six months from the date the office action was
            mailed. Office actions almost always shorten the time period within
            which you can file a response without paying an extension-of-time
            fee. The shortened period is typically either two or three months,
            depending on the type of office action, with different response
            periods in certain circumstances. There are no extensions to the
            six-month legal reply window other than for notices without such a
            limit. If you do not submit an acceptable, timely response to an
            office action or other official letter, your application will be
            abandoned.
          </p>

          <h2>How to respond to official letters</h2>
          <p>
            The USPTO conducts business in writing. Submit replies to office
            actions and other official letters in any of these ways:
          </p>
          <ul>
            <li>
              Online via the USPTO's <a href="#">Patent Center</a> (Registered
              eFilers only)
            </li>
            <li>
              <a href="#">Postal mail</a>
            </li>
            <li>Faxed to the official USPTO fax number: 571-273-8300</li>
            <li>
              <a href="#">Hand-carried</a> to the USPTO customer service window
              in Alexandria, Virginia
            </li>
          </ul>
          <p>
            Electronic responses submitted in <a href="#">Patent Center</a>{" "}
            (registered eFilers only) receive an Eastern Time stamp. Any
            submission arriving by 11:59 p.m. ET will be granted that day's
            filing date (regardless of "normal" USPTO business hours).
            Postal-mailed responses with sufficient postage, sent as first-class
            mail and deposited with the United States Postal Service will
            receive the benefit of the date of deposit for timeliness purposes
            if accompanied by a signed, completed{" "}
            <a href="#">certificate of mailing</a>. Similarly, responses faxed
            to the official USPTO fax number will be credited with the date of
            transmission if a signed, completed{" "}
            <a href="#">certificate of transmission</a> accompanies it. You
            should keep a copy of the response with the signed certificate in
            case the response is lost or not received by the USPTO.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default RespondOfficeActions;
