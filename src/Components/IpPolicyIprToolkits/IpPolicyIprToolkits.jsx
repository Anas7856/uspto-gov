import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyIprToolkits = () => (
  <InfoPage
    title={"IPR toolkits"}
    intro={["Country-specific IPR toolkits provide practical information on protecting your IP in foreign markets."]}
    sections={[{"heading": "What's in a toolkit", "text": ["Each toolkit summarizes local IP laws, registration steps, enforcement options, and useful contacts for a specific country or region."]}, {"heading": "Who should use them", "text": ["Businesses expanding internationally can use toolkits to plan how to protect their IP before entering a new market."]}]}
    related={[{"label": "IP Attache Program", "to": "/ip-policy/ip-attache"}, {"label": "China IP", "to": "/ip-policy/china-ip"}, {"label": "International intergovernmental organizations", "to": "/ip-policy/intergovernmental-orgs"}]}
  />
);

export default IpPolicyIprToolkits;
