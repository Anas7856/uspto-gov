import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsMaintenanceFees = () => (
  <InfoPage
    title={"Maintenance fees"}
    intro={["Maintenance fees are required to keep most utility patents in force after they are granted."]}
    sections={[{"heading": "How fees are set", "text": ["The fee amount depends on your entity status - large entity, small entity, or micro entity - with qualifying applicants receiving significant discounts."]}, {"heading": "Paying on time", "text": ["Fees are due at 3.5, 7.5, and 11.5 years from grant. Payment can be made during a window ending on those anniversaries, followed by a six-month grace period with a surcharge."]}, {"heading": "If you miss a payment", "text": ["If a maintenance fee is not paid, the patent expires. In limited cases you may file a petition to accept a delayed payment if the delay was unintentional."]}]}
    related={[{"label": "How to renew", "to": "/patents/renew"}, {"label": "Patent litigation", "to": "/patents/litigation"}, {"label": "Correct your patent", "to": "/patents/correct"}, {"label": "Transfer ownership", "to": "/patents/transfer-ownership"}]}
  />
);

export default PatentsMaintenanceFees;
