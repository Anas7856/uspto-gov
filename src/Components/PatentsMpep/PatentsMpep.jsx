import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsMpep = () => (
  <InfoPage
    title={"MPEP manual"}
    intro={["The Manual of Patent Examining Procedure (MPEP) is the primary reference on USPTO patent rules and procedures."]}
    sections={[{"heading": "What the MPEP covers", "text": ["The MPEP explains the laws, rules, and procedures that examiners follow when reviewing applications. It is an essential reference for applicants and practitioners too."]}, {"heading": "Using the searchable MPEP", "text": ["The online MPEP is fully searchable and organized by chapter, making it easy to find guidance on specific procedures and requirements."]}, {"heading": "Staying updated", "text": ["The MPEP is revised regularly to reflect changes in law and practice, so always consult the current edition."]}]}
    related={[{"label": "Patent Center", "to": "/patents/patent-center"}, {"label": "Patent fees", "to": "/patents/fees"}, {"label": "International patent filings", "to": "/patents/international-filings"}, {"label": "Patent Trial and Appeal Board", "to": "/patents/ptab"}, {"label": "Patent forms", "to": "/patents/practitioner-forms"}, {"label": "Order certified copies", "to": "/patents/certified-copies"}]}
  />
);

export default PatentsMpep;
