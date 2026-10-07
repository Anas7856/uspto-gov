import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesMoreTools = () => (
  <InfoPage
    title={"More tools & links"}
    intro={["Discover additional USPTO tools and resources to support your IP journey."]}
    sections={[{"heading": "Explore more", "text": ["Find links to systems, data, and assistance centers that can help with your patents and trademarks."]}]}
    related={[{"label": "Fees and payment", "to": "/learning-resources/fees-payment"}, {"label": "Training and events", "to": "/learning-resources/training-events"}, {"label": "System availability", "to": "/learning-resources/system-availability"}, {"label": "Operational status", "to": "/learning-resources/operational-status"}]}
  />
);

export default LearningResourcesMoreTools;
