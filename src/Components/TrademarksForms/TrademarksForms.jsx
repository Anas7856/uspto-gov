import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksForms = () => (
  <InfoPage
    title={"All trademark forms"}
    intro={["Access the forms used to apply for and maintain a federal trademark registration."]}
    sections={[{"heading": "Electronic filing", "text": ["Most trademark filings are submitted electronically through the Trademark Center rather than on paper forms."]}, {"heading": "Common submissions", "text": ["Typical filings include the initial application, responses to office actions, and post-registration maintenance documents."]}]}
    related={[{"label": "Apply online", "to": "/trademarks/apply-online"}, {"label": "Checking application status & viewing documents", "to": "/trademarks/application-status"}, {"label": "Respond to office actions", "to": "/trademarks/respond-office-actions"}, {"label": "Protect against scams", "to": "/trademarks/scams"}]}
  />
);

export default TrademarksForms;
