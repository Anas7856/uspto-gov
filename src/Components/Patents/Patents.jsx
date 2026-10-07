import React from "react";
import InfoPage from "../common/InfoPage";

const Patents = () => (
  <InfoPage
    title={"Patents"}
    intro={"Everything you need to know about U.S. and international patents - from understanding the basics to applying, maintaining, and protecting your rights."}
    columns={[{"heading": "Get started", "links": [{"label": "Patent basics", "to": "/patents/basics"}, {"label": "Search our patent database", "to": "/patents/search"}, {"label": "How to apply", "to": "/patents/how-to-apply"}, {"label": "Patent videos", "to": "/patents/videos"}]}, {"heading": "Apply for patent", "links": [{"label": "Apply online", "to": "/patents/apply-online"}, {"label": "Checking application status", "to": "/patents/application-status"}, {"label": "Patent forms", "to": "/patents/forms"}, {"label": "Respond to office actions", "to": "/patents/respond-office-actions"}, {"label": "Respond to notices", "to": "/patents/respond-notices"}, {"label": "File a petition", "to": "/patents/file-petition"}, {"label": "Avoid scams and fraud", "to": "/patents/scams"}]}, {"heading": "Maintain your patent", "links": [{"label": "How to renew", "to": "/patents/renew"}, {"label": "Maintenance fees", "to": "/patents/maintenance-fees"}, {"label": "Patent litigation", "to": "/patents/litigation"}, {"label": "Correct your patent", "to": "/patents/correct"}, {"label": "Transfer ownership", "to": "/patents/transfer-ownership"}]}, {"heading": "Patent practitioners", "links": [{"label": "Patent Center", "to": "/patents/patent-center"}, {"label": "Patent fees", "to": "/patents/fees"}, {"label": "MPEP manual", "to": "/patents/mpep"}, {"label": "International patent filings", "to": "/patents/international-filings"}, {"label": "Patent Trial and Appeal Board", "to": "/patents/ptab"}, {"label": "Patent forms", "to": "/patents/practitioner-forms"}, {"label": "Order certified copies", "to": "/patents/certified-copies"}, {"label": "Open Data Portal", "to": "/patents/open-data"}, {"label": "Request reexamination", "to": "/patents/reexamination"}]}]}
  />
);

export default Patents;
