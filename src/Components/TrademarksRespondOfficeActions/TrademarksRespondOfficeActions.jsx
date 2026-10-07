import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksRespondOfficeActions = () => (
  <InfoPage
    title={"Respond to office actions"}
    intro={["If an examining attorney issues an office action, you must respond on time to keep your application alive."]}
    sections={[{"heading": "Reading an office action", "text": ["An office action explains any refusals or requirements. Read it carefully to understand exactly what the examining attorney needs from you."]}, {"heading": "Responding", "text": ["Your response must address each issue raised. Missing the deadline can cause your application to be abandoned."]}]}
    related={[{"label": "Apply online", "to": "/trademarks/apply-online"}, {"label": "Checking application status & viewing documents", "to": "/trademarks/application-status"}, {"label": "All trademark forms", "to": "/trademarks/forms"}, {"label": "Protect against scams", "to": "/trademarks/scams"}]}
  />
);

export default TrademarksRespondOfficeActions;
