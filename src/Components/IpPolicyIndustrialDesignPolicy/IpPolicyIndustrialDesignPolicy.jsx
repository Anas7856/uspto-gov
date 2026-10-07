import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyIndustrialDesignPolicy = () => (
  <InfoPage
    title={"Industrial design policy"}
    intro={["Industrial design policy covers the protection of the ornamental design of useful articles."]}
    sections={[{"heading": "What's covered", "text": ["Design protection focuses on how a product looks rather than how it works, complementing utility protection for the same product."]}, {"heading": "Policy work", "text": ["The USPTO engages on design-related policy both domestically and through international agreements."]}]}
    related={[{"label": "Patent policy", "to": "/ip-policy/patent-policy"}, {"label": "Trademark policy", "to": "/ip-policy/trademark-policy"}, {"label": "Copyright policy", "to": "/ip-policy/copyright-policy"}, {"label": "Enforcement policy", "to": "/ip-policy/enforcement-policy"}, {"label": "Trade secret policy", "to": "/ip-policy/trade-secret-policy"}]}
  />
);

export default IpPolicyIndustrialDesignPolicy;
