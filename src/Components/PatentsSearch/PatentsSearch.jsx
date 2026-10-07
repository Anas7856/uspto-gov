import React from "react";
import InfoPage from "../common/InfoPage";

const PatentsSearch = () => (
  <InfoPage
    title={"Search our patent database"}
    intro={["Search issued U.S. patents and published patent applications using the USPTO's free search tools."]}
    sections={[{"heading": "Why search before you file", "text": ["Searching existing patents and published applications helps you understand what already exists in your field and whether your invention may be new enough to qualify for a patent.", "An invention generally cannot be patented if it was already patented, described in a printed publication, in public use, or on sale before you file."]}, {"heading": "Tools you can use", "text": ["Patent Public Search is the USPTO's primary tool, offering both a Basic search for quick lookups and an Advanced search for complex queries, filtering, and document tagging.", "Additional resources include the Global Dossier for viewing file histories across major IP offices, and the Open Data Portal for extracting bulk patent data."]}, {"heading": "Plan your search", "text": ["A thorough search takes time. Plan to spend several hours learning the search syntax, running queries, and evaluating the results before you rely on them."]}]}
    related={[{"label": "Patent basics", "to": "/patents/basics"}, {"label": "How to apply", "to": "/patents/how-to-apply"}, {"label": "Patent videos", "to": "/patents/videos"}]}
  />
);

export default PatentsSearch;
