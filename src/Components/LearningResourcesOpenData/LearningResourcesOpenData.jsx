import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesOpenData = () => (
  <InfoPage
    title={"Open data portal"}
    intro={["Access open USPTO datasets for patents and trademarks through the Open Data Portal."]}
    sections={[{"heading": "Free bulk data", "text": ["Download large datasets for research, analysis, and application development without signing in."]}, {"heading": "Documentation included", "text": ["Technical documentation helps you understand and work with the available data formats."]}]}
    related={[{"label": "Federal Register Notices", "to": "/learning-resources/federal-register"}, {"label": "Official Gazette", "to": "/learning-resources/official-gazette"}, {"label": "XML resources", "to": "/learning-resources/xml-resources"}, {"label": "Classification", "to": "/learning-resources/classification"}, {"label": "Guidance documents", "to": "/learning-resources/guidance"}, {"label": "Statistics and dashboards", "to": "/learning-resources/statistics"}]}
  />
);

export default LearningResourcesOpenData;
