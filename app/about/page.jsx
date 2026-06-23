import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <ScrollReveal />
      <main style={{ paddingTop: 64 }}>
        {/* HERO with concentric rings */}
        <section style={{ position: "relative", padding: "120px 24px 80px", textAlign: "center", background: "var(--bg-base)", overflow: "hidden", minHeight: 520 }}>
          {/* Concentric rings */}
          <div aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", pointerEvents: "none" }}>
            {[
              { d: 180, bw: 1, dur: 4,   dly: 0,   c: "rgba(74,222,128,0.25)" },
              { d: 300, bw: 1, dur: 4.5, dly: 0.4, c: "rgba(34,197,94,0.18)" },
              { d: 440, bw: 1.5, dur: 5, dly: 0.8, c: "rgba(30,140,69,0.14)" },
              { d: 600, bw: 1, dur: 5.5, dly: 1.2, c: "rgba(30,140,69,0.10)" },
              { d: 780, bw: 0.5, dur: 6, dly: 1.6, c: "rgba(30,140,69,0.06)" },
            ].map((r, i) => (
              <div key={i} style={{
                position: "absolute", width: r.d, height: r.d, borderRadius: "50%",
                border: `${r.bw}px solid transparent`,
                top: 0, left: 0, transform: `translate(-50%,-50%)`,
                animation: `ringPulse ${r.dur}s ease-in-out ${r.dly}s infinite`,
                ["--rc"]: r.c,
              }} />
            ))}
          </div>
          {/* Particles */}
          {[
            { l: "10%", t: "20%" }, { l: "88%", t: "18%" }, { l: "12%", t: "75%" },
            { l: "90%", t: "78%" }, { l: "30%", t: "50%" }, { l: "70%", t: "55%" },
            { l: "50%", t: "85%" }, { l: "50%", t: "10%" },
          ].map((p, i) => (
            <span key={i} className="ambient-dot" style={{ left: p.l, top: p.t, "--dur": `${5 + i}s`, "--dx": `${i % 2 ? 8 : -8}px`, "--dy": `${i % 2 ? -6 : 6}px` }} />
          ))}

          <div style={{ position: "relative", maxWidth: 620, margin: "0 auto", zIndex: 1 }}>
            <div className="badge-pill fade-up" style={{ marginBottom: 22 }}><span className="dot" />OUR STORY</div>
            <h1 className="fade-up" style={{ fontSize: "clamp(30px, 4.8vw, 48px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 18, animationDelay: ".12s" }}>Built for the backbone of utility payments</h1>
            <p className="fade-up" style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.65, maxWidth: 520, margin: "0 auto", animationDelay: ".24s" }}>
              Gatimaan Payments was built to solve a real problem — businesses managing utility bill payments were drowning in portals, spreadsheets, and WhatsApp messages. We built one platform to replace all of that.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container mv-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <div data-scroll="left" className="card-hoverable" style={{ background: "var(--bg-surface)", borderLeft: "4px solid var(--brand-green-mid)", border: "1px solid var(--border-subtle)", borderLeftWidth: 4, borderRadius: 16, padding: "28px 26px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(30,140,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <circle cx="16" cy="16" r="13" stroke="#1E8C45" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="8" stroke="#22C55E" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="3" fill="#22C55E" />
                  <path d="M22 10 L28 4 M28 4 L26 8 M28 4 L24 6" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 22, fontWeight: 700 }}>Our Mission</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65, margin: 0 }}>To simplify utility billing and payment operations for every business in India — large distributor networks and independent retailers alike. We believe managing utility payments should feel as simple as using a single dashboard, not juggling ten tools.</p>
            </div>
            <div data-scroll="right" className="card-hoverable" style={{ background: "var(--bg-surface)", borderLeft: "4px solid var(--brand-navy)", border: "1px solid var(--border-subtle)", borderLeftWidth: 4, borderRadius: 16, padding: "28px 26px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(27,43,107,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <circle cx="22" cy="10" r="4" stroke="#1B2B6B" strokeWidth="1.5" fill="rgba(30,140,69,0.2)" />
                  <line x1="19" y1="13" x2="8" y2="24" stroke="#1B2B6B" strokeWidth="2" />
                  <path d="M6 26 L4 28 M10 24 L8 28" stroke="#1B2B6B" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="22" cy="10" r="1.5" fill="#4ADE80" />
                </svg>
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 22, fontWeight: 700 }}>Our Vision</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65, margin: 0 }}>To become India's most trusted utility billing operations platform — the infrastructure layer that powers every utility payment business, from small-town retailers to large multi-state distributor networks.</p>
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div className="container">
            <h2 data-scroll="up" className="sec-h" style={{ textAlign: "center", marginBottom: 56 }}>Why businesses choose Gatimaan Payments</h2>
            <div data-scroll-stagger style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="grid-3">
              {/* Card 1 — puzzle */}
              <div className="card-hoverable" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 16, padding: 28 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(30,140,69,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="14" height="14" rx="2" fill="#22C55E" opacity="0.85" />
                    <rect x="19" y="3" width="14" height="14" rx="2" fill="#06B6D4" opacity="0.85" />
                    <rect x="3" y="19" width="14" height="14" rx="2" fill="#F59E0B" opacity="0.85" />
                    <rect x="19" y="19" width="14" height="14" rx="2" fill="#1B2B6B" opacity="0.85" />
                  </svg>
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 600 }}>All-in-one, not bolt-on</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>Bills, wallets, treasury, commissions, analytics and compliance built together from the ground up — not patched together from separate tools.</p>
              </div>
              {/* Card 2 — laptop+headset */}
              <div className="card-hoverable" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 16, padding: 28 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <rect x="6" y="9" width="24" height="16" rx="2" stroke="#2563EB" strokeWidth="2" fill="none" />
                    <rect x="9" y="12" width="18" height="10" rx="1" fill="#22C55E" opacity="0.3" />
                    <rect x="11" y="14" width="14" height="2" fill="#22C55E" />
                    <rect x="11" y="17" width="9" height="1.5" fill="#4ADE80" opacity="0.7" />
                    <line x1="4" y1="27" x2="32" y2="27" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 600 }}>Built for operators, not consumers</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>Every feature is designed around how utility payment businesses actually operate — multi-role teams, retailer networks, real-time settlements.</p>
              </div>
              {/* Card 3 — vault */}
              <div className="card-hoverable" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 16, padding: 28 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(245,158,11,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <rect x="5" y="7" width="26" height="22" rx="2" stroke="#94A3B8" strokeWidth="2" fill="rgba(74,222,128,0.12)" />
                    <circle cx="18" cy="18" r="5" stroke="#94A3B8" strokeWidth="2" />
                    <circle cx="18" cy="18" r="2" fill="#4ADE80" />
                    <line x1="8" y1="11" x2="9" y2="11" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                    <line x1="8" y1="25" x2="9" y2="25" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 600 }}>Financial control built in</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>From wallet operations to treasury management to bank account linking — the financial depth goes far beyond what a typical billing CRM offers.</p>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){.grid-3{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* Values */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <h2 data-scroll="up" className="sec-h" style={{ textAlign: "center", marginBottom: 56 }}>What drives us</h2>
            <div data-scroll-stagger style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="values-grid">
              {/* Speed */}
              <div className="card-hoverable" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ width: 80, height: 80, borderRadius: 16, background: "rgba(30,140,69,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <path d="M28 6 L28 16 L34 16 L20 36 L20 26 L14 26 L28 6 Z" fill="#22C55E" stroke="#1E8C45" strokeWidth="1.5" strokeLinejoin="round" />
                    <line x1="6" y1="14" x2="12" y2="14" stroke="rgba(74,222,128,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="4" y1="22" x2="10" y2="22" stroke="rgba(74,222,128,0.3)" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="6" y1="30" x2="12" y2="30" stroke="rgba(74,222,128,0.2)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 600 }}>Speed at Every Step</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>From instant bill fetching across 50+ providers to real-time wallet transfers and same-day settlements — every operation is built for speed. Your retailers don't wait. Your treasury doesn't lag.</p>
              </div>
              {/* Security */}
              <div className="card-hoverable" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ width: 80, height: 80, borderRadius: 16, background: "rgba(27,43,107,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <path d="M22 4 L36 10 L36 22 C36 30 30 36 22 40 C14 36 8 30 8 22 L8 10 Z" fill="rgba(27,43,107,0.15)" stroke="#1B2B6B" strokeWidth="2" />
                    <path d="M15 22 L20 27 L30 16" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="19" y="30" width="6" height="5" rx="1" fill="#1B2B6B" />
                    <circle cx="22" cy="32" r="0.8" fill="#4ADE80" />
                  </svg>
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 600 }}>Every Rupee Tracked</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>Complete activity logs track every action. Login logs record every access. Role-based permissions ensure each member sees what they need. Your financial data is encrypted, audited, and compliant.</p>
              </div>
              {/* Simplicity */}
              <div className="card-hoverable" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ width: 80, height: 80, borderRadius: 16, background: "rgba(34,197,94,0.06)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <path d="M5 18 Q8 12 12 16 Q14 20 10 22 Q6 24 9 18 Q12 14 15 20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <path d="M20 22 L28 22 M28 22 L25 19 M28 22 L25 25" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" />
                    <line x1="32" y1="22" x2="40" y2="22" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 600 }}>Complex Operations, Simple Interface</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>Managing 50+ providers, hundreds of retailers, wallets, commissions, and treasury would normally need 10 different tools. Gatimaan puts it all behind one clean dashboard.</p>
              </div>
              {/* Growth */}
              <div className="card-hoverable" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ width: 80, height: 80, borderRadius: 16, background: "rgba(74,222,128,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                    <rect x="5" y="28" width="6" height="10" fill="url(#g1)" />
                    <rect x="14" y="22" width="6" height="16" fill="url(#g1)" />
                    <rect x="23" y="14" width="6" height="24" fill="url(#g1)" />
                    <rect x="32" y="6" width="6" height="32" fill="url(#g1)" />
                    <path d="M35 6 Q33 2 37 2 Q39 4 35 6" fill="#4ADE80" />
                    <defs><linearGradient id="g1" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#4ADE80" /><stop offset="1" stopColor="#1E8C45" /></linearGradient></defs>
                  </svg>
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 600 }}>Your Growth Is Our Benchmark</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>The commission and rewards engine grows your retailer network. Loyalty programs keep partners active. Analytics show you where growth happens and where to double down.</p>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:1080px){.values-grid{grid-template-columns:repeat(2,1fr) !important}}@media(max-width:560px){.values-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* CTA */}
        <section style={{ position: "relative", padding: "120px 24px", textAlign: "center", background: "var(--bg-base)", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {[-15, 0, 15].map((x, i) => (
              <div key={i} style={{ position: "absolute", top: 0, left: `calc(50% + ${x}px)`, width: i === 1 ? 3 : 2, height: i === 1 ? 130 : 100, background: "linear-gradient(to bottom, rgba(34,197,94,0.6), transparent)", animation: `auroraPulse ${4 + i * 0.3}s ease-in-out ${i * 0.3}s infinite` }} />
            ))}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 280, background: "radial-gradient(ellipse, rgba(30,140,69,0.08), transparent 70%)" }} />
            <svg width="300" height="180" viewBox="0 0 300 180" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.4, animation: "breath 8s ease-in-out infinite" }} aria-hidden="true">
              <rect x="2" y="2" width="296" height="176" rx="10" stroke="rgba(30,140,69,0.08)" fill="none" />
              <rect x="2" y="2" width="60" height="176" rx="10" stroke="rgba(30,140,69,0.08)" fill="none" />
              <line x1="72" y1="36" x2="290" y2="36" stroke="rgba(30,140,69,0.08)" />
              <rect x="84" y="56" width="60" height="32" rx="4" stroke="rgba(30,140,69,0.07)" fill="none" />
              <rect x="158" y="56" width="60" height="32" rx="4" stroke="rgba(30,140,69,0.07)" fill="none" />
              <rect x="232" y="56" width="55" height="32" rx="4" stroke="rgba(30,140,69,0.07)" fill="none" />
              <rect x="84" y="100" width="203" height="60" rx="4" stroke="rgba(30,140,69,0.06)" fill="none" />
            </svg>
          </div>
          <div data-scroll="scale" style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
            <h2 style={{ fontSize: 38, fontWeight: 700, marginBottom: 20 }}>Want to see Gatimaan Payments in action?</h2>
            <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn-primary cta-shine" style={{ padding: "14px 36px", fontSize: 14, borderRadius: 12, display: "inline-block" }}>Book a Demo</Link>
              <Link href="/signup" style={{ color: "var(--brand-green-light)", fontSize: 14 }}>or Get Started Free →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @keyframes ringPulse {
          0% { border-color: transparent; transform: translate(-50%,-50%) scale(0.95); }
          40% { border-color: var(--rc); transform: translate(-50%,-50%) scale(1); }
          100% { border-color: transparent; transform: translate(-50%,-50%) scale(1.05); }
        }
        @keyframes breath {
          0%,100% { transform: translate(-50%,-50%) scale(0.98); }
          50% { transform: translate(-50%,-50%) scale(1.02); }
        }
      `}</style>
    </>
  );
}
