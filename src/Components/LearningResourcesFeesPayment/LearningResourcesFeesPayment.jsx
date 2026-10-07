import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesFeesPayment = () => (
  <InfoPage
    title={"Fees and payment"}
    intro={["Review USPTO fees and learn about accepted methods of payment."]}
    sections={[{"heading": "Fee schedules", "text": ["Find the current fee schedules for patents and trademarks, including discounts for qualifying entities."]}, {"heading": "Paying fees", "text": ["Fees can be paid electronically through USPTO systems using accepted payment methods."]}]}
    related={[{"label": "Training and events", "to": "/learning-resources/training-events"}, {"label": "More tools & links", "to": "/learning-resources/more-tools"}, {"label": "System availability", "to": "/learning-resources/system-availability"}, {"label": "Operational status", "to": "/learning-resources/operational-status"}]}
  />
);

export default LearningResourcesFeesPayment;
