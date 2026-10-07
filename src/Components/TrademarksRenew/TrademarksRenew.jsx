import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksRenew = () => (
  <InfoPage
    title={"How to renew"}
    intro={["Keep your trademark registration alive by filing maintenance documents at the required intervals."]}
    sections={[{"heading": "Key deadlines", "text": ["Maintenance filings are generally due between the fifth and sixth year after registration, and again every ten years."]}, {"heading": "Consequences of missing deadlines", "text": ["Failing to file the required documents on time can result in cancellation or expiration of your registration."]}]}
    related={[{"label": "Maintenance forms", "to": "/trademarks/maintenance-forms"}, {"label": "Trademark litigation", "to": "/trademarks/litigation"}, {"label": "Transferring ownership", "to": "/trademarks/transfer-ownership"}, {"label": "Post-registration audits", "to": "/trademarks/post-registration-audits"}]}
  />
);

export default TrademarksRenew;
