import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksLitigation = () => (
  <InfoPage
    title={"Trademark litigation"}
    intro={["Trademark disputes may be resolved at the Trademark Trial and Appeal Board or in federal court."]}
    sections={[{"heading": "Board proceedings", "text": ["The TTAB handles oppositions, which challenge marks before registration, and cancellations, which seek to remove existing registrations."]}, {"heading": "Court actions", "text": ["Infringement and other disputes between parties are generally decided in federal court, where remedies such as injunctions and damages may be available."]}]}
    related={[{"label": "How to renew", "to": "/trademarks/renew"}, {"label": "Maintenance forms", "to": "/trademarks/maintenance-forms"}, {"label": "Transferring ownership", "to": "/trademarks/transfer-ownership"}, {"label": "Post-registration audits", "to": "/trademarks/post-registration-audits"}]}
  />
);

export default TrademarksLitigation;
