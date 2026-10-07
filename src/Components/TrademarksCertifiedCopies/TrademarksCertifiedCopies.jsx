import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksCertifiedCopies = () => (
  <InfoPage
    title={"Order certified copies"}
    intro={["Order certified copies of trademark registrations and related documents."]}
    sections={[{"heading": "When you need them", "text": ["Certified copies are often required for international filings and legal proceedings."]}, {"heading": "How to order", "text": ["Requests can be placed online, and fees apply depending on the type of document."]}]}
    related={[{"label": "Trademark Center", "to": "/trademarks/trademark-center"}, {"label": "TEAS forms", "to": "/trademarks/teas-forms"}, {"label": "Check status in TSDR", "to": "/trademarks/tsdr"}, {"label": "Trademark Trial and Appeal Board", "to": "/trademarks/ttab"}, {"label": "ID manual", "to": "/trademarks/id-manual"}, {"label": "Request expungement or reexamination proceeding", "to": "/trademarks/expungement"}]}
  />
);

export default TrademarksCertifiedCopies;
