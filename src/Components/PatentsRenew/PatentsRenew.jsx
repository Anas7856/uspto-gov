import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsRenew = () => (
  <InfoPage
    title={"How to renew"}
    intro={["Keep your granted patent in force by paying maintenance fees on time."]}
    sections={[{"heading": "Maintenance fee schedule", "text": ["Utility patents require maintenance fees at 3.5, 7.5, and 11.5 years after the patent is granted. Design and plant patents do not require maintenance fees."]}, {"heading": "Grace period and surcharge", "text": ["Each fee can be paid during a six-month window, with a surcharge applied if you pay during the grace period. Missing the deadline causes the patent to expire."]}, {"heading": "How to pay", "text": ["Maintenance fees can be paid online through Patent Center. Set reminders well in advance so a missed payment does not cost you your rights."]}]}
    related={[{"label": "Maintenance fees", "to": "/patents/maintenance-fees"}, {"label": "Patent litigation", "to": "/patents/litigation"}, {"label": "Correct your patent", "to": "/patents/correct"}, {"label": "Transfer ownership", "to": "/patents/transfer-ownership"}]}
  />
);

export default PatentsRenew;
