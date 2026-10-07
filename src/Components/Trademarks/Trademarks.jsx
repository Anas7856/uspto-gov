import React from "react";
import InfoPage from "../common/InfoPage";

const Trademarks = () => (
  <InfoPage
    title={"Trademarks"}
    intro={"Learn how to search, apply for, and maintain a federal trademark registration to protect your brand."}
    columns={[{"heading": "Get started", "links": [{"label": "Learn about searching", "to": "/trademarks/learn-searching"}, {"label": "Trademark basics", "to": "/trademarks/basics"}, {"label": "Search our trademark database", "to": "/trademarks/search"}, {"label": "How to apply", "to": "/trademarks/how-to-apply"}, {"label": "Trademark videos", "to": "/trademarks/videos"}]}, {"heading": "Apply to register", "links": [{"label": "Apply online", "to": "/trademarks/apply-online"}, {"label": "Checking application status & viewing documents", "to": "/trademarks/application-status"}, {"label": "All trademark forms", "to": "/trademarks/forms"}, {"label": "Respond to office actions", "to": "/trademarks/respond-office-actions"}, {"label": "Protect against scams", "to": "/trademarks/scams"}]}, {"heading": "Maintain your trademark", "links": [{"label": "How to renew", "to": "/trademarks/renew"}, {"label": "Maintenance forms", "to": "/trademarks/maintenance-forms"}, {"label": "Trademark litigation", "to": "/trademarks/litigation"}, {"label": "Transferring ownership", "to": "/trademarks/transfer-ownership"}, {"label": "Post-registration audits", "to": "/trademarks/post-registration-audits"}]}, {"heading": "Trademark practitioners", "links": [{"label": "Trademark Center", "to": "/trademarks/trademark-center"}, {"label": "TEAS forms", "to": "/trademarks/teas-forms"}, {"label": "Check status in TSDR", "to": "/trademarks/tsdr"}, {"label": "Trademark Trial and Appeal Board", "to": "/trademarks/ttab"}, {"label": "ID manual", "to": "/trademarks/id-manual"}, {"label": "Request expungement or reexamination proceeding", "to": "/trademarks/expungement"}, {"label": "Madrid protocol international protection", "to": "/trademarks/madrid-protocol"}, {"label": "Order certified copies", "to": "/trademarks/certified-copies"}]}]}
  />
);

export default Trademarks;
