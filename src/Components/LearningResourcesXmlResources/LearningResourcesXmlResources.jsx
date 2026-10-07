import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesXmlResources = () => (
  <InfoPage
    title={"XML resources"}
    intro={["Access XML resources and technical documentation for USPTO bulk data products."]}
    sections={[{"heading": "For developers", "text": ["These resources help developers parse and use USPTO bulk data in XML format."]}, {"heading": "Supporting documentation", "text": ["Documentation describes the data structures and formats to make integration easier."]}]}
    related={[{"label": "Open data portal", "to": "/learning-resources/open-data"}, {"label": "Federal Register Notices", "to": "/learning-resources/federal-register"}, {"label": "Official Gazette", "to": "/learning-resources/official-gazette"}, {"label": "Classification", "to": "/learning-resources/classification"}, {"label": "Guidance documents", "to": "/learning-resources/guidance"}, {"label": "Statistics and dashboards", "to": "/learning-resources/statistics"}]}
  />
);

export default LearningResourcesXmlResources;
