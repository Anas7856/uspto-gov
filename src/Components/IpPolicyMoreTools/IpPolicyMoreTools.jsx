import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyMoreTools = () => (
  <InfoPage
    title={"More tools & links"}
    intro={["Discover additional IP policy tools, data, and resources from the USPTO."]}
    sections={[{"heading": "More resources", "text": ["Find links to data, reports, and tools that support research, advocacy, and informed decision-making on IP policy."]}]}
    related={[{"label": "Legislative resources", "to": "/ip-policy/legislative-resources"}, {"label": "IP policy events", "to": "/ip-policy/events"}, {"label": "IPR toolkits", "to": "/ip-policy/ipr-toolkits-tools"}]}
  />
);

export default IpPolicyMoreTools;
