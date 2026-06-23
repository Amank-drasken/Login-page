import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import Link from "next/link";

const CATS = [
  { ic: "ti-bolt", c: "#F59E0B", t: "Electricity", b: "All state DISCOMs supported" },
  { ic: "ti-droplet", c: "#06B6D4", t: "Water", b: "Municipal water boards" },
  { ic: "ti-flame", c: "#EF4444", t: "Gas", b: "Piped + cylinder providers" },
  { ic: "ti-phone", c: "#22C55E", t: "Telecom", b: "All major operators" },
  { ic: "ti-wifi", c: "#8B5CF6", t: "Broadband", b: "ISPs across India" },
  { ic: "ti-device-tv", c: "#1B2B6B", t: "DTH", b: "All DTH operators" },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ScrollReveal />
      <main style={{ paddingTop: 64 }}>
        {/* HERO */}
        <section style={{ position: "relative", padding: "120px 24px 80px", textAlign: "center", background: "var(--bg-base)", overflow: "hidden" }}>
          {/* Floating background provider icons */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {CATS.map((c, i) => (
              <i key={i} className={`ti ${c.ic}`} style={{
                position: "absolute",
                left: ["8%","20%","78%","88%","12%","82%"][i],
                top: ["18%","68%","22%","60%","78%","12%"][i],
                fontSize: [44, 38, 52, 36, 40, 46][i],
                color: c.c, opacity: 0.06,
                animation: `screenFloat ${6 + i}s ease-in-out ${i * 0.4}s infinite`,
              }} aria-hidden="true" />
            ))}
          </div>
          <div style={{ position: "relative", maxWidth: 620, margin: "0 auto" }}>
            <div className="badge-pill fade-up" style={{ marginBottom: 22 }}><span className="dot" />BILL PAYMENTS</div>
            <h1 className="fade-up" style={{ fontSize: "clamp(30px, 4.8vw, 48px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 18, animationDelay: ".1s" }}>Automatic utility bill fetching & management</h1>
            <p className="fade-up" style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.65, maxWidth: 540, margin: "0 auto 28px", animationDelay: ".2s" }}>Connect once to 50+ utility providers and let Gatimaan Payments handle the rest — automatic fetching, categorization, processing and tracking.</p>
            <Link href="/signup" className="btn-primary cta-shine fade-up" style={{ display: "inline-block", animationDelay: ".3s" }}>Get Started</Link>
            <div className="fade-up" style={{ marginTop: 26, animationDelay: ".4s" }}>
              <div style={{ display: "inline-flex", gap: 14, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                {CATS.map((c) => (
                  <i key={c.t} className={`ti ${c.ic}`} style={{ color: c.c, fontSize: 22 }} aria-hidden="true" />
                ))}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 8 }}>Electricity · Water · Gas · Telecom · Broadband · DTH</div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <h2 data-scroll="up" className="sec-h" style={{ textAlign: "center", marginBottom: 64 }}>How bill fetching works</h2>
            <div data-scroll-stagger style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, position: "relative" }} className="steps-4">
              <div className="timeline-line" style={{ position: "absolute", top: 32, left: "12%", right: "12%" }} />
              {[
                { ic: "ti-plug-connected", t: "Connect Provider", b: "Add utility providers to your account (electricity, water, gas, telecom, DTH, broadband)" },
                { ic: "ti-refresh", t: "Auto-Fetch", b: "Bills are pulled automatically at configured intervals, no manual logging in" },
                { ic: "ti-eye", t: "Review & Process", b: "Bills appear in your dashboard, categorized and ready for payment action" },
                { ic: "ti-circle-check", t: "Settle & Track", b: "Payment is processed, ledger updated, customer notified" },
              ].map((s, i) => (
                <div key={i} className="card-hoverable" style={{ background: "var(--bg-elevated)", borderRadius: 12, textAlign: "center", padding: 20, position: "relative", border: "1px solid var(--border-subtle)" }}>
                  <div className="step-circle" style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(30,140,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", border: "2px solid var(--bg-elevated)", position: "relative", zIndex: 1 }}>
                    <i className={`ti ${s.ic}`} style={{ color: "var(--brand-green-light)", fontSize: 26 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 600 }}>{i + 1}. {s.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.55, margin: 0 }}>{s.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.steps-4{grid-template-columns:1fr 1fr !important}.steps-4 .timeline-line{display:none}}@media(max-width:480px){.steps-4{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* Categories */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div className="container">
            <h2 data-scroll="up" className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>Supported categories</h2>
            <div data-scroll-stagger style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="cat-grid">
              {CATS.map((c) => (
                <div key={c.t} className="card-hoverable category-card" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 16, padding: 24, textAlign: "center", "--cat": c.c }}>
                  <div className="cat-icon" style={{ width: 64, height: 64, borderRadius: "50%", background: `${c.c}1A`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", transition: "transform 250ms, background 250ms" }}>
                    <i className={`ti ${c.ic}`} style={{ color: c.c, fontSize: 30 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 600 }}>{c.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 13, margin: 0 }}>{c.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .category-card:hover { border-color: var(--cat) !important; }
            .category-card:hover .cat-icon { transform: scale(1.12); }
            @media(max-width:900px){.cat-grid{grid-template-columns:1fr 1fr !important}}
            @media(max-width:480px){.cat-grid{grid-template-columns:1fr !important}}
          `}</style>
        </section>

        {/* Feature list */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <h2 data-scroll="up" className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>Everything you need for billing operations</h2>
            <div data-scroll-stagger style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="feat-grid">
              {[
                ["Bill submission and draft management", "Save bills as drafts, edit before submit"],
                ["Multi-provider single dashboard", "All providers, one screen"],
                ["Category-wise billing controls", "Granular rules per category"],
                ["Configurable billing rules", "Set your own logic"],
                ["Outstanding dues tracking", "Never miss a payment"],
                ["Payment status monitoring", "Real-time status updates"],
                ["Billing history and audit trail", "Every action logged"],
                ["Provider management tools", "Add, configure, deactivate"],
              ].map(([t, b]) => (
                <div key={t} className="billing-row" style={{ display: "flex", gap: 12, padding: "12px 16px", borderRadius: 10, transition: "background 200ms, transform 200ms" }}>
                  <i className="ti ti-check check-icon" style={{ color: "var(--text-muted)", fontSize: 22, flexShrink: 0, transition: "color 200ms" }} aria-hidden="true" />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{t}</div>
                    <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .billing-row:hover { background: rgba(30,140,69,0.04); transform: translateX(4px); }
            .billing-row:hover .check-icon { color: #22C55E !important; }
            @media(max-width:768px){.feat-grid{grid-template-columns:1fr !important}}
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
