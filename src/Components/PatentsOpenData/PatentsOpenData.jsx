import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsOpenData = () => (
  <InfoPage
    title={"Open Data Portal"}
    intro={["The Open Data Portal provides free, bulk access to USPTO patent data."]}
    sections={[{"heading": "What's available", "text": ["You can discover and extract patent file wrapper data and many other datasets without signing in to Patent Center."]}, {"heading": "Who uses it", "text": ["Researchers, developers, businesses, and the public use USPTO open data to study innovation trends and build applications."]}, {"heading": "Getting the data", "text": ["Data is available in bulk and through programmatic access, with documentation to help you work with the formats."]}]}
    related={[{"label": "Patent Center", "to": "/patents/patent-center"}, {"label": "Patent fees", "to": "/patents/fees"}, {"label": "MPEP manual", "to": "/patents/mpep"}, {"label": "International patent filings", "to": "/patents/international-filings"}, {"label": "Patent Trial and Appeal Board", "to": "/patents/ptab"}, {"label": "Patent forms", "to": "/patents/practitioner-forms"}]}
  />
);

export default PatentsOpenData;
