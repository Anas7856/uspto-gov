import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./AdminDashboard.scss";

const emptyForm = {
  serial: "",
  mark: "",
  owner: "",
  email: "",
  attorney: "",
  service: "",
  charges: "",
  descriptor: "",
};

const fields = [
  { name: "serial", label: "Serial No", type: "text" },
  { name: "mark", label: "Mark", type: "text" },
  { name: "owner", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "attorney", label: "Attorney", type: "text" },
  { name: "service", label: "Service", type: "text" },
  { name: "charges", label: "Charges", type: "text" },
  { name: "descriptor", label: "Descriptor", type: "text" },
];

// Link me "service-fee" default rahega, sirf price change hogi
// 899 => "service-fee-899"
const DEFAULT_SLUG = "amendment-fee";

const makeSlug = (charges) => {
  const price = String(charges)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return price ? `${DEFAULT_SLUG}-${price}` : DEFAULT_SLUG;
};

const makeLink = (charges) => `${window.location.origin}/${makeSlug(charges)}`;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const adminEmail = sessionStorage.getItem("adminEmail");

  const [form, setForm] = useState(emptyForm);
  const [liveLink, setLiveLink] = useState(() => makeLink(""));

  if (!adminEmail) return <Navigate to="/login" replace />;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem(
      `payment:${makeSlug(form.charges)}`,
      JSON.stringify(form),
    );
    setLiveLink(makeLink(form.charges));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("adminEmail");
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <section className="admin-dash">
        <div className="admin-dash__card">
          <div className="admin-dash__top">
            <div>
              <h2>Admin dashboard</h2>
              <p className="muted">Signed in as {adminEmail}</p>
            </div>
            <a href="#" className="logout" onClick={handleLogout}>
              Log out
            </a>
          </div>

          <h3>Payment page details</h3>
          <p className="muted">
            Edits here update the details shown on the payment page. The URL
            updates automatically to match Charges.
          </p>

          <div className="admin-dash__live">
            <span className="live-label">Live link</span>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              {liveLink}
            </a>
          </div>

          <form onSubmit={handleSave}>
            {fields.map((f) => (
              <div className="field" key={f.name}>
                <label htmlFor={f.name}>{f.label}</label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  value={form[f.name]}
                  onChange={handleChange}
                />
              </div>
            ))}

            <button type="submit" className="save-btn">
              Save changes
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminDashboard;
