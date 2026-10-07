import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesFreeServices = () => (
  <InfoPage
    title={"Access free services"}
    intro={["Browse the wide range of free IP resources and services the USPTO offers to the public."]}
    sections={[{"heading": "Help at no cost", "text": ["From search tools and assistance centers to educational programs, many USPTO services are available free of charge."]}, {"heading": "Where to start", "text": ["Explore programs for inventors, pro bono assistance, and resource centers near you."]}]}
    related={[{"label": "Create an account", "to": "/learning-resources/create-account"}, {"label": "General FAQs", "to": "/learning-resources/faqs"}, {"label": "IP Identifier", "to": "/learning-resources/ip-identifier"}, {"label": "Glossary of terms", "to": "/learning-resources/glossary"}, {"label": "Video Learning Center", "to": "/learning-resources/video-center"}, {"label": "Inspiring stories of innovation", "to": "/learning-resources/stories"}]}
  />
);

export default LearningResourcesFreeServices;
