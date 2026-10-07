import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesGuidance = () => (
  <InfoPage
    title={"Guidance documents"}
    intro={["Find official guidance documents that explain USPTO practices and procedures."]}
    sections={[{"heading": "What guidance provides", "text": ["Guidance documents help applicants and practitioners understand how to comply with USPTO requirements."]}, {"heading": "Staying compliant", "text": ["Following current guidance can help your submissions move through the process more smoothly."]}]}
    related={[{"label": "Open data portal", "to": "/learning-resources/open-data"}, {"label": "Federal Register Notices", "to": "/learning-resources/federal-register"}, {"label": "Official Gazette", "to": "/learning-resources/official-gazette"}, {"label": "XML resources", "to": "/learning-resources/xml-resources"}, {"label": "Classification", "to": "/learning-resources/classification"}, {"label": "Statistics and dashboards", "to": "/learning-resources/statistics"}]}
  />
);

export default LearningResourcesGuidance;
