import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksTransferOwnership = () => (
  <InfoPage
    title={"Transferring ownership"}
    intro={["Trademarks can be assigned to a new owner, and assignments should be recorded with the USPTO."]}
    sections={[{"heading": "Recording assignments", "text": ["Recording an assignment with the Assignment Recordation Branch keeps the ownership record accurate and public."]}, {"heading": "Why record", "text": ["A clear ownership record supports licensing, financing, and enforcement of your trademark rights."]}]}
    related={[{"label": "How to renew", "to": "/trademarks/renew"}, {"label": "Maintenance forms", "to": "/trademarks/maintenance-forms"}, {"label": "Trademark litigation", "to": "/trademarks/litigation"}, {"label": "Post-registration audits", "to": "/trademarks/post-registration-audits"}]}
  />
);

export default TrademarksTransferOwnership;
