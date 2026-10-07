import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksBasics = () => (
  <InfoPage
    title={"Trademark basics"}
    intro={["A trademark protects words, phrases, symbols, or designs that identify the source of goods or services."]}
    sections={[{"heading": "What a trademark does", "text": ["A trademark distinguishes your goods or services from those of others and helps consumers identify the source. Federal registration provides nationwide legal benefits."]}, {"heading": "Trademark vs. other IP", "text": ["Trademarks protect brand identifiers, while patents protect inventions and copyrights protect creative works. Many businesses use more than one type of protection."]}, {"heading": "Maintaining rights", "text": ["Trademark rights can last indefinitely as long as the mark remains in use and the required maintenance documents are filed on time."]}]}
    related={[{"label": "Learn about searching", "to": "/trademarks/learn-searching"}, {"label": "Search our trademark database", "to": "/trademarks/search"}, {"label": "How to apply", "to": "/trademarks/how-to-apply"}, {"label": "Trademark videos", "to": "/trademarks/videos"}]}
  />
);

export default TrademarksBasics;
