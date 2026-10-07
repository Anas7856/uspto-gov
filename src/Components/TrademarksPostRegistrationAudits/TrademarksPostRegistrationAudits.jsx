import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksPostRegistrationAudits = () => (
  <InfoPage
    title={"Post-registration audits"}
    intro={["The USPTO conducts random audits of trademark registrations to verify that marks are actually in use."]}
    sections={[{"heading": "What an audit checks", "text": ["If your registration is selected, you may be asked to provide additional proof of use for the goods or services listed."]}, {"heading": "Responding to an audit", "text": ["Respond by the deadline with the requested evidence. Failing to show use can result in deletion of goods or services, or cancellation."]}]}
    related={[{"label": "How to renew", "to": "/trademarks/renew"}, {"label": "Maintenance forms", "to": "/trademarks/maintenance-forms"}, {"label": "Trademark litigation", "to": "/trademarks/litigation"}, {"label": "Transferring ownership", "to": "/trademarks/transfer-ownership"}]}
  />
);

export default TrademarksPostRegistrationAudits;
