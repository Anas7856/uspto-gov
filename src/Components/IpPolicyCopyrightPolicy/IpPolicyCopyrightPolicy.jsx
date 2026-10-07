import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicyCopyrightPolicy = () => (
  <InfoPage
    title={"Copyright policy"}
    intro={["The USPTO advises the administration on copyright policy and its role in the innovation economy."]}
    sections={[{"heading": "Advisory role", "text": ["The USPTO provides analysis and advice on copyright issues, including studies and public comment processes."]}, {"heading": "International dimension", "text": ["Copyright policy work includes engagement with international partners on standards and enforcement."]}]}
    related={[{"label": "Patent policy", "to": "/ip-policy/patent-policy"}, {"label": "Industrial design policy", "to": "/ip-policy/industrial-design-policy"}, {"label": "Trademark policy", "to": "/ip-policy/trademark-policy"}, {"label": "Enforcement policy", "to": "/ip-policy/enforcement-policy"}, {"label": "Trade secret policy", "to": "/ip-policy/trade-secret-policy"}]}
  />
);

export default IpPolicyCopyrightPolicy;
