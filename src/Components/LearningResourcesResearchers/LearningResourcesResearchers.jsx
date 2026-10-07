import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesResearchers = () => (
  <InfoPage
    title={"Researchers & librarians"}
    intro={["Tools and datasets for researchers and librarians studying patents, trademarks, and innovation."]}
    sections={[{"heading": "Data for research", "text": ["Access bulk datasets, dashboards, and reports that support academic and professional research on IP and innovation."]}, {"heading": "Library resources", "text": ["Patent and Trademark Resource Centers across the country offer additional support for in-depth research."]}]}
    related={[{"label": "Attorneys, agents & paralegals", "to": "/learning-resources/attorneys"}, {"label": "Inventors & entrepreneurs", "to": "/learning-resources/inventors"}, {"label": "Kids & educators", "to": "/learning-resources/kids-educators"}, {"label": "Media", "to": "/learning-resources/media"}, {"label": "Patent & trademark practitioners", "to": "/learning-resources/practitioners"}, {"label": "IP awards and recognition", "to": "/learning-resources/ip-awards"}]}
  />
);

export default LearningResourcesResearchers;
