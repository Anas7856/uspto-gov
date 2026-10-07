import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsInternationalFilings = () => (
  <InfoPage
    title={"International patent filings"}
    intro={["Protect your invention beyond the United States through international filing routes."]}
    sections={[{"heading": "The Patent Cooperation Treaty", "text": ["The PCT lets you file a single international application that can later enter the national phase in many countries, giving you more time to decide where to seek protection."]}, {"heading": "The USPTO's roles", "text": ["For PCT applications, the USPTO can act as a Receiving Office, an International Searching Authority, and an International Preliminary Examining Authority."]}, {"heading": "Other routes", "text": ["You may also file directly in individual countries or use regional systems. Foreign filing can be complex, so plan deadlines carefully."]}]}
    related={[{"label": "Patent Center", "to": "/patents/patent-center"}, {"label": "Patent fees", "to": "/patents/fees"}, {"label": "MPEP manual", "to": "/patents/mpep"}, {"label": "Patent Trial and Appeal Board", "to": "/patents/ptab"}, {"label": "Patent forms", "to": "/patents/practitioner-forms"}, {"label": "Order certified copies", "to": "/patents/certified-copies"}]}
  />
);

export default PatentsInternationalFilings;
