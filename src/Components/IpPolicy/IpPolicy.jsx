import React from "react";
import InfoPage from "../common/InfoPage";

const IpPolicy = () => (
  <InfoPage
    title={"IP Policy"}
    intro={"The USPTO advises on domestic and international intellectual property policy to promote innovation and creativity."}
    columns={[{"heading": "IP policy", "links": [{"label": "Patent policy", "to": "/ip-policy/patent-policy"}, {"label": "Industrial design policy", "to": "/ip-policy/industrial-design-policy"}, {"label": "Trademark policy", "to": "/ip-policy/trademark-policy"}, {"label": "Copyright policy", "to": "/ip-policy/copyright-policy"}, {"label": "Enforcement policy", "to": "/ip-policy/enforcement-policy"}, {"label": "Trade secret policy", "to": "/ip-policy/trade-secret-policy"}]}, {"heading": "International affairs", "links": [{"label": "IP Attache Program", "to": "/ip-policy/ip-attache"}, {"label": "China IP", "to": "/ip-policy/china-ip"}, {"label": "IPR toolkits", "to": "/ip-policy/ipr-toolkits"}, {"label": "International intergovernmental organizations", "to": "/ip-policy/intergovernmental-orgs"}]}, {"heading": "IP research and training", "links": [{"label": "Economic research", "to": "/ip-policy/economic-research"}, {"label": "Global Intellectual Property Academy", "to": "/ip-policy/gipa"}]}, {"heading": "Tools & links", "links": [{"label": "Legislative resources", "to": "/ip-policy/legislative-resources"}, {"label": "IP policy events", "to": "/ip-policy/events"}, {"label": "IPR toolkits", "to": "/ip-policy/ipr-toolkits-tools"}, {"label": "More tools & links", "to": "/ip-policy/more-tools"}]}]}
  />
);

export default IpPolicy;
