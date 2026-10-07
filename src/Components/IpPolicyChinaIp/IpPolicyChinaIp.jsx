import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyChinaIp = () => (
  <InfoPage
    title={"China IP"}
    intro={["Find resources and guidance on protecting and enforcing intellectual property rights in China."]}
    sections={[{"heading": "Navigating the China IP system", "text": ["The USPTO provides tools and information to help U.S. businesses understand and work within China's IP laws and procedures."]}, {"heading": "Practical resources", "text": ["Guidance covers registration, enforcement options, and common challenges faced by rights holders."]}]}
    related={[{"label": "IP Attache Program", "to": "/ip-policy/ip-attache"}, {"label": "IPR toolkits", "to": "/ip-policy/ipr-toolkits"}, {"label": "International intergovernmental organizations", "to": "/ip-policy/intergovernmental-orgs"}]}
  />
);

export default IpPolicyChinaIp;
