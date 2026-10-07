import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsReexamination = () => (
  <InfoPage
    title={"Request reexamination"}
    intro={["Reexamination lets the USPTO review the validity of an issued patent based on prior art."]}
    sections={[{"heading": "Ex parte reexamination", "text": ["Both patent owners and third parties can request ex parte reexamination by presenting prior art that raises a substantial new question of patentability."]}, {"heading": "The process", "text": ["If the request is granted, an examiner reviews the challenged claims much like during original examination, and claims may be confirmed, amended, or canceled."]}, {"heading": "Requirements", "text": ["A request must identify the prior art and explain its relevance, and the appropriate fee must be paid when filing."]}]}
    related={[{"label": "Patent Center", "to": "/patents/patent-center"}, {"label": "Patent fees", "to": "/patents/fees"}, {"label": "MPEP manual", "to": "/patents/mpep"}, {"label": "International patent filings", "to": "/patents/international-filings"}, {"label": "Patent Trial and Appeal Board", "to": "/patents/ptab"}, {"label": "Patent forms", "to": "/patents/practitioner-forms"}]}
  />
);

export default PatentsReexamination;
