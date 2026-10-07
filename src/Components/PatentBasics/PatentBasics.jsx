import React, { useState } from "react";
import { FaChevronRight, FaPlay } from "react-icons/fa";
import "./patentBasics.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const sections = [
  {
    title: "Patent essentials",
    desc: "Here you'll find what you need to know if you know nothing about patents. We'll take you from \"What is a patent?\" to assistance with the application process.",
    links: [
      "Basic questions about patents",
      "Foreign patents and treaties",
      "Inventor assistance",
      "Invention secrecy",
      "Functions of the agency",
    ],
  },
  {
    title: "Applying for patents",
    desc: "This section dives into more detail about how you can apply for a patent. It covers legal representation, deadlines, fees, and other essential parts of the process.",
    links: [
      "Search for patents",
      "Attorneys and agents",
      "Types of patents",
      "Types of applications",
      "Examination process",
      "Ready to file",
    ],
  },
  {
    title: "Managing your patent",
    desc: "Here we take you from being successfully granted a patent to maintaining your rights. You'll learn how to maintain, enforce, transfer, and protect your rights.",
    links: [
      "Nature of rights",
      "Patent marking",
      "Term extensions",
      "Maintenance fees",
      "Corrections",
      "Ownership",
      "Assignments and licenses",
      "Infringement",
    ],
  },
];

const helpfulLinks = [
  "Access free patent services",
  "Review online patent tools",
  "Overview of the patent process",
  "Identify if you have a patent",
];

const PatentBasics = () => {
  const [tab, setTab] = useState("events");

  return (
    <>
      <Navbar />
      <div className="patent-basics">
        {/* ===== Blue hero ===== */}
        <div className="pb-hero">
          <div className="pb-hero__inner">
            <div className="pb-hero__text">
              <h1>Patent Basics</h1>
              <p>
                If you're new to the process of protecting your rights to your
                invention by applying for a patent, you're in the right place.
                This page will direct you to everything you need to know about
                U.S. and international patents. If what you see doesn't answer
                your questions, we'll show you where to go to dig deeper.
              </p>
            </div>
            <div className="pb-hero__links">
              <h3>Related links</h3>
              <a href="#">Inventors Assistance Center</a>
              <a href="#">Glossary</a>
              <a href="#">Patent FAQs</a>
            </div>
          </div>
        </div>

        {/* ===== Three sections ===== */}
        <div className="pb-sections">
          {sections.map((sec) => (
            <div key={sec.title} className="pb-card">
              {/* image placeholder — baad mein image laga lena */}
              <div className="pb-card__img">
                <span>Image</span>
              </div>
              <h2>{sec.title}</h2>
              <p>{sec.desc}</p>
              <ul>
                {sec.links.map((l) => (
                  <li key={l}>
                    <a href="#">
                      <FaChevronRight /> {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===== Helpful resources ===== */}
        <div className="pb-helpful">
          <h3>Helpful resources for new customers</h3>
          <div className="pb-helpful__links">
            {helpfulLinks.map((l) => (
              <a key={l} href="#">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* ===== Events / News + feature cards ===== */}
        <div className="pb-bottom">
          <div className="pb-bottom__inner">
            {/* Left: tabs */}
            <div className="pb-events">
              <div className="pb-tabs">
                <button
                  className={tab === "events" ? "active" : ""}
                  onClick={() => setTab("events")}
                >
                  Events
                </button>
                <button
                  className={tab === "news" ? "active" : ""}
                  onClick={() => setTab("news")}
                >
                  News
                </button>
              </div>
              <div className="pb-tabs__body">
                <p>There are currently no upcoming events for this topic.</p>
                <button type="button" className="more-btn">
                  More events
                </button>
              </div>
            </div>

            {/* Right: feature cards */}
            <div className="pb-features">
              <a href="#" className="feat">
                <div className="feat__img">
                  <span className="play">
                    <FaPlay />
                  </span>
                </div>
                <div className="feat__body">
                  <span className="feat__tag">Video</span>
                  <p>Watch this video on the cycle of innovation</p>
                </div>
              </a>

              <a href="#" className="feat">
                <div className="feat__img feat__img--blue">
                  <span>Image</span>
                </div>
                <div className="feat__body">
                  <span className="feat__tag">Featured event</span>
                  <p>Sign up today to attend a Path to a Patent session</p>
                </div>
              </a>

              <a href="#" className="feat">
                <div className="feat__img feat__img--teal">
                  <span>Image</span>
                </div>
                <div className="feat__body">
                  <span className="feat__tag">IP Identifier</span>
                  <p>
                    Learn the type of intellectual property you have and how to
                    protect it
                  </p>
                </div>
              </a>

              <a href="#" className="feat">
                <div className="feat__img">
                  <span>Image</span>
                </div>
                <div className="feat__body">
                  <span className="feat__tag">Navigating the IP process</span>
                  <p>Find resources for small businesses and entrepreneurs</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PatentBasics;
