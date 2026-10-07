import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksExpungement = () => (
  <InfoPage
    title={"Request expungement or reexamination proceeding"}
    intro={["Request expungement or reexamination to challenge registrations for marks that are not in use."]}
    sections={[{"heading": "Keeping the register accurate", "text": ["These proceedings allow the removal of goods or services from registrations where the mark was never used or is no longer in use."]}, {"heading": "Who can file", "text": ["Any party may request these proceedings, which help ensure the trademark register reflects marks that are actually in use."]}]}
    related={[{"label": "Trademark Center", "to": "/trademarks/trademark-center"}, {"label": "TEAS forms", "to": "/trademarks/teas-forms"}, {"label": "Check status in TSDR", "to": "/trademarks/tsdr"}, {"label": "Trademark Trial and Appeal Board", "to": "/trademarks/ttab"}, {"label": "ID manual", "to": "/trademarks/id-manual"}, {"label": "Madrid protocol international protection", "to": "/trademarks/madrid-protocol"}]}
  />
);

export default TrademarksExpungement;
