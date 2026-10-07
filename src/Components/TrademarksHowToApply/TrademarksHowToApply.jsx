import React from "react";
import InfoPage from "../common/InfoPage";

const TrademarksHowToApply = () => (
  <InfoPage
    title={"How to apply"}
    intro={["Applying to register a trademark involves several key decisions and an online filing."]}
    sections={[{"heading": "Prepare your application", "text": ["Identify the exact mark, the goods or services it will cover, and the correct filing basis - such as current use in commerce or intent to use."]}, {"heading": "File online", "text": ["Applications are filed electronically through the Trademark Center. Accurate information and a clear description of goods and services help your application proceed smoothly."]}, {"heading": "After you file", "text": ["An examining attorney reviews your application and may issue an office action. Monitor your status and respond to any issues by the deadline."]}]}
    related={[{"label": "Learn about searching", "to": "/trademarks/learn-searching"}, {"label": "Trademark basics", "to": "/trademarks/basics"}, {"label": "Search our trademark database", "to": "/trademarks/search"}, {"label": "Trademark videos", "to": "/trademarks/videos"}]}
  />
);

export default TrademarksHowToApply;
