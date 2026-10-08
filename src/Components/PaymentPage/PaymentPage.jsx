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

const PaymentPage = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let data = null;
  try {
    data = JSON.parse(localStorage.getItem(`payment:${slug}`));
  } catch (err) {
    data = null;
  }

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
  const numericAmount = parseFloat(amount.replace(/[^0-9.]/g, ""));
  const receiptNo = `RCT-${slug.toUpperCase()}`;
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Charges neeche Total me show hote hain, baaki sab yahan
  const rows = [
    ["Serial No", data.serial],
    ["Mark", data.mark],
    ["Name", data.owner],
    ["Email", data.email],
    ["Attorney", data.attorney],
    ["Service", data.service],
    ["Descriptor", data.descriptor],
  ];

  const handlePay = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: numericAmount,
          slug,
          owner: data.owner,
          service: data.service,
        }),
      });

      // json() seedha call nahi karte, khali response pe crash hota hai
      const text = await res.text();
      let json = null;
      try {
        json = text ? JSON.parse(text) : null;
      } catch (parseErr) {
        json = null;
      }

      if (!json) {
        throw new Error(
          `API ne khali/invalid response diya (status ${res.status}). /api/create-payment chal nahi raha.`,
        );
      }
      if (!res.ok || !json.checkout_url) {
        throw new Error(json.error || "Something went wrong");
      }
      window.location.href = json.checkout_url;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="pay-page">
        <div className="pay-page__inner">
          {/* ===== Left: pay button ===== */}
          <form className="pay-form" onSubmit={handlePay}>
            <h2>Payment details</h2>
            <p className="muted">
              Click below to continue to our secure checkout page.
            </p>

            {error && (
              <p style={{ color: "#d33", marginBottom: 12 }}>{error}</p>
            )}

            <button type="submit" className="pay-btn" disabled={loading}>
              {loading ? "Redirecting..." : `Pay ${total}`}
            </button>
          </form>

          {/* ===== Right: receipt ===== */}
          <aside className="receipt">
            <img src={receiptLogo} alt="logo" className="receipt__logo" />
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
