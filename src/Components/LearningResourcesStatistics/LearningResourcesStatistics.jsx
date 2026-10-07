import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesStatistics = () => (
  <InfoPage
    title={"Statistics and dashboards"}
    intro={["Explore statistics and interactive dashboards on patent and trademark activity."]}
    sections={[{"heading": "Data visualizations", "text": ["Dashboards present data on filings, pendency, and other metrics in an easy-to-understand visual format."]}, {"heading": "Understanding trends", "text": ["Use the statistics to understand processing times and activity trends across the IP system."]}]}
    related={[{"label": "Open data portal", "to": "/learning-resources/open-data"}, {"label": "Federal Register Notices", "to": "/learning-resources/federal-register"}, {"label": "Official Gazette", "to": "/learning-resources/official-gazette"}, {"label": "XML resources", "to": "/learning-resources/xml-resources"}, {"label": "Classification", "to": "/learning-resources/classification"}, {"label": "Guidance documents", "to": "/learning-resources/guidance"}]}
  />
);

export default LearningResourcesStatistics;
