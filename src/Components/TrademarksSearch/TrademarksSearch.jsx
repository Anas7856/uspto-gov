import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksSearch = () => (
  <InfoPage
    title={"Search our trademark database"}
    intro={["Search registered and pending trademarks using the USPTO's trademark search system."]}
    sections={[{"heading": "Using the search system", "text": ["The trademark search tool lets you look up marks by wording, owner, and other criteria to evaluate whether your mark is available."]}, {"heading": "Evaluating results", "text": ["Assess whether existing marks are similar in appearance, sound, or meaning and whether they cover related goods or services."]}, {"heading": "Before you apply", "text": ["A careful search reduces the risk of a likelihood-of-confusion refusal and helps you choose a stronger, more protectable mark."]}]}
    related={[{"label": "Learn about searching", "to": "/trademarks/learn-searching"}, {"label": "Trademark basics", "to": "/trademarks/basics"}, {"label": "How to apply", "to": "/trademarks/how-to-apply"}, {"label": "Trademark videos", "to": "/trademarks/videos"}]}
  />
);

export default TrademarksSearch;
