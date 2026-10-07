import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksMadridProtocol = () => (
  <InfoPage
    title={"Madrid protocol international protection"}
    intro={["The Madrid Protocol lets trademark owners seek protection in multiple countries through one international application."]}
    sections={[{"heading": "How it works", "text": ["U.S. applicants can file an international application through the USPTO as the office of origin, then designate the member countries where protection is sought."]}, {"heading": "Managing an international registration", "text": ["A single international registration can be maintained and renewed centrally, simplifying multi-country protection."]}]}
    related={[{"label": "Trademark Center", "to": "/trademarks/trademark-center"}, {"label": "TEAS forms", "to": "/trademarks/teas-forms"}, {"label": "Check status in TSDR", "to": "/trademarks/tsdr"}, {"label": "Trademark Trial and Appeal Board", "to": "/trademarks/ttab"}, {"label": "ID manual", "to": "/trademarks/id-manual"}, {"label": "Request expungement or reexamination proceeding", "to": "/trademarks/expungement"}]}
  />
);

export default TrademarksMadridProtocol;
