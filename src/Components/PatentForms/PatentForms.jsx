import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PatentSidebar from "../PatentSidebar/PatentSidebar";
import { FaTimes } from "react-icons/fa";
import "./patentForms.scss";

// [description, date, code]
const categories = [
  {
    name: "CARES Act Relief",
    forms: [
      ["Certification and Request to Suspend the Requirement in 37 CFR 1.55(f) and (g) for Submission of the Certified Copy Due to the COVID-19 Outbreak", "01/2021", "SB/453"],
    ],
  },
  {
    name: "Appeal",
    forms: [
      ["Notice of Appeal", "11/2023", "AIA/31"],
      ["Request for Oral Hearing Before the Patent Trial and Appeal Board", "11/2023", "AIA/32"],
      ["Pre-Appeal Brief Request for Review", "11/2023", "AIA/33"],
      ["Certification and Transmittal of Appeal Forwarding Fee", "11/2023", "AIA/34"],
      ["Petition Fast-Track Appeals Pilot Program", "07/2020", "SB/451"],
      ["Certification and Petition under the SPARK Pilot Program to Expedite an Appeal to the PTAB", "06/2026", "SB/479b"],
    ],
  },
  {
    name: "Application Data Sheet",
    forms: [
      ["Application Data Sheet (37 CFR 1.76)", "01/2022", "AIA/14"],
    ],
  },
  {
    name: "Certificate of Mailing/Transmission",
    forms: [
      ["Certificate of Mailing or Transmission under 37 CFR 1.8", "11/2023", "SB/92"],
    ],
  },
  {
    name: "Customer Number",
    forms: [
      ["Request for Customer Number Data Change", "12/2008", "SB/124"],
      ["Request for Customer Number", "11/2025", "SB/125"],
    ],
  },
  {
    name: "Design",
    forms: [
      ["For Design Applications Only: Continued Prosecution Application (CPA) Request Transmittal", "11/2023", "SB/29"],
      ["For Design Applications Only: Receipt For Facsimile Transmitted CPA", "07/2007", "SB/29A"],
    ],
  },
  {
    name: "Entity Status",
    forms: [
      ["Certification of Micro Entity Status - Gross Income Basis", "07/2014", "SB/15A"],
      ["Certification of Micro Entity Status - Institution of Higher Education Basis", "07/2014", "SB/15B"],
      ["Notification of Loss of Micro Entity Status", "07/2026", "SB/460"],
      ["Notification of Loss of Small Entity Status", "07/2026", "SB/474"],
      ["Micro Entity - Response to Notice of Payment Deficiency & Show Cause Order - Options II & III", "07/2026", "SB/143"],
      ["Small Entity - Response to Notice of Payment Deficiency & Show Cause Order - Options II & III", "07/2026", "SB/142"],
      ["Assessed Fine Payment", "07/2026", "SB/477"],
    ],
  },
  {
    name: "Express Abandonment",
    forms: [
      ["Express Abandonment Under 37 CFR 1.138", "05/2022", "AIA/24"],
      ["Petition for Express Abandonment to Avoid Publication under 37 CFR 1.138(c)", "05/2022", "AIA/24A"],
      ["Petition for Express Abandonment to Obtain a Refund", "01/2025", "AIA/24B"],
    ],
  },
  {
    name: "Fees",
    forms: [
      ["Patent Application Fee Determination Record", "01/2025", "SB/06"],
      ["Multiple Dependent Claim Fee Calculation Sheet", "07/2007", "SB/07"],
      ["Fee Transmittal", "01/2025", "SB/17"],
      ["Processing Fee Under 37 CFR 1.17(i) Transmittal", "01/2025", "SB/17i"],
      ["Petition Fee Under 37 CFR 1.17(f), (g) & (h) Transmittal", "01/2025", "AIA/17p"],
      ["Maintenance Fee Transmittal", "11/2023", "SB/45"],
      ["Maintenance Fee Address Indication Form", "11/2021", "AIA/47"],
      ["Reissue Application Fee Transmittal", "01/2025", "SB/56"],
      ["Issue Fee Transmittal (Part B) of the Notice of Allowance and Fee(s) Due Form", "03/2026", "PTOL-85"],
      ["Deposit Account Order Form", "07/2009", "SB/91"],
      ["Certification and Request to Treat an Application Filed During a Designated Significant Unplanned Outage", "11/2023", "SB/448"],
      ["Credit Card Payment Form and Instructions", "11/2023", "PTO-2038"],
      ["Request for Refund", "09/2025", "PTO-2326"],
    ],
  },
  {
    name: "Information Disclosure Statement",
    forms: [
      ["Information Disclosure Statement by Applicant - Patent Center auto-load (RECOMMENDED)", "03/2026", "SB/08 - Patent Center"],
      ["Information Disclosure Statement by Applicant [page 1]", "06/2015", "SB/08a"],
      ["Information Disclosure Statement by Applicant [page 2]", "06/2015", "SB/08b"],
      ["Information Disclosure Statement Size Fee - Written Assertion Under 37 CFR 1.98", "01/2025", "SB/08c"],
      ["Certification and Request for Consideration of an IDS Filed After Payment of the Issue Fee (QPIDS)", "01/2025", "SB/09"],
      ["Patent Term Adjustment Statement Under 37 CFR 1.704(d)", "02/2023", "SB/133"],
    ],
  },
  {
    name: "Inventor's Oath or Declaration",
    forms: [
      ["Declaration (37 CFR 1.63) For Utility Or Design Application Using An ADS", "06/2012", "AIA/01"],
      ["Translations of Declaration (37 CFR 1.63) For Utility Or Design Application", "06/2012", "AIA/01 Translations"],
      ["Substitute Statement In Lieu Of An Oath Or Declaration For Utility Or Design Patent Application", "06/2015", "AIA/02"],
      ["Declaration (37 CFR 1.63) For Plant Application Using An ADS", "09/2022", "AIA/03"],
      ["Substitute Statement For Plant Patent Application", "06/2015", "AIA/04"],
      ["Reissue Application Declaration By The Inventor", "06/2012", "AIA/05"],
      ["Reissue Application Declaration By The Assignee", "09/2020", "AIA/06"],
      ["Substitute Statement For Reissue Patent Application", "06/2015", "AIA/07"],
      ["Declaration For Utility Or Design Patent Application (37 CFR 1.63)", "11/2015", "AIA/08"],
      ["Plant Patent Application (35 U.S.C. 161) Declaration (37 CFR 1.162)", "06/2012", "AIA/09"],
      ["Supplemental Sheet For Declaration", "06/2012", "AIA/10"],
      ["Substitute Statement Supplemental Sheet", "06/2012", "AIA/11"],
    ],
  },
  {
    name: "Nonpublication Request",
    forms: [
      ["Nonpublication Request under 35 U.S.C. 122(b)(2)(B)(i)", "07/2009", "SB/35"],
      ["Rescission of Previous Nonpublication Request", "11/2023", "SB/36"],
    ],
  },
  {
    name: "Patent Cooperation Treaty (PCT)",
    forms: [
      ["Petition for Revival of an International Application Designating the U.S. Abandoned Unintentionally", "08/2026", "SB/64PCT"],
      ["Transmittal Letter to the U.S. Designated/Elected Office (DO/EO/US)", "01/2025", "PTO-1390"],
      ["Transmittal Letter to the U.S. Receiving Office (RO/US)", "01/2017", "PTO-1382"],
    ],
  },
  {
    name: "Patent Electronic System Verification Form",
    forms: [
      ["Patent Electronic System Verification Form", "01/2019", "PTO-2042a"],
    ],
  },
  {
    name: "Petitions",
    forms: [
      ["Petition for Extension of Time Under 37 CFR 1.136(a) for nonprovisional applications", "02/2026", "AIA/22"],
      ["Petition for Extension of Time Under 37 CFR 1.136(a) in a Provisional Application", "02/2026", "AIA/22p"],
      ["Petition for Extension of Time Under 37 CFR 1.136(b)", "11/2025", "SB/23"],
      ["Petition for Revival of an Application Abandoned Unintentionally under 37 CFR 1.137(a)", "08/2026", "SB/64"],
      ["Petition for Revival (Failure to Notify of Foreign/International Filing) 37 CFR 1.137(f)", "08/2026", "SB/64a"],
      ["Petition to Accept an Unintentionally Delayed Claim (37 CFR 1.78(c)/(e))", "08/2026", "SB/445"],
      ["Petition to Accept an Unintentionally Delayed Claim for Right of Priority (37 CFR 1.55(e))", "08/2026", "SB/458"],
      ["Petition to Restore the Benefit of a Provisional Application (37 CFR 1.78(b))", "08/2026", "SB/459"],
      ["Petition to Accept Unintentionally Delayed Payment of Maintenance Fee (37 CFR 1.378(b))", "08/2026", "SB/66"],
      ["Petition to Make Special Based on Age (37 CFR 1.102(c)(1))", "01/2019", "SB/130"],
      ["Petition to Make Special under the Accelerated Examination Program", "03/2026", "SB/28"],
      ["Request for Withdrawal as Attorney or Agent and Change of Correspondence Address", "04/2013", "AIA/83"],
    ],
  },
  {
    name: "Pilot Programs",
    forms: [
      ["SPARK Pilot Program to Expedite Examination of an Application", "06/2026", "SB/479a"],
      ["SPARK Pilot Program to Expedite an Appeal to the PTAB", "06/2026", "SB/479b"],
      ["Streamlined Claim Set Pilot Program", "06/2026", "SB/472"],
      ["QPIDS Pilot Program", "01/2025", "SB/09"],
      ["Petition Fast-Track Appeals Pilot Program", "07/2020", "SB/451"],
      ["PIER Pilot Program - Reply to Requirement for Information under 37 CFR 1.105", "04/2026", "SB/478"],
    ],
  },
  {
    name: "Power of Attorney and Change of Correspondence Address",
    forms: [
      ["Power Of Attorney To Prosecute Applications Before The USPTO", "07/2017", "AIA/80"],
      ["Power Of Attorney To One Or More Of The Joint Inventors", "07/2012", "AIA/81"],
      ["Patent - Power of Attorney or Revocation With a New Power of Attorney", "02/2025", "AIA/81A"],
      ["Reexamination/Supplemental Examination - Patent Owner Power of Attorney", "07/2013", "AIA/81B"],
      ["Reexamination - Third Party Requester Power of Attorney", "12/2008", "SB/81C"],
      ["Transmittal For Power of Attorney To One Or More Registered Practitioners", "07/2013", "AIA/82"],
      ["Change of Correspondence Address Application", "05/2023", "AIA/122"],
      ["Change of Correspondence Address Patent", "06/2015", "AIA/123"],
    ],
  },
  {
    name: "Prioritized Examination",
    forms: [
      ["Certification and Request for Prioritized Examination Under 37 CFR 1.102(e)", "11/2023", "AIA/424"],
    ],
  },
  {
    name: "Priority Document Exchange",
    forms: [
      ["Request to Retrieve Electronic Priority Application(s)", "02/2023", "SB/38"],
      ["Authorization to Permit Access to Application-As-Filed by Participating Offices", "11/2015", "SB/39"],
    ],
  },
  {
    name: "Provisional Patent Application",
    forms: [
      ["Provisional Application for Patent Cover Sheet - Patent Center auto-load (RECOMMENDED)", "03/2026", "SB/16 - Patent Center"],
      ["Provisional Application for Patent Cover Sheet", "01/2025", "SB/16"],
      ["Petition for Extension of Time in a Provisional Application", "02/2026", "AIA/22p"],
    ],
  },
  {
    name: "Reexamination",
    forms: [
      ["Request for Ex Parte Reexamination Transmittal Form", "11/2025", "SB/57"],
    ],
  },
  {
    name: "Reissue Application",
    forms: [
      ["Reissue Application: Consent of Assignee; Statement of Non-Assignment", "09/2026", "AIA/53"],
    ],
  },
  {
    name: "Request for Continued Examination (RCE)",
    forms: [
      ["RCE Transmittal (Submitted Only via Patent Center) - RECOMMENDED", "03/2026", "SB/30 Patent Center"],
      ["Request for Continued Examination (RCE) Transmittal", "11/2023", "SB/30"],
    ],
  },
  {
    name: "Requests Related to Inventorship and Applicant",
    forms: [
      ["Request for Correction Relating to Inventorship or an Inventor Name (37 CFR 1.48)", "07/2026", "AIA/40"],
      ["Request to Correct or Update the Name of the Applicant (37 CFR 1.46(c))", "07/2026", "AIA/41"],
    ],
  },
  {
    name: "Statement Under 37 CFR 3.73(c)",
    forms: [
      ["Statement Under 37 CFR 3.73(c)", "11/2023", "AIA/96"],
    ],
  },
  {
    name: "Statutory Disclaimer",
    forms: [
      ["Statutory Disclaimer Filed in a Patent under 37 CFR 1.321(a)", "09/2026", "SB/43a"],
    ],
  },
  {
    name: "Supplemental Examination",
    forms: [
      ["Request For Supplemental Examination Transmittal Form", "09/2016", "SB/59"],
    ],
  },
  {
    name: "Terminal Disclaimer",
    forms: [
      ["TD (Common Ownership) to Obviate a Provisional Double Patenting Rejection over an Application", "09/2026", "AIA/25"],
      ["TD (Joint Research Agreement) to Obviate a Provisional Rejection over an Application", "09/2026", "AIA/25JRA"],
      ["TD (Common Ownership) to Obviate a Rejection over a Reference Patent", "09/2026", "AIA/26"],
      ["TD (Joint Research Agreement) to Obviate a Rejection over a Reference Patent", "09/2026", "AIA/26JRA"],
      ["TD to Accompany Petition under 37 CFR 1.137 in a Design Application", "09/2026", "AIA/63"],
      ["TD (Common Ownership) in a Patent in view of a Reference Application", "09/2026", "SB/25a"],
      ["TD (Joint Research Agreement) in a Patent in view of a Reference Application", "09/2026", "SB/25aJRA"],
      ["TD (Common Ownership) in a Patent in view of a Reference Patent", "09/2026", "SB/26a"],
      ["TD (Joint Research Agreement) in a Patent in view of a Reference Patent", "09/2026", "SB/26aJRA"],
      ["Terminal Disclaimer Filed in a Patent under 37 CFR 1.321(a)", "09/2026", "SB/43b"],
    ],
  },
  {
    name: "Third-Party Submissions",
    forms: [
      ["Third-Party Submission Under 37 CFR 1.290", "11/2021", "SB/429"],
    ],
  },
  {
    name: "Transmittals and Cover Sheets",
    forms: [
      ["Utility Patent Application Transmittal", "10/2017", "AIA/15"],
      ["Provisional Application for Patent Cover Sheet - Patent Center auto-load (RECOMMENDED)", "03/2026", "SB/16 - Patent Center"],
      ["Provisional Application for Patent Cover Sheet", "01/2025", "SB/16"],
      ["Design Patent Application Transmittal", "10/2017", "AIA/18"],
      ["Plant Patent Application Transmittal", "10/2017", "AIA/19"],
      ["Transmittal Form", "07/2009", "SB/21"],
      ["For Design Applications Only: CPA Request Transmittal", "11/2023", "SB/29"],
      ["Reissue Patent Application Transmittal", "10/2017", "AIA/50"],
      ["Recordation Form Cover Sheet - Patents Only", "06/2012", "PTO-1595"],
    ],
  },
  {
    name: "Miscellaneous Forms",
    forms: [
      ["Request for Deferral of Examination 37 CFR 1.103(d)", "07/2012", "SB/37"],
      ["37 CFR 1.501 Information Disclosure Citation in a Patent", "07/2009", "SB/42"],
      ["Certificate of Correction", "09/2007", "SB/44"],
      ["Power to Inspect/Copy", "11/2015", "AIA/67"],
      ["Request for Access to an Abandoned Application Under 37 CFR 1.14", "08/2025", "SB/68"],
      ["Authorization to Permit Access to Search Results by the EPO", "11/2015", "SB/69"],
      ["Request for Recalculation of Patent Term Adjustment (Safe Harbor)", "05/2018", "SB/134"],
      ["Applicant Initiated Interview Request Form", "07/2016", "PTOL-413A"],
      ["Authorization for Internet Communications in a Patent Application", "07/2026", "SB/439"],
      ["Certification of Pro Bono Representation", "11/2018", "AIA/440"],
      ["Certification and Request to Place the Patent Assignment Abstract of Title into the File", "08/2024", "SB/469"],
      ["Complaint Regarding Invention Promoter", "01/2012", "SB/2048A"],
    ],
  },
];

const PatentForms = () => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      <Navbar />
      <div className="patent-shell">
        <PatentSidebar />
        <main className="patent-content patent-forms">
          {showAlert && (
            <div className="pf-alert">
              <p>
                New and adjusted patent fees took effect on January 19, 2025. The
                relevant forms on this page have been updated accordingly. More
                information, and three Quick Reference Guides are available at{" "}
                <a href="#">Summary of 2025 patent fee changes | USPTO</a>.
                <br />
                <br />
                Form PTO/SB/469 continues to be available for applicants wishing to
                have certain assignment information added to their non-public patent
                application(s).
              </p>
              <button type="button" onClick={() => setShowAlert(false)}>
                <FaTimes />
              </button>
            </div>
          )}

          <h1>Forms for patent applications</h1>
          <h2>Filed on or after September 16, 2012</h2>
          <p>
            All of the forms on this page are for use in patent applications filed on
            or after September 16, 2012. Forms for use in patent applications filed
            before September 16, 2012, may be accessed here.
          </p>

          <div className="pf-notes">
            <strong>NOTES:</strong>
            <ul>
              <li>All forms are provided in Adobe's PDF format. You must have Adobe Acrobat reader installed on your computer.</li>
              <li>The date shown in the middle column indicates when each form was last revised.</li>
              <li>For general assistance, contact the USPTO Contact Center Division at 1-800-786-9199 or 571-272-1000, and select option 2.</li>
              <li>To report a problem with a fillable patent form, please email <a href="mailto:ebc@uspto.gov">ebc@uspto.gov</a>.</li>
            </ul>
          </div>

          {categories.map((cat) => (
            <section key={cat.name} className="pf-cat">
              <h3>{cat.name}</h3>
              <div className="pf-table">
                <div className="pf-row pf-row--head">
                  <span>Description</span>
                  <span>Updated</span>
                  <span>Code</span>
                </div>
                {cat.forms.map((f, i) => (
                  <div className="pf-row" key={i}>
                    <span><a href="#">{f[0]}</a></span>
                    <span>{f[1]}</span>
                    <span>{f[2]}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="pf-important">
            <h3>Important notices and reminders regarding use of patent forms</h3>
            <p>
              The Office provides forms to the public to use in certain situations to
              assist in the filing of correspondence for a certain purpose. Use of the
              forms for purposes for which they were not designed is prohibited.
            </p>
            <p>
              No changes to certification statements on the Office forms may be made.
              The existing text of a form, other than a certification statement, may be
              modified, deleted, or added to, if all text identifying the form as an
              Office form is removed. See 37 CFR 1.4(d)(3).
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PatentForms;
