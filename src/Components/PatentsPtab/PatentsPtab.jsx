import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsPtab = () => (
  <InfoPage
    title={"Patent Trial and Appeal Board"}
    intro={["The Patent Trial and Appeal Board (PTAB) decides appeals and conducts trials involving patents."]}
    sections={[{"heading": "What the Board does", "text": ["The PTAB hears appeals from applicants whose claims have been rejected by an examiner, and conducts America Invents Act trials such as inter partes review and post-grant review."]}, {"heading": "Filing an appeal", "text": ["If a claim is rejected twice, you may appeal to the Board. The process involves briefs and, in some cases, an oral hearing."]}, {"heading": "Procedures and resources", "text": ["The Board publishes rules, forms, and guidance to help parties understand how proceedings work and how to participate."]}]}
    related={[{"label": "Patent Center", "to": "/patents/patent-center"}, {"label": "Patent fees", "to": "/patents/fees"}, {"label": "MPEP manual", "to": "/patents/mpep"}, {"label": "International patent filings", "to": "/patents/international-filings"}, {"label": "Patent forms", "to": "/patents/practitioner-forms"}, {"label": "Order certified copies", "to": "/patents/certified-copies"}]}
  />
);

export default PatentsPtab;
