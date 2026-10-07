import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyTradeSecretPolicy = () => (
  <InfoPage
    title={"Trade secret policy"}
    intro={["Trade secret policy addresses the protection of confidential business information."]}
    sections={[{"heading": "What trade secrets protect", "text": ["Trade secrets cover valuable confidential information that gives a business a competitive edge, protected as long as it remains secret."]}, {"heading": "Policy support", "text": ["The USPTO supports trade secret protection through policy work and educational resources."]}]}
    related={[{"label": "Patent policy", "to": "/ip-policy/patent-policy"}, {"label": "Industrial design policy", "to": "/ip-policy/industrial-design-policy"}, {"label": "Trademark policy", "to": "/ip-policy/trademark-policy"}, {"label": "Copyright policy", "to": "/ip-policy/copyright-policy"}, {"label": "Enforcement policy", "to": "/ip-policy/enforcement-policy"}]}
  />
);

export default IpPolicyTradeSecretPolicy;
