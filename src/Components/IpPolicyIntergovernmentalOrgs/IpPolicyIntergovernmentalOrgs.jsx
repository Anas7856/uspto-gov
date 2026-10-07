import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyIntergovernmentalOrgs = () => (
  <InfoPage
    title={"International intergovernmental organizations"}
    intro={["The USPTO works with international intergovernmental organizations to shape global IP standards."]}
    sections={[{"heading": "Key partnerships", "text": ["The office engages with organizations such as the World Intellectual Property Organization to develop treaties and harmonize practices."]}, {"heading": "Why it matters", "text": ["International cooperation helps create more predictable and effective IP protection across borders."]}]}
    related={[{"label": "IP Attache Program", "to": "/ip-policy/ip-attache"}, {"label": "China IP", "to": "/ip-policy/china-ip"}, {"label": "IPR toolkits", "to": "/ip-policy/ipr-toolkits"}]}
  />
);

export default IpPolicyIntergovernmentalOrgs;
