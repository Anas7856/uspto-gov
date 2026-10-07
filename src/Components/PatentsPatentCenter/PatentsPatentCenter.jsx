import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsPatentCenter = () => (
  <InfoPage
    title={"Patent Center"}
    intro={["Patent Center is the USPTO's unified tool for electronically filing and managing patent applications in one place."]}
    sections={[{"heading": "What you can do", "text": ["Registered users can file new applications, submit follow-on documents, pay fees, track status, and respond to USPTO correspondence - all from a single interface."]}, {"heading": "Key benefits", "text": ["Patent Center supports filing the specification, claims, abstract, and drawings in a single DOCX document, a drag-and-drop upload interface, and separate submission and payment receipts.", "A training mode lets you safely practice filing DOCX and PDF documents before you file for real."]}, {"heading": "Getting access", "text": ["To file, you must create a USPTO.gov account and complete a one-time identity verification. Start early so your registration is ready when you need it."]}]}
    related={[{"label": "Patent fees", "to": "/patents/fees"}, {"label": "MPEP manual", "to": "/patents/mpep"}, {"label": "International patent filings", "to": "/patents/international-filings"}, {"label": "Patent Trial and Appeal Board", "to": "/patents/ptab"}, {"label": "Patent forms", "to": "/patents/practitioner-forms"}, {"label": "Order certified copies", "to": "/patents/certified-copies"}]}
  />
);

export default PatentsPatentCenter;
