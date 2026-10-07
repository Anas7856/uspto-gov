import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksTtab = () => (
  <InfoPage
    title={"Trademark Trial and Appeal Board"}
    intro={["The Trademark Trial and Appeal Board (TTAB) handles trademark appeals and adversarial proceedings."]}
    sections={[{"heading": "What the Board decides", "text": ["The TTAB hears appeals of refusals to register and conducts oppositions and cancellations between parties."]}, {"heading": "Participating in a proceeding", "text": ["The Board publishes rules and guidance on how to file and respond in a proceeding."]}]}
    related={[{"label": "Trademark Center", "to": "/trademarks/trademark-center"}, {"label": "TEAS forms", "to": "/trademarks/teas-forms"}, {"label": "Check status in TSDR", "to": "/trademarks/tsdr"}, {"label": "ID manual", "to": "/trademarks/id-manual"}, {"label": "Request expungement or reexamination proceeding", "to": "/trademarks/expungement"}, {"label": "Madrid protocol international protection", "to": "/trademarks/madrid-protocol"}]}
  />
);

export default TrademarksTtab;
