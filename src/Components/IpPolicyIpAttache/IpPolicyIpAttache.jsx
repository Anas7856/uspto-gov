import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyIpAttache = () => (
  <InfoPage
    title={"IP Attache Program"}
    intro={["The IP Attache Program places USPTO experts around the world to help U.S. stakeholders protect their IP abroad."]}
    sections={[{"heading": "What attaches do", "text": ["IP attaches advocate for strong, balanced IP systems in their regions and help U.S. businesses navigate local IP protection and enforcement."]}, {"heading": "Getting help", "text": ["Stakeholders can reach out to the attache covering a particular region for guidance on protecting IP in that market."]}]}
    related={[{"label": "China IP", "to": "/ip-policy/china-ip"}, {"label": "IPR toolkits", "to": "/ip-policy/ipr-toolkits"}, {"label": "International intergovernmental organizations", "to": "/ip-policy/intergovernmental-orgs"}]}
  />
);

export default IpPolicyIpAttache;
