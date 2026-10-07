import React from "react";
import InfoPage from "../common/InfoPage";

const LearningResourcesKidsEducators = () => (
  <InfoPage
    title={"Kids & educators"}
    intro={["Fun, educational materials that introduce kids and educators to inventions and intellectual property."]}
    sections={[{"heading": "Inspiring young innovators", "text": ["Activities and lesson materials help students understand inventing, creativity, and how IP protects new ideas."]}, {"heading": "For classrooms and camps", "text": ["Educators can find ready-to-use resources to bring inventing and IP concepts to life for young learners."]}]}
    related={[{"label": "Attorneys, agents & paralegals", "to": "/learning-resources/attorneys"}, {"label": "Inventors & entrepreneurs", "to": "/learning-resources/inventors"}, {"label": "Media", "to": "/learning-resources/media"}, {"label": "Researchers & librarians", "to": "/learning-resources/researchers"}, {"label": "Patent & trademark practitioners", "to": "/learning-resources/practitioners"}, {"label": "IP awards and recognition", "to": "/learning-resources/ip-awards"}]}
  />
);

export default LearningResourcesKidsEducators;
