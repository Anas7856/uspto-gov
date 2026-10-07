import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksScams = () => (
  <InfoPage
    title={"Protect against scams"}
    intro={["Be aware of misleading solicitations and scams that target trademark applicants and owners."]}
    sections={[{"heading": "Recognizing scams", "text": ["Scammers often send official-looking notices requesting payment for unnecessary services. Review any notice carefully and verify it comes from the USPTO."]}, {"heading": "Protect yourself", "text": ["Official USPTO correspondence comes from the United States Patent and Trademark Office in Alexandria, Virginia, and official emails come from the uspto.gov domain."]}]}
    related={[{"label": "Apply online", "to": "/trademarks/apply-online"}, {"label": "Checking application status & viewing documents", "to": "/trademarks/application-status"}, {"label": "All trademark forms", "to": "/trademarks/forms"}, {"label": "Respond to office actions", "to": "/trademarks/respond-office-actions"}]}
  />
);

export default TrademarksScams;
