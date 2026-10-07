import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksApplyOnline = () => (
  <InfoPage
    title={"Apply online"}
    intro={["File your trademark application online through the USPTO's Trademark Center."]}
    sections={[{"heading": "Why file online", "text": ["Online filing through Trademark Center is the fastest and most reliable way to apply for a federal trademark registration."]}, {"heading": "A guided experience", "text": ["Trademark Center guides you step by step, helping you choose the right options and reducing common filing errors."]}, {"heading": "Before you start", "text": ["Have your mark, goods and services, filing basis, and a USPTO.gov account ready before you begin."]}]}
    related={[{"label": "Checking application status & viewing documents", "to": "/trademarks/application-status"}, {"label": "All trademark forms", "to": "/trademarks/forms"}, {"label": "Respond to office actions", "to": "/trademarks/respond-office-actions"}, {"label": "Protect against scams", "to": "/trademarks/scams"}]}
  />
);

export default TrademarksApplyOnline;
