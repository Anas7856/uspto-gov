import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesInventors = () => (
  <InfoPage
    title={"Inventors & entrepreneurs"}
    intro={["Resources designed for independent inventors and entrepreneurs navigating the IP system."]}
    sections={[{"heading": "Protect your ideas", "text": ["Learn how to evaluate, protect, and commercialize your inventions, from first idea to granted rights."]}, {"heading": "Free help is available", "text": ["The USPTO offers assistance programs, educational materials, and tools specifically for independent inventors and small businesses."]}]}
    related={[{"label": "Attorneys, agents & paralegals", "to": "/learning-resources/attorneys"}, {"label": "Kids & educators", "to": "/learning-resources/kids-educators"}, {"label": "Media", "to": "/learning-resources/media"}, {"label": "Researchers & librarians", "to": "/learning-resources/researchers"}, {"label": "Patent & trademark practitioners", "to": "/learning-resources/practitioners"}, {"label": "IP awards and recognition", "to": "/learning-resources/ip-awards"}]}
  />
);

export default LearningResourcesInventors;
