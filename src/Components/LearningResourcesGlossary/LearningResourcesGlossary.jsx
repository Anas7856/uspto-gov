import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesGlossary = () => (
  <InfoPage
    title={"Glossary of terms"}
    intro={["Look up definitions of common patent, trademark, and intellectual property terms."]}
    sections={[{"heading": "Understand the language", "text": ["The glossary explains technical and legal terms in plain language to help you navigate the IP system."]}, {"heading": "Use it alongside other tools", "text": ["Refer to the glossary whenever you encounter unfamiliar terms in forms, notices, or guidance."]}]}
    related={[{"label": "Create an account", "to": "/learning-resources/create-account"}, {"label": "General FAQs", "to": "/learning-resources/faqs"}, {"label": "IP Identifier", "to": "/learning-resources/ip-identifier"}, {"label": "Video Learning Center", "to": "/learning-resources/video-center"}, {"label": "Access free services", "to": "/learning-resources/free-services"}, {"label": "Inspiring stories of innovation", "to": "/learning-resources/stories"}]}
  />
);

export default LearningResourcesGlossary;
