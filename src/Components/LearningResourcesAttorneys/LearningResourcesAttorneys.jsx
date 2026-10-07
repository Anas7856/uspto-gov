import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesAttorneys = () => (
  <InfoPage
    title={"Attorneys, agents & paralegals"}
    intro={["Find resources tailored for attorneys, agents, and paralegals who practice before the USPTO."]}
    sections={[{"heading": "Tools for practitioners", "text": ["Access rules of practice, filing systems, and professional resources that support your work before the USPTO."]}, {"heading": "Stay current", "text": ["Keep up with procedural changes, training opportunities, and guidance relevant to your practice."]}]}
    related={[{"label": "Inventors & entrepreneurs", "to": "/learning-resources/inventors"}, {"label": "Kids & educators", "to": "/learning-resources/kids-educators"}, {"label": "Media", "to": "/learning-resources/media"}, {"label": "Researchers & librarians", "to": "/learning-resources/researchers"}, {"label": "Patent & trademark practitioners", "to": "/learning-resources/practitioners"}, {"label": "IP awards and recognition", "to": "/learning-resources/ip-awards"}]}
  />
);

export default LearningResourcesAttorneys;
