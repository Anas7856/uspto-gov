import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsFees = () => (
  <InfoPage
    title={"Patent fees"}
    intro={["Review the current USPTO patent fee schedule and the costs involved in obtaining and keeping a patent."]}
    sections={[{"heading": "Types of fees", "text": ["Common fees include filing, search, and examination fees to start the process, an issue fee when your patent is allowed, and maintenance fees to keep a utility patent in force."]}, {"heading": "Discounts", "text": ["Qualifying small entities and micro entities receive substantial fee reductions. Review the eligibility requirements before claiming a discount."]}, {"heading": "Staying current", "text": ["Fees change periodically. Always check the official fee schedule for the most up-to-date amounts before you file or pay."]}]}
    related={[{"label": "Patent Center", "to": "/patents/patent-center"}, {"label": "MPEP manual", "to": "/patents/mpep"}, {"label": "International patent filings", "to": "/patents/international-filings"}, {"label": "Patent Trial and Appeal Board", "to": "/patents/ptab"}, {"label": "Patent forms", "to": "/patents/practitioner-forms"}, {"label": "Order certified copies", "to": "/patents/certified-copies"}]}
  />
);

export default PatentsFees;
