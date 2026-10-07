import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesIpIdentifier = () => (
  <InfoPage
    title={"IP Identifier"}
    intro={["The IP Identifier is an interactive tool that helps you find the right type of IP protection."]}
    sections={[{"heading": "How it works", "text": ["Answer a short series of questions and the tool suggests which forms of intellectual property may fit your situation."]}, {"heading": "A good starting point", "text": ["The IP Identifier is especially helpful if you're new to IP and unsure whether you need a patent, trademark, or copyright."]}]}
    related={[{"label": "Create an account", "to": "/learning-resources/create-account"}, {"label": "General FAQs", "to": "/learning-resources/faqs"}, {"label": "Glossary of terms", "to": "/learning-resources/glossary"}, {"label": "Video Learning Center", "to": "/learning-resources/video-center"}, {"label": "Access free services", "to": "/learning-resources/free-services"}, {"label": "Inspiring stories of innovation", "to": "/learning-resources/stories"}]}
  />
);

export default LearningResourcesIpIdentifier;
