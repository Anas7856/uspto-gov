import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesOperationalStatus = () => (
  <InfoPage
    title={"Operational status"}
    intro={["View the USPTO's current operational status, including any closures or service disruptions."]}
    sections={[{"heading": "Current status", "text": ["Find information about office operations, closures, and any events that may affect deadlines or services."]}, {"heading": "Deadline considerations", "text": ["In certain situations, operational disruptions can affect filing deadlines - check current notices for details."]}]}
    related={[{"label": "Fees and payment", "to": "/learning-resources/fees-payment"}, {"label": "Training and events", "to": "/learning-resources/training-events"}, {"label": "More tools & links", "to": "/learning-resources/more-tools"}, {"label": "System availability", "to": "/learning-resources/system-availability"}]}
  />
);

export default LearningResourcesOperationalStatus;
