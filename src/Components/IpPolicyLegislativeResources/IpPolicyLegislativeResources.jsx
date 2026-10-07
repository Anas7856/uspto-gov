import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyLegislativeResources = () => (
  <InfoPage
    title={"Legislative resources"}
    intro={["Find legislative materials and resources related to intellectual property policy."]}
    sections={[{"heading": "Staying informed", "text": ["Access testimony, analysis, and resources to understand proposed and enacted IP legislation."]}, {"heading": "For stakeholders", "text": ["These resources help the public and stakeholders follow developments that affect the IP system."]}]}
    related={[{"label": "IP policy events", "to": "/ip-policy/events"}, {"label": "IPR toolkits", "to": "/ip-policy/ipr-toolkits-tools"}, {"label": "More tools & links", "to": "/ip-policy/more-tools"}]}
  />
);

export default IpPolicyLegislativeResources;
