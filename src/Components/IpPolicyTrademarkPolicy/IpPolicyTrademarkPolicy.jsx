import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyTrademarkPolicy = () => (
  <InfoPage
    title={"Trademark policy"}
    intro={["The USPTO develops trademark policy to support brand protection and reduce consumer confusion."]}
    sections={[{"heading": "Policy priorities", "text": ["Trademark policy work includes engagement on legislation, rules, and international treaties that affect brand owners and consumers."]}, {"heading": "Protecting the register", "text": ["Policies aim to keep the trademark register accurate and trustworthy for businesses and the public."]}]}
    related={[{"label": "Patent policy", "to": "/ip-policy/patent-policy"}, {"label": "Industrial design policy", "to": "/ip-policy/industrial-design-policy"}, {"label": "Copyright policy", "to": "/ip-policy/copyright-policy"}, {"label": "Enforcement policy", "to": "/ip-policy/enforcement-policy"}, {"label": "Trade secret policy", "to": "/ip-policy/trade-secret-policy"}]}
  />
);

export default IpPolicyTrademarkPolicy;
