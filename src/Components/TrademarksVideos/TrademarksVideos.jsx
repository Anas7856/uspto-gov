import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksVideos = () => (
  <InfoPage
    title={"Trademark videos"}
    intro={["Watch videos that explain trademarks and walk you through applying and maintaining a registration."]}
    sections={[{"heading": "What you'll find", "text": ["Tutorials cover trademark fundamentals, searching, filing, and responding to office actions, designed for first-time applicants and businesses."]}, {"heading": "Learn at your pace", "text": ["On-demand videos let you revisit topics whenever you need them during your trademark journey."]}]}
    related={[{"label": "Learn about searching", "to": "/trademarks/learn-searching"}, {"label": "Trademark basics", "to": "/trademarks/basics"}, {"label": "Search our trademark database", "to": "/trademarks/search"}, {"label": "How to apply", "to": "/trademarks/how-to-apply"}]}
  />
);

export default TrademarksVideos;
