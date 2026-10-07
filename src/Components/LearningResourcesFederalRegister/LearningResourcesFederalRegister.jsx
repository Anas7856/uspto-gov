import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesFederalRegister = () => (
  <InfoPage
    title={"Federal Register Notices"}
    intro={["Find Federal Register notices related to USPTO rules, fees, and policies."]}
    sections={[{"heading": "Official notices", "text": ["Federal Register notices announce proposed and final rules, fee changes, and other official actions."]}, {"heading": "Public comment", "text": ["Many notices invite public comment, giving stakeholders a chance to weigh in before rules take effect."]}]}
    related={[{"label": "Open data portal", "to": "/learning-resources/open-data"}, {"label": "Official Gazette", "to": "/learning-resources/official-gazette"}, {"label": "XML resources", "to": "/learning-resources/xml-resources"}, {"label": "Classification", "to": "/learning-resources/classification"}, {"label": "Guidance documents", "to": "/learning-resources/guidance"}, {"label": "Statistics and dashboards", "to": "/learning-resources/statistics"}]}
  />
);

export default LearningResourcesFederalRegister;
