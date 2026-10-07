import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyIprToolkitsTools = () => (
  <InfoPage
    title={"IPR toolkits"}
    intro={["Access tools and country toolkits that help you protect intellectual property in international markets."]}
    sections={[{"heading": "Practical support", "text": ["These resources support businesses as they protect and enforce IP abroad, with country-specific guidance."]}, {"heading": "Plan ahead", "text": ["Use the toolkits to prepare an IP strategy before expanding into new markets."]}]}
    related={[{"label": "Legislative resources", "to": "/ip-policy/legislative-resources"}, {"label": "IP policy events", "to": "/ip-policy/events"}, {"label": "More tools & links", "to": "/ip-policy/more-tools"}]}
  />
);

export default IpPolicyIprToolkitsTools;
