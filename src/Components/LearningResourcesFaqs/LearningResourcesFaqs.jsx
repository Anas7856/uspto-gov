import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesFaqs = () => (
  <InfoPage
    title={"General FAQs"}
    intro={["Find answers to frequently asked questions about patents, trademarks, and USPTO services."]}
    sections={[{"heading": "Quick answers", "text": ["Browse common questions by topic to find guidance on applying, fees, status, and more."]}, {"heading": "Need more help", "text": ["If you can't find your answer, assistance centers and contact options are available."]}]}
    related={[{"label": "Create an account", "to": "/learning-resources/create-account"}, {"label": "IP Identifier", "to": "/learning-resources/ip-identifier"}, {"label": "Glossary of terms", "to": "/learning-resources/glossary"}, {"label": "Video Learning Center", "to": "/learning-resources/video-center"}, {"label": "Access free services", "to": "/learning-resources/free-services"}, {"label": "Inspiring stories of innovation", "to": "/learning-resources/stories"}]}
  />
);

export default LearningResourcesFaqs;
