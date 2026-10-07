import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsVideos = () => (
  <InfoPage
    title={"Patent videos"}
    intro={["Watch short videos that explain patents, the application process, and how to use USPTO tools and services."]}
    sections={[{"heading": "What you can learn", "text": ["Video tutorials cover the fundamentals of patents, how to search, how to file in Patent Center, and how to respond to office actions.", "Content is organized for first-time inventors as well as experienced practitioners who want quick refreshers."]}, {"heading": "On-demand and live", "text": ["Many sessions are available on demand so you can learn at your own pace, while live webinars let you ask questions directly to USPTO staff."]}]}
    related={[{"label": "Patent basics", "to": "/patents/basics"}, {"label": "Search our patent database", "to": "/patents/search"}, {"label": "How to apply", "to": "/patents/how-to-apply"}]}
  />
);

export default PatentsVideos;
