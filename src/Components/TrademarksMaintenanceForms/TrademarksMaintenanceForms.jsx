import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksMaintenanceForms = () => (
  <InfoPage
    title={"Maintenance forms"}
    intro={["File the documents required to keep your trademark registration in force."]}
    sections={[{"heading": "What to file", "text": ["Common maintenance filings include a Declaration of Use showing the mark is still in use, and renewal applications at the ten-year marks."]}, {"heading": "Filing on time", "text": ["Each filing has its own window and grace period. Keep track of your dates to avoid losing your registration."]}]}
    related={[{"label": "How to renew", "to": "/trademarks/renew"}, {"label": "Trademark litigation", "to": "/trademarks/litigation"}, {"label": "Transferring ownership", "to": "/trademarks/transfer-ownership"}, {"label": "Post-registration audits", "to": "/trademarks/post-registration-audits"}]}
  />
);

export default TrademarksMaintenanceForms;
