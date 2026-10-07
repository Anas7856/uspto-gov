import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesIpAwards = () => (
  <InfoPage
    title={"IP awards and recognition"}
    intro={["Learn about USPTO awards and recognition programs that celebrate innovation and creativity."]}
    sections={[{"heading": "Recognizing excellence", "text": ["Award programs honor inventors, creators, and others who make outstanding contributions to innovation."]}, {"heading": "Past honorees", "text": ["Discover previous recipients and learn how individuals and organizations can participate."]}]}
    related={[{"label": "Attorneys, agents & paralegals", "to": "/learning-resources/attorneys"}, {"label": "Inventors & entrepreneurs", "to": "/learning-resources/inventors"}, {"label": "Kids & educators", "to": "/learning-resources/kids-educators"}, {"label": "Media", "to": "/learning-resources/media"}, {"label": "Researchers & librarians", "to": "/learning-resources/researchers"}, {"label": "Patent & trademark practitioners", "to": "/learning-resources/practitioners"}]}
  />
);

export default LearningResourcesIpAwards;
