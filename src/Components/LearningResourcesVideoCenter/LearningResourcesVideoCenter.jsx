import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesVideoCenter = () => (
  <InfoPage
    title={"Video Learning Center"}
    intro={["The Video Learning Center offers tutorials and recorded sessions on USPTO tools and processes."]}
    sections={[{"heading": "Learn on demand", "text": ["Watch step-by-step tutorials on searching, filing, and managing applications whenever it's convenient for you."]}, {"heading": "For every level", "text": ["Content ranges from introductory overviews to detailed walkthroughs for experienced users."]}]}
    related={[{"label": "Create an account", "to": "/learning-resources/create-account"}, {"label": "General FAQs", "to": "/learning-resources/faqs"}, {"label": "IP Identifier", "to": "/learning-resources/ip-identifier"}, {"label": "Glossary of terms", "to": "/learning-resources/glossary"}, {"label": "Access free services", "to": "/learning-resources/free-services"}, {"label": "Inspiring stories of innovation", "to": "/learning-resources/stories"}]}
  />
);

export default LearningResourcesVideoCenter;
