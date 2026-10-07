import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsTransferOwnership = () => (
  <InfoPage
    title={"Transfer ownership"}
    intro={["Patents and patent applications can be transferred, or assigned, to another person or company."]}
    sections={[{"heading": "Recording an assignment", "text": ["Assignments should be recorded with the USPTO's Assignment Recordation Branch. Recording establishes a clear, public chain of title for the patent rights."]}, {"heading": "Why it matters", "text": ["A properly recorded assignment protects the new owner's interests and is often required for licensing, financing, or litigation."]}, {"heading": "How to record", "text": ["You can submit assignment documents and cover sheets electronically. A recordation cover sheet identifies the parties and the property being transferred."]}]}
    related={[{"label": "How to renew", "to": "/patents/renew"}, {"label": "Maintenance fees", "to": "/patents/maintenance-fees"}, {"label": "Patent litigation", "to": "/patents/litigation"}, {"label": "Correct your patent", "to": "/patents/correct"}]}
  />
);

export default PatentsTransferOwnership;
