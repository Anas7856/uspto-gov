import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyEnforcementPolicy = () => (
  <InfoPage
    title={"Enforcement policy"}
    intro={["IP enforcement policy focuses on combating counterfeiting, piracy, and other violations."]}
    sections={[{"heading": "The challenge", "text": ["Counterfeiting and piracy harm consumers, businesses, and economies. Effective enforcement protects legitimate innovation and creativity."]}, {"heading": "Coordinated response", "text": ["The USPTO coordinates with domestic and international partners to strengthen enforcement and raise awareness."]}]}
    related={[{"label": "Patent policy", "to": "/ip-policy/patent-policy"}, {"label": "Industrial design policy", "to": "/ip-policy/industrial-design-policy"}, {"label": "Trademark policy", "to": "/ip-policy/trademark-policy"}, {"label": "Copyright policy", "to": "/ip-policy/copyright-policy"}, {"label": "Trade secret policy", "to": "/ip-policy/trade-secret-policy"}]}
  />
);

export default IpPolicyEnforcementPolicy;
