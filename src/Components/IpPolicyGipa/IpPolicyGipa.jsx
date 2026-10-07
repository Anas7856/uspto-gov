import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyGipa = () => (
  <InfoPage
    title={"Global Intellectual Property Academy"}
    intro={["The Global Intellectual Property Academy (GIPA) provides IP training to officials worldwide."]}
    sections={[{"heading": "Building capacity", "text": ["GIPA offers programs on IP protection, enforcement, and policy to strengthen IP systems around the world."]}, {"heading": "Who attends", "text": ["Participants include government officials, judges, and other professionals involved in IP administration and enforcement."]}]}
    related={[{"label": "Economic research", "to": "/ip-policy/economic-research"}]}
  />
);

export default IpPolicyGipa;
