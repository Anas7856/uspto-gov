import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesOfficialGazette = () => (
  <InfoPage
    title={"Official Gazette"}
    intro={["The Official Gazette is the USPTO's official journal of newly issued patents and published trademarks."]}
    sections={[{"heading": "Weekly publication", "text": ["The Gazette is published weekly in separate editions for patents and trademarks, listing newly issued and published IP."]}, {"heading": "How it's used", "text": ["It serves as an official record and a resource for monitoring newly issued patents and published marks."]}]}
    related={[{"label": "Open data portal", "to": "/learning-resources/open-data"}, {"label": "Federal Register Notices", "to": "/learning-resources/federal-register"}, {"label": "XML resources", "to": "/learning-resources/xml-resources"}, {"label": "Classification", "to": "/learning-resources/classification"}, {"label": "Guidance documents", "to": "/learning-resources/guidance"}, {"label": "Statistics and dashboards", "to": "/learning-resources/statistics"}]}
  />
);

export default LearningResourcesOfficialGazette;
