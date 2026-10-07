import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesCreateAccount = () => (
  <InfoPage
    title={"Create an account"}
    intro={["Create a USPTO.gov account to access electronic filing systems and online services."]}
    sections={[{"heading": "Why you need an account", "text": ["A verified USPTO.gov account is required to file and manage patent and trademark applications electronically."]}, {"heading": "Verifying your identity", "text": ["Account setup includes a one-time identity verification step to protect your filings and prevent fraud."]}]}
    related={[{"label": "General FAQs", "to": "/learning-resources/faqs"}, {"label": "IP Identifier", "to": "/learning-resources/ip-identifier"}, {"label": "Glossary of terms", "to": "/learning-resources/glossary"}, {"label": "Video Learning Center", "to": "/learning-resources/video-center"}, {"label": "Access free services", "to": "/learning-resources/free-services"}, {"label": "Inspiring stories of innovation", "to": "/learning-resources/stories"}]}
  />
);

export default LearningResourcesCreateAccount;
