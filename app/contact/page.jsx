"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [form, setForm] = useState({ first: "", last: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const els = document.querySelectorAll("[data-scroll], [data-scroll-stagger]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.first) errs.first = "Required";
    if (!form.last) errs.last = "Required";
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.phone) errs.phone = "Required";
    if (!form.subject) errs.subject = "Select a subject";
    if (!form.message) errs.message = "Required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  const h = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const faqs = [
    ["How do I get started with Gatimaan Payments?", "Sign up for a free account, complete your KYC, and you'll be onboarded in under 10 minutes. Our team will reach out to help you connect your first providers."],
    ["Which utility providers are supported?", "We support 50+ providers across electricity, water, gas, telecom, broadband and DTH. New providers are added regularly based on demand."],
    ["How does the commission system work for retailers?", "You configure commission percentages per transaction type. Every eligible transaction automatically credits commission to the retailer's wallet — fully transparent, fully logged."],
    ["Is my financial data secure on the platform?", "Yes. All data is encrypted at rest and in transit. Every action is logged with a complete audit trail. We follow Indian financial data compliance standards."],
    ["Can I try the platform before committing?", "Absolutely. Get Started Free — no credit card required. You can also Book a Demo to see the platform in action with our team."],
  ];

  return (
    <>
      <Header />
      <main style={{ paddingTop: 64 }}>
        {/* HERO */}
        <section style={{ position: "relative", padding: "120px 24px 80px", textAlign: "center", background: "var(--bg-base)", overflow: "hidden", minHeight: 360 }}>
          {/* Floating contact icons */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {[
              { ic: "ti-mail", c: "#06B6D4", l: "10%", t: "20%", sz: 44, op: 0.10 },
              { ic: "ti-phone", c: "#4ADE80", l: "85%", t: "18%", sz: 38, op: 0.10 },
              { ic: "ti-message-circle", c: "#F59E0B", l: "82%", t: "65%", sz: 46, op: 0.10 },
              { ic: "ti-map-pin", c: "#8B5CF6", l: "8%", t: "70%", sz: 36, op: 0.10 },
              { ic: "ti-send", c: "#4ADE80", l: "50%", t: "82%", sz: 40, op: 0.10 },
              { ic: "ti-headset", c: "#22C55E", l: "20%", t: "55%", sz: 32, op: 0.08 },
            ].map((it, i) => (
              <i key={i} className={`ti ${it.ic}`} style={{ position: "absolute", left: it.l, top: it.t, color: it.c, fontSize: it.sz, opacity: it.op, animation: `screenFloat ${6 + i}s ease-in-out ${i * 0.5}s infinite` }} aria-hidden="true" />
            ))}
            <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
              <line x1="12%" y1="24%" x2="84%" y2="22%" stroke="rgba(30,140,69,0.05)" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="84%" y1="22%" x2="82%" y2="68%" stroke="rgba(30,140,69,0.05)" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="10%" y1="74%" x2="50%" y2="86%" stroke="rgba(30,140,69,0.05)" strokeWidth="1" strokeDasharray="4 6" />
            </svg>
          </div>
          <div style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
            <div className="badge-pill fade-up" style={{ marginBottom: 22 }}><span className="dot" />GET IN TOUCH</div>
            <h1 className="fade-up" style={{ fontSize: "clamp(30px, 4.8vw, 48px)", fontWeight: 700, marginBottom: 18, animationDelay: ".1s" }}>We'd love to hear from you</h1>
            <p className="fade-up" style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.65, maxWidth: 500, margin: "0 auto", animationDelay: ".2s" }}>Whether you're looking to get started, want to explore a partnership, or have a billing question — reach out and we'll get back to you within 24 hours.</p>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 28 }} className="contact-grid">
            {/* Form */}
            <div data-scroll="left" className="card-hoverable" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-green)", borderRadius: 16, padding: 32, boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 600 }}>Send us a message</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>Fill in the details below and we'll get back to you.</p>
              {sent ? (
                <div style={{ textAlign: "center", padding: 40 }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(30,140,69,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", animation: "checkPop 600ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
                    <i className="ti ti-check" style={{ color: "var(--brand-green-light)", fontSize: 36 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 600 }}>Message sent!</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    <Field label="First Name" placeholder="Enter first name" value={form.first} onChange={h("first")} err={errors.first} />
                    <Field label="Last Name" placeholder="Enter last name" value={form.last} onChange={h("last")} err={errors.last} />
                  </div>
                  <Field label="Email Address" type="email" placeholder="Enter your email address" value={form.email} onChange={h("email")} err={errors.email} />
                  <Field label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={h("phone")} err={errors.phone} />
                  <div style={{ marginBottom: 14 }}>
                    <label className="label">Subject</label>
                    <select className="input" value={form.subject} onChange={h("subject")} style={errors.subject ? { borderColor: "var(--accent-red)" } : {}}>
                      <option value="">Select a subject</option>
                      <option>General Enquiry</option>
                      <option>Partnership</option>
                      <option>Billing Support</option>
                      <option>Technical Issue</option>
                      <option>Other</option>
                    </select>
                    {errors.subject && <div style={errStyle}>{errors.subject}</div>}
                  </div>
                  <div style={{ marginBottom: 18 }}>
                    <label className="label">Message</label>
                    <textarea className="input" rows={5} placeholder="Write your message here..." value={form.message} onChange={h("message")} style={{ resize: "vertical", ...(errors.message ? { borderColor: "var(--accent-red)" } : {}) }} />
                    {errors.message && <div style={errStyle}>{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn-primary cta-shine" style={{ width: "100%", padding: "14px", borderRadius: 10, fontSize: 14 }}>Send Message</button>
                </form>
              )}
            </div>

            {/* Info cards */}
            <div data-scroll-stagger style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InfoCard ic="ti-phone" iconBg="rgba(30,140,69,0.12)" iconColor="var(--brand-green-light)" title="Call Us" main="+91 70530 99911" mainColor="var(--brand-green-light)" sub="Mon–Sat, 9am–7pm IST" />
              <InfoCard ic="ti-mail" iconBg="rgba(6,182,212,0.1)" iconColor="var(--accent-cyan)" title="Mail Us" main="support@gatimaan.in" mainColor="var(--accent-cyan)" sub="We reply within 24 hours" />
              <InfoCard ic="ti-map-pin" iconBg="rgba(27,43,107,0.15)" iconColor="var(--brand-navy)" title="Visit Us" main="Gatimaan Payments Pvt. Ltd." mainColor="var(--text-primary)" sub="Address line, City, State — PIN" />
            </div>
          </div>
          <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 data-scroll="up" className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>Frequently asked questions</h2>
            <div data-scroll-stagger>
              {faqs.map(([q, a], i) => (
                <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`} style={{
                  border: "1px solid var(--border-subtle)", borderRadius: 12, padding: "16px 20px", marginBottom: 10,
                  background: openFaq === i ? "rgba(30,140,69,0.04)" : "var(--bg-surface)",
                  borderColor: openFaq === i ? "rgba(30,140,69,0.2)" : "var(--border-subtle)",
                  transition: "all 200ms ease",
                }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: "var(--text-primary)", fontSize: 15, fontWeight: 500, display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0 }}>
                    <span>{q}</span>
                    <i className="ti ti-chevron-down" style={{ transition: "transform 250ms ease", transform: openFaq === i ? "rotate(180deg)" : "none", color: "var(--brand-green-light)" }} aria-hidden="true" />
                  </button>
                  <div style={{ maxHeight: openFaq === i ? 200 : 0, opacity: openFaq === i ? 1 : 0, overflow: "hidden", transition: "max-height 300ms ease, opacity 200ms ease" }}>
                    <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65, padding: "12px 0 0", margin: 0 }}>{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const errStyle = { color: "var(--accent-red)", fontSize: 12, marginTop: 4 };

function Field({ label, err, ...rest }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label className="label">{label}</label>
      <input className="input" {...rest} style={err ? { borderColor: "var(--accent-red)" } : {}} />
      {err && <div style={errStyle}>{err}</div>}
    </div>
  );
}

function InfoCard({ ic, iconBg, iconColor, title, main, mainColor, sub }) {
  return (
    <div className="card-hoverable info-card" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 14, padding: 24, display: "flex", gap: 14 }}>
      <div className="info-icon-circle" style={{ width: 48, height: 48, borderRadius: "50%", background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 250ms ease" }}>
        <i className={`ti ${ic}`} style={{ color: iconColor, fontSize: 22 }} aria-hidden="true" />
      </div>
      <div>
        <h4 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600 }}>{title}</h4>
        <div style={{ color: mainColor, fontSize: 15, fontWeight: 500 }}>{main}</div>
        <div style={{ color: "var(--text-muted)", fontSize: 13 }}>{sub}</div>
      </div>
      <style jsx>{`.info-card:hover .info-icon-circle { transform: scale(1.1); }`}</style>
    </div>
  );
}
