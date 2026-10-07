import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsCertifiedCopies = () => (
  <InfoPage
    title={"Order certified copies"}
    intro={["Order certified copies of patents, applications, and other official USPTO documents."]}
    sections={[{"heading": "When you need them", "text": ["Certified copies are often required for foreign patent filings, court proceedings, and other legal or official purposes."]}, {"heading": "What you can order", "text": ["You can request certified copies of granted patents, patent applications, assignments, and file histories."]}, {"heading": "How to order", "text": ["Orders can be placed online, and fees apply. Processing times vary depending on the type of document requested."]}]}
    related={[{"label": "Patent Center", "to": "/patents/patent-center"}, {"label": "Patent fees", "to": "/patents/fees"}, {"label": "MPEP manual", "to": "/patents/mpep"}, {"label": "International patent filings", "to": "/patents/international-filings"}, {"label": "Patent Trial and Appeal Board", "to": "/patents/ptab"}, {"label": "Patent forms", "to": "/patents/practitioner-forms"}]}
  />
);

export default PatentsCertifiedCopies;
