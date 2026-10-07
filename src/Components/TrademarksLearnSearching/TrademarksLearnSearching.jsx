import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksLearnSearching = () => (
  <InfoPage
    title={"Learn about searching"}
    intro={["Before applying for a trademark, search the USPTO database to see whether a similar mark already exists."]}
    sections={[{"heading": "Why searching matters", "text": ["Searching helps you avoid applying for a mark that is confusingly similar to one already registered or pending, which is a common reason applications are refused."]}, {"heading": "What to look for", "text": ["Look beyond identical matches - consider similar spellings, sounds, meanings, and related goods or services that could cause confusion."]}, {"heading": "Next steps", "text": ["If your search raises concerns, you may want to adjust your mark or consult a trademark attorney before filing."]}]}
    related={[{"label": "Trademark basics", "to": "/trademarks/basics"}, {"label": "Search our trademark database", "to": "/trademarks/search"}, {"label": "How to apply", "to": "/trademarks/how-to-apply"}, {"label": "Trademark videos", "to": "/trademarks/videos"}]}
  />
);

export default TrademarksLearnSearching;
