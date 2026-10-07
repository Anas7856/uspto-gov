import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesTrainingEvents = () => (
  <InfoPage
    title={"Training and events"}
    intro={["Register for USPTO training sessions, webinars, and events."]}
    sections={[{"heading": "Learn from experts", "text": ["Training covers topics such as filing, searching, and responding to USPTO communications, led by USPTO staff."]}, {"heading": "Register in advance", "text": ["Sessions often require registration, and you'll typically receive login details by email beforehand."]}]}
    related={[{"label": "Fees and payment", "to": "/learning-resources/fees-payment"}, {"label": "More tools & links", "to": "/learning-resources/more-tools"}, {"label": "System availability", "to": "/learning-resources/system-availability"}, {"label": "Operational status", "to": "/learning-resources/operational-status"}]}
  />
);

export default LearningResourcesTrainingEvents;
