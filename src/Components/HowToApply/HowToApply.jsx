import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaChevronRight } from "react-icons/fa";
import "./howToApply.scss";

const steps = [
  {
    num: 1,
    id: "step1",
    img: "https://placehold.co/300x210/dde6ef/5a6b7a?text=Step+1",
    title: "Decide if a patent is right for you",
    paras: [
      "A U.S. patent gives the patent owner the right to exclude others from making, using, offering for sale, selling throughout, or importing an invention into the U.S. for a limited time.",
      "A new and useful invention—such as a machine, process, composition of matter, or an article of manufacture—may be eligible for a utility patent. A new, original, and ornamental design for an article of manufacture may be the subject of a design patent. Asexually reproduced distinct and new plant varieties may be the subject of a plant patent or a utility patent.",
      "If none of those describe what you would like to protect as intellectual property (IP), consider another form of IP protection, such as a trademark or copyright. Answer questions in our IP Identifier to help identify your possible types of IP.",
    ],
    resources: [
      {
        title: "What is a patent?",
        desc: "Get answers to basic questions about patents.",
      },
      {
        title: "Access free services",
        desc: "Browse our wide range of IP resources and services.",
      },
    ],
  },
  {
    num: 2,
    id: "step2",
    img: "https://placehold.co/300x210/dde6ef/5a6b7a?text=Step+2",
    title: "Understand application pendency and fees",
    paras: [
      "Before applying, make sure you know about patent application pendency and fees. Total pendency is the time it takes from the date the application is filed to the date the patent is issued or the application is abandoned. The fees involved depend on several factors, including the type of application, actions taken during the processing of an application, and fee discounts. Fees are necessary for the USPTO to examine your application, but do not guarantee a patent grant.",
    ],
    resources: [
      {
        title: "Decide if you should hire legal representation",
        desc: "Preparing a patent application and navigating the USPTO patent prosecution process requires knowledge of patent law and USPTO procedures.",
      },
      {
        title: "See if you qualify for a fee discount",
        desc: "Fee discounts are available to independent inventors and small businesses that meet the requirements. Learn more about these discounts.",
      },
    ],
  },
  {
    num: 3,
    id: "step3",
    img: "https://placehold.co/300x210/dde6ef/5a6b7a?text=Step+3",
    title: "Search for inventions similar to yours",
    paras: [
      "You generally cannot get a patent on an invention that is already publicly available. For instance, if it has already been patented, described in a printed publication, used publicly, on sale, or otherwise available to the public. An invention also generally cannot be patented if it is described in a published or patented U.S. patent application already filed by another inventor before you file an application. Before applying for a patent, search public records for inventions similar to yours.",
    ],
    buttons: ["Patent Public Search"],
    resources: [
      {
        title: "What can be patented?",
        desc: "Learn more about the three types of patents and the conditions an invention must meet for a patent to be issued.",
      },
      {
        title: "Learn how to conduct your search",
        desc: "Plan on spending hours learning the search process, searching, and evaluating results.",
      },
    ],
  },
  {
    num: 4,
    id: "step4",
    img: "https://placehold.co/300x210/dde6ef/5a6b7a?text=Step+4",
    title: "Apply for a patent",
    paras: [
      "You can hire a registered patent attorney or agent to prepare and to file a patent application on your behalf.",
      "However, if you plan to do so on your own, make sure you have everything you need to file a complete application. Before you can file your application in Patent Center, you need to register as an eFiler. This requires creating a USPTO.gov account and going through a one-time identity verification process. All Patent Center users must verify their identity to prevent fraud and ensure that only legitimate, authorized users can file and access their own pending applications. Start this process early so your registration is complete by the time you are ready to file.",
    ],
    buttons: ["Become a registered eFiler", "Access Patent Center"],
    resources: [
      {
        title: "See application requirements",
        desc: "The Applying for Patents guide provides information on the required parts, form, and content of a patent application for each type of patent.",
      },
      {
        title: "Learn about training opportunities",
        desc: "We offer a variety of patent training opportunities for the public, including patent examination, patent quality, and inventor chats.",
      },
      {
        title: "File a patent application on your own",
        desc: "Explore assistance and resources for independent inventors and small businesses.",
      },
      {
        title: "What if I receive a notice of missing parts?",
        desc: "Learn how to respond to the Office of Patent Application Processing.",
      },
    ],
  },
  {
    num: 5,
    id: "step5",
    img: "https://placehold.co/300x210/dde6ef/5a6b7a?text=Step+5",
    title: "Work with a patent examiner",
    paras: [
      "Your application will be assigned to a USPTO patent examiner. The assigned examiner will review your application to determine if it meets the legal requirements to qualify for a patent grant. If you hired a registered patent attorney or agent to represent you, the USPTO will only communicate with the attorney or agent. The USPTO does not simultaneously correspond with you and a legal representative.",
      "Work with the patent examiner by timely responding in writing to office actions and other USPTO notices. In addition to these written responses, consider scheduling an interview with the examiner to discuss and resolve issues.",
    ],
    buttons: ["Application status"],
    resources: [
      {
        title: "What happens during examination?",
        desc: "Learn more about how the assigned examiner will evaluate your application.",
      },
      {
        title: "What if I receive an office action?",
        desc: "Learn how to respond to official letters and meet response deadlines.",
      },
      {
        title: "Learn about patent initiatives",
        desc: "See various programs and initiatives that are available to applicants during each phase of the application process.",
      },
      {
        title: "What if my application is rejected?",
        desc: "If any one of your pending claims is rejected twice, you can file an appeal with the Patent Trial and Appeal Board. Learn more.",
      },
    ],
  },
  {
    num: 6,
    id: "step6",
    img: "https://placehold.co/300x210/dde6ef/5a6b7a?text=Step+6",
    title: "Receive and maintain your patent",
    paras: [
      "If the examiner determines that your application meets the legal requirements to qualify for a patent grant, you will receive a Notice of Allowance and Fee(s) Due. You must pay the fees shown on the Notice within three months from the mailing date of the Notice. Unlike many other deadlines during examination, this three-month period is not extendable. If you fail to pay on time, your application will be abandoned and you will not receive a patent.",
      "Your patent will be ready for issuance after timely payment of fees due and any other remaining issues are resolved. The USPTO issues electronic patent grants (eGrants), which are available through Patent Center. The term of a utility or plant patent generally lasts 20 years from the date the application was filed in the United States, subject to the payment of maintenance fees and any patent term extension, adjustment, or disclaimer.",
    ],
    buttons: ["Maintenance fees", "Pay fees"],
    resources: [
      { title: "eGrants", desc: "Learn more about electronic patent grants." },
      { title: "Open Data Portal", desc: "Find and extract USPTO data." },
    ],
  },
];

const HowToApply = () => {
  return (
    <>
      <Navbar />

      <main className="hta">
        {/* ===== Intro ===== */}
        <section className="hta-intro">
          <h1>How to apply for a patent</h1>
          <p>
            This step-by-step guide to getting and maintaining a patent starts
            with determining if you need a patent. Jump to specific steps in the
            application process:
          </p>
          <div className="hta-jump">
            {steps.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {s.num}. {s.title} <FaChevronRight />
              </a>
            ))}
          </div>
        </section>

        {/* ===== Steps ===== */}
        {steps.map((step, i) => (
          <section
            key={step.id}
            id={step.id}
            className={`hta-step ${i % 2 === 1 ? "hta-step--alt" : ""}`}
          >
            <div className="hta-step__inner">
              <div className="hta-step__main">
                <img
                  className="hta-step__img"
                  src={step.img}
                  alt={step.title}
                />
                <div className="hta-step__text">
                  <h2>
                    {step.num}. {step.title}
                  </h2>
                  {step.paras.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  {step.buttons && (
                    <div className="hta-step__btns">
                      {step.buttons.map((b) => (
                        <a key={b} href="#" className="btn-blue">
                          {b}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="hta-res">
                {step.resources.map((r) => (
                  <a key={r.title} href="#" className="hta-res__card">
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
};

export default HowToApply;
