import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsPractitionerForms = () => (
  <InfoPage
    title={"Patent forms"}
    intro={["Access the full set of patent forms used by practitioners and applicants."]}
    sections={[{"heading": "About the forms", "text": ["The USPTO provides forms to help applicants make certain submissions. Most forms are provided in PDF format and can be completed on your computer."]}, {"heading": "Using forms correctly", "text": ["In most situations the USPTO does not require use of a form. When you do use one, certification statements on the form must not be altered."]}, {"heading": "Find the right form", "text": ["Forms are organized by category, such as fees, declarations, petitions, and power of attorney. Choose the form that matches your specific need."]}]}
    related={[{"label": "Patent Center", "to": "/patents/patent-center"}, {"label": "Patent fees", "to": "/patents/fees"}, {"label": "MPEP manual", "to": "/patents/mpep"}, {"label": "International patent filings", "to": "/patents/international-filings"}, {"label": "Patent Trial and Appeal Board", "to": "/patents/ptab"}, {"label": "Order certified copies", "to": "/patents/certified-copies"}]}
  />
);

export default PatentsPractitionerForms;
