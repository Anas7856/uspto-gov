import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksTrademarkCenter = () => (
  <InfoPage
    title={"Trademark Center"}
    intro={["Trademark Center is the USPTO's modern online system for filing and managing trademark applications."]}
    sections={[{"heading": "A simpler experience", "text": ["Trademark Center guides you through the application with a streamlined, step-by-step process and a single account for all your filings."]}, {"heading": "Manage your portfolio", "text": ["You can file new applications, respond to office actions, and submit maintenance documents from one place."]}]}
    related={[{"label": "TEAS forms", "to": "/trademarks/teas-forms"}, {"label": "Check status in TSDR", "to": "/trademarks/tsdr"}, {"label": "Trademark Trial and Appeal Board", "to": "/trademarks/ttab"}, {"label": "ID manual", "to": "/trademarks/id-manual"}, {"label": "Request expungement or reexamination proceeding", "to": "/trademarks/expungement"}, {"label": "Madrid protocol international protection", "to": "/trademarks/madrid-protocol"}]}
  />
);

export default TrademarksTrademarkCenter;
