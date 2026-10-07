import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesStories = () => (
  <InfoPage
    title={"Inspiring stories of innovation"}
    intro={["Read inspiring stories of inventors and entrepreneurs who turned their ideas into reality."]}
    sections={[{"heading": "Real journeys", "text": ["These stories highlight how people used the IP system to protect their ideas and build successful products and businesses."]}, {"heading": "Find motivation", "text": ["Learn from the experiences of others as you pursue your own innovation goals."]}]}
    related={[{"label": "Create an account", "to": "/learning-resources/create-account"}, {"label": "General FAQs", "to": "/learning-resources/faqs"}, {"label": "IP Identifier", "to": "/learning-resources/ip-identifier"}, {"label": "Glossary of terms", "to": "/learning-resources/glossary"}, {"label": "Video Learning Center", "to": "/learning-resources/video-center"}, {"label": "Access free services", "to": "/learning-resources/free-services"}]}
  />
);

export default LearningResourcesStories;
