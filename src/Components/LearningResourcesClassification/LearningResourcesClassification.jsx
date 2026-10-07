import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesClassification = () => (
  <InfoPage
    title={"Classification"}
    intro={["Learn about the classification systems used to organize patents and trademarks."]}
    sections={[{"heading": "Why classification matters", "text": ["Classification systems group inventions and marks into categories, making it easier to search and analyze them."]}, {"heading": "Systems in use", "text": ["Patents use the Cooperative Patent Classification, while trademarks use classes of goods and services."]}]}
    related={[{"label": "Open data portal", "to": "/learning-resources/open-data"}, {"label": "Federal Register Notices", "to": "/learning-resources/federal-register"}, {"label": "Official Gazette", "to": "/learning-resources/official-gazette"}, {"label": "XML resources", "to": "/learning-resources/xml-resources"}, {"label": "Guidance documents", "to": "/learning-resources/guidance"}, {"label": "Statistics and dashboards", "to": "/learning-resources/statistics"}]}
  />
);

export default LearningResourcesClassification;
