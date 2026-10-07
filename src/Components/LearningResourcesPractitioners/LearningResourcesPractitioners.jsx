import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesPractitioners = () => (
  <InfoPage
    title={"Patent & trademark practitioners"}
    intro={["Resources for registered patent and trademark practitioners."]}
    sections={[{"heading": "Practice resources", "text": ["Find rules of practice, enrollment information, and tools that support registered practitioners."]}, {"heading": "Maintaining good standing", "text": ["Stay informed about professional responsibility requirements and continuing education opportunities."]}]}
    related={[{"label": "Attorneys, agents & paralegals", "to": "/learning-resources/attorneys"}, {"label": "Inventors & entrepreneurs", "to": "/learning-resources/inventors"}, {"label": "Kids & educators", "to": "/learning-resources/kids-educators"}, {"label": "Media", "to": "/learning-resources/media"}, {"label": "Researchers & librarians", "to": "/learning-resources/researchers"}, {"label": "IP awards and recognition", "to": "/learning-resources/ip-awards"}]}
  />
);

export default LearningResourcesPractitioners;
