import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksApplicationStatus = () => (
  <InfoPage
    title={"Checking application status & viewing documents"}
    intro={["Check the status of your trademark application and view related documents."]}
    sections={[{"heading": "Using TSDR", "text": ["The Trademark Status and Document Retrieval system lets you check the current status of an application or registration and download the documents in its record."]}, {"heading": "Stay on schedule", "text": ["Monitoring your status helps you catch office actions and meet important deadlines so your application does not go abandoned."]}]}
    related={[{"label": "Apply online", "to": "/trademarks/apply-online"}, {"label": "All trademark forms", "to": "/trademarks/forms"}, {"label": "Respond to office actions", "to": "/trademarks/respond-office-actions"}, {"label": "Protect against scams", "to": "/trademarks/scams"}]}
  />
);

export default TrademarksApplicationStatus;
