import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesMedia = () => (
  <InfoPage
    title={"Media"}
    intro={["Press resources, news, and media contacts for journalists covering the USPTO."]}
    sections={[{"heading": "For the press", "text": ["Find official statements, background information, and data to support accurate reporting on the USPTO."]}, {"heading": "Getting in touch", "text": ["Media representatives can connect with the USPTO's communications team for inquiries."]}]}
    related={[{"label": "Attorneys, agents & paralegals", "to": "/learning-resources/attorneys"}, {"label": "Inventors & entrepreneurs", "to": "/learning-resources/inventors"}, {"label": "Kids & educators", "to": "/learning-resources/kids-educators"}, {"label": "Researchers & librarians", "to": "/learning-resources/researchers"}, {"label": "Patent & trademark practitioners", "to": "/learning-resources/practitioners"}, {"label": "IP awards and recognition", "to": "/learning-resources/ip-awards"}]}
  />
);

export default LearningResourcesMedia;
