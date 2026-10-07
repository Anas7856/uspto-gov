import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyPatentPolicy = () => (
  <InfoPage
    title={"Patent policy"}
    intro={["The USPTO advises on domestic and international patent policy to promote innovation."]}
    sections={[{"heading": "Shaping patent policy", "text": ["The USPTO develops and advises on patent policy, participates in rulemaking, and engages with stakeholders to keep the patent system balanced and effective."]}, {"heading": "International engagement", "text": ["The office works with other countries and organizations to harmonize and strengthen patent systems worldwide."]}]}
    related={[{"label": "Industrial design policy", "to": "/ip-policy/industrial-design-policy"}, {"label": "Trademark policy", "to": "/ip-policy/trademark-policy"}, {"label": "Copyright policy", "to": "/ip-policy/copyright-policy"}, {"label": "Enforcement policy", "to": "/ip-policy/enforcement-policy"}, {"label": "Trade secret policy", "to": "/ip-policy/trade-secret-policy"}]}
  />
);

export default IpPolicyPatentPolicy;
