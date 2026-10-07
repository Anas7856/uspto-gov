import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsLitigation = () => (
  <InfoPage
    title={"Patent litigation"}
    intro={["Patent litigation involves enforcing or defending patent rights, usually in federal court."]}
    sections={[{"heading": "Where disputes are decided", "text": ["Patent infringement cases are generally heard in U.S. federal district courts. The International Trade Commission can also address infringing imports."]}, {"heading": "The USPTO's role", "text": ["The USPTO does not resolve infringement disputes between private parties, but its proceedings - such as those at the Patent Trial and Appeal Board - can affect a patent's validity."]}, {"heading": "Remedies", "text": ["A patent owner who prevails may obtain injunctions and monetary damages. Outcomes depend heavily on the facts and the strength of the patent."]}]}
    related={[{"label": "How to renew", "to": "/patents/renew"}, {"label": "Maintenance fees", "to": "/patents/maintenance-fees"}, {"label": "Correct your patent", "to": "/patents/correct"}, {"label": "Transfer ownership", "to": "/patents/transfer-ownership"}]}
  />
);

export default PatentsLitigation;
