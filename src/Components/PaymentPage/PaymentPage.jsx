import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import receiptLogo from "../../assets/main.avif";
import "./PaymentPage.scss";

// Fake barcode: text se hamesha same bars banate hain
const makeBars = (text) => {
  let seed = 0;
  for (let i = 0; i < text.length; i++) {
    seed = (seed * 31 + text.charCodeAt(i)) >>> 0;
  }
  const bars = [];
  let x = 0;
  for (let i = 0; i < 64; i++) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const w = ((seed >>> 24) % 3) + 1;
    if (i % 2 === 0) bars.push({ x, w });
    x += w;
  }
  return { bars, width: x };
};

const Barcode = ({ value }) => {
  const { bars, width } = makeBars(value);
  return (
    <div className="barcode">
      <svg
        viewBox={`0 0 ${width} 60`}
        preserveAspectRatio="none"
        width="100%"
        height="60"
      >
        {bars.map((b, i) => (
          <rect key={i} x={b.x} y="0" width={b.w} height="60" fill="#111" />
        ))}
      </svg>
      <span>{value}</span>
    </div>
  );
};

const formatCard = (v) =>
  v
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();

const formatExpiry = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 4);
  return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
};

const PaymentPage = () => {
  const { slug } = useParams();
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");

  let data = null;
  try {
    data = JSON.parse(localStorage.getItem(`payment:${slug}`));
  } catch (err) {
    data = null;
  }

  const handlePay = (e) => e.preventDefault();

  if (!data) {
    return (
      <>
        <Navbar />
        <section className="pay-page">
          <div className="pay-empty">
            <h2>Payment page not found</h2>
            <p>Is link ki details is browser me save nahi hain.</p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const amount = String(data.charges).trim();
  const total = amount.startsWith("$") ? amount : `$${amount}`;
  const receiptNo = `RCT-${(data.serial || slug).toUpperCase()}`;
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const rows = [
    ["Serial Number", data.serial],
    ["Mark", data.mark],
    ["Owner Name", data.owner],
    ["Email", data.email],
    ["Attorney Name", data.attorney],
    ["Service", data.service],
    ["Descriptor", data.descriptor],
  ];

  return (
    <>
      <Navbar />
      <section className="pay-page">
        <div className="pay-page__inner">
          {/* ===== Left: card inputs ===== */}
          <form className="pay-form" onSubmit={handlePay}>
            <h2>Payment details</h2>
            <p className="muted">Enter your card information to continue.</p>

            <div className="field">
              <label htmlFor="card">Card number</label>
              <input
                id="card"
                type="text"
                inputMode="numeric"
                placeholder="1234 5678 9012 3456"
                value={card}
                onChange={(e) => setCard(formatCard(e.target.value))}
              />
            </div>

            <div className="field">
              <label htmlFor="expiry">Expiry date</label>
              <input
                id="expiry"
                type="text"
                inputMode="numeric"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              />
            </div>

            <button type="submit" className="pay-btn">
              Pay {total}
            </button>
          </form>

          {/* ===== Right: receipt ===== */}
          <aside className="receipt">
            <img src={receiptLogo} alt="USPTO" className="receipt__logo" />
            <h3>Payment Receipt</h3>

            <div className="receipt__meta">
              <span>{receiptNo}</span>
              <span>{today}</span>
            </div>

            <dl className="receipt__rows">
              {rows.map(([label, value]) => (
                <div className="row" key={label}>
                  <dt>{label}</dt>
                  <dd>{value || "-"}</dd>
                </div>
              ))}
            </dl>

            <div className="receipt__total">
              <span>Total</span>
              <strong>{total}</strong>
            </div>

            <Barcode value={receiptNo} />
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PaymentPage;
