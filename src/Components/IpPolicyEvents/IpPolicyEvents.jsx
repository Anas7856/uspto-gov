import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyEvents = () => (
  <InfoPage
    title={"IP policy events"}
    intro={["Browse upcoming and past IP policy events, roundtables, and public meetings."]}
    sections={[{"heading": "Opportunities to engage", "text": ["Events provide opportunities for stakeholders to learn about and contribute to IP policy discussions."]}, {"heading": "Stay connected", "text": ["Check regularly for new events and recordings of past sessions."]}]}
    related={[{"label": "Legislative resources", "to": "/ip-policy/legislative-resources"}, {"label": "IPR toolkits", "to": "/ip-policy/ipr-toolkits-tools"}, {"label": "More tools & links", "to": "/ip-policy/more-tools"}]}
  />
);

export default IpPolicyEvents;
