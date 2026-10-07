import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksTsdr = () => (
  <InfoPage
    title={"Check status in TSDR"}
    intro={["Trademark Status and Document Retrieval (TSDR) lets you check status and download documents."]}
    sections={[{"heading": "Check your status", "text": ["Enter a serial or registration number to see the current status of an application or registration."]}, {"heading": "Retrieve documents", "text": ["TSDR provides access to the documents in a file's record, helping you stay informed about office communications and deadlines."]}]}
    related={[{"label": "Trademark Center", "to": "/trademarks/trademark-center"}, {"label": "TEAS forms", "to": "/trademarks/teas-forms"}, {"label": "Trademark Trial and Appeal Board", "to": "/trademarks/ttab"}, {"label": "ID manual", "to": "/trademarks/id-manual"}, {"label": "Request expungement or reexamination proceeding", "to": "/trademarks/expungement"}, {"label": "Madrid protocol international protection", "to": "/trademarks/madrid-protocol"}]}
  />
);

export default TrademarksTsdr;
