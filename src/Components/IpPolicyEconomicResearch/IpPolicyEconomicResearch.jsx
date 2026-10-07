import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyEconomicResearch = () => (
  <InfoPage
    title={"Economic research"}
    intro={["The Office of the Chief Economist conducts research on intellectual property and innovation."]}
    sections={[{"heading": "Evidence-based policy", "text": ["Economic research provides data and analysis that inform IP policy decisions and public understanding."]}, {"heading": "Explore the work", "text": ["Reports, datasets, and working papers examine topics such as patenting trends and the economic impact of IP."]}]}
    related={[{"label": "Global Intellectual Property Academy", "to": "/ip-policy/gipa"}]}
  />
);

export default IpPolicyEconomicResearch;
