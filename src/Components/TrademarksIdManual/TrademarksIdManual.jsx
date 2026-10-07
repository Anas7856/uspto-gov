import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksIdManual = () => (
  <InfoPage
    title={"ID manual"}
    intro={["The Trademark ID Manual lists acceptable identifications of goods and services."]}
    sections={[{"heading": "Why use pre-approved descriptions", "text": ["Choosing identifications from the ID Manual can help your application proceed more smoothly and avoid certain requirements."]}, {"heading": "How it's organized", "text": ["Entries are organized by class and description, making it easier to find language that fits your goods or services."]}]}
    related={[{"label": "Trademark Center", "to": "/trademarks/trademark-center"}, {"label": "TEAS forms", "to": "/trademarks/teas-forms"}, {"label": "Check status in TSDR", "to": "/trademarks/tsdr"}, {"label": "Trademark Trial and Appeal Board", "to": "/trademarks/ttab"}, {"label": "Request expungement or reexamination proceeding", "to": "/trademarks/expungement"}, {"label": "Madrid protocol international protection", "to": "/trademarks/madrid-protocol"}]}
  />
);

export default TrademarksIdManual;
