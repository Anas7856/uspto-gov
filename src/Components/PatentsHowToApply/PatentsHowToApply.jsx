import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsHowToApply = () => (
  <InfoPage
    title={"How to apply"}
    intro={["Applying for a patent is a step-by-step process that begins with deciding whether a patent is right for you and ends with maintaining your granted rights."]}
    sections={[{"heading": "The application journey", "text": ["The process moves through six broad stages: deciding if a patent fits your needs, understanding pendency and fees, searching for similar inventions, filing your application, working with an examiner, and finally receiving and maintaining your patent."]}, {"heading": "Decide if a patent is right for you", "text": ["A U.S. patent gives the owner the right to exclude others from making, using, selling, or importing the invention for a limited time.", "Utility, design, and plant patents each protect different kinds of inventions. If none fit, another form of protection such as a trademark or copyright may be more appropriate."]}, {"heading": "Filing and examination", "text": ["You can file on your own or hire a registered patent attorney or agent. After filing, an examiner reviews your application against the legal requirements and may issue office actions you must respond to on time."]}]}
    related={[{"label": "Patent basics", "to": "/patents/basics"}, {"label": "Search our patent database", "to": "/patents/search"}, {"label": "Patent videos", "to": "/patents/videos"}]}
  />
);

export default PatentsHowToApply;
