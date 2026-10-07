import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksTeasForms = () => (
  <InfoPage
    title={"TEAS forms"}
    intro={["Access the electronic forms used for trademark filing and correspondence with the USPTO."]}
    sections={[{"heading": "Electronic submissions", "text": ["Electronic filing is required for most trademark submissions, including applications and responses."]}, {"heading": "Choosing the right form", "text": ["Select the form that matches your action, whether you are applying, responding, or maintaining a registration."]}]}
    related={[{"label": "Trademark Center", "to": "/trademarks/trademark-center"}, {"label": "Check status in TSDR", "to": "/trademarks/tsdr"}, {"label": "Trademark Trial and Appeal Board", "to": "/trademarks/ttab"}, {"label": "ID manual", "to": "/trademarks/id-manual"}, {"label": "Request expungement or reexamination proceeding", "to": "/trademarks/expungement"}, {"label": "Madrid protocol international protection", "to": "/trademarks/madrid-protocol"}]}
  />
);

export default TrademarksTeasForms;
