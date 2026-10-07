import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsCorrect = () => (
  <InfoPage
    title={"Correct your patent"}
    intro={["After a patent is granted, you may need to correct errors in it."]}
    sections={[{"heading": "Common correction tools", "text": ["A Certificate of Correction fixes minor clerical or typographical errors. A reissue application can correct more significant defects that affect the scope or validity of the patent."]}, {"heading": "Supplemental examination", "text": ["Supplemental examination lets a patent owner ask the USPTO to consider information relevant to the patent, which can help address potential issues before enforcement."]}, {"heading": "Choosing the right path", "text": ["The right mechanism depends on the type and seriousness of the error. Review the requirements carefully or consult a registered practitioner."]}]}
    related={[{"label": "How to renew", "to": "/patents/renew"}, {"label": "Maintenance fees", "to": "/patents/maintenance-fees"}, {"label": "Patent litigation", "to": "/patents/litigation"}, {"label": "Transfer ownership", "to": "/patents/transfer-ownership"}]}
  />
);

export default PatentsCorrect;
