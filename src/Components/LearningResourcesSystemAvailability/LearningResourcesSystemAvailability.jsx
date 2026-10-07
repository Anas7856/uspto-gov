import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesSystemAvailability = () => (
  <InfoPage
    title={"System availability"}
    intro={["Check the current availability of USPTO electronic systems."]}
    sections={[{"heading": "Plan your filings", "text": ["See planned maintenance windows and system status so you can schedule your filings accordingly."]}, {"heading": "Avoid surprises", "text": ["Checking availability before a deadline helps you avoid last-minute issues."]}]}
    related={[{"label": "Fees and payment", "to": "/learning-resources/fees-payment"}, {"label": "Training and events", "to": "/learning-resources/training-events"}, {"label": "More tools & links", "to": "/learning-resources/more-tools"}, {"label": "Operational status", "to": "/learning-resources/operational-status"}]}
  />
);

export default LearningResourcesSystemAvailability;
