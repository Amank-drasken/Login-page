import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroViber from "../components/HeroViber";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <ScrollReveal />
      <main style={{ paddingTop: 64 }}>
        <HeroViber />

        {/* SECTION 2 — Stats strip */}
        <section style={{ padding: "60px 0", background: "var(--bg-base)", borderTop: "1px solid var(--border-subtle)" }}>
          <div className="container" data-scroll-stagger style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} >
            {[
              ["50+", "Providers Connected"],
              ["₹2Cr+", "Monthly Processed"],
              ["5", "User Roles Built-In"],
              ["12", "Utility Categories"],
            ].map(([n,l]) => (
              <div key={l} className="card-hoverable" style={{ border: "1px solid var(--border-subtle)", borderRadius: 12, padding: "24px 28px", background: "var(--bg-surface)" }}>
                <div style={{ color: "var(--brand-green-light)", fontSize: 30, fontWeight: 700 }}>{n}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 13 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — Wallet feature */}
        <section className="section" id="wallet" style={{ background: "var(--bg-elevated)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center" }}>
            <div data-scroll="left">
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(30,140,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <i className="ti ti-wallet" aria-hidden="true" style={{ color: "var(--brand-green-light)", fontSize: 22 }} />
              </div>
              <div className="eyebrow">WALLET OPERATIONS</div>
              <h2 className="sec-h">Instant wallet-to-wallet transfers</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65 }}>Every retailer and customer operates their own wallet. Transfer funds instantly across the network, handle credit requests, add funds, and pull back when needed. Every movement is logged with a full audit trail.</p>
              <div style={{ marginTop: 16 }}>
                <span className="feature-pill">Instant transfers</span>
                <span className="feature-pill">Credit requests</span>
                <span className="feature-pill">Full audit trail</span>
              </div>
            </div>
            <div data-scroll="right" style={{ position: "relative" }}>
              <Ambient />
              <div className="section-screen">
                <img src="/img/wallet.png" alt="Wallet operations in Gatimaan Payments" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Bill Auto Fetch */}
        <section className="section" id="bill-payments" style={{ background: "var(--bg-base)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" }}>
            <div data-scroll="left" style={{ position: "relative" }}>
              <Ambient />
              <div className="section-screen" style={{ position: "relative" }}>
                <img src="/img/bill.png" alt="Bill auto-fetch in Gatimaan Payments" />
              </div>
              {/* provider icon constellation */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 10, marginTop: 18 }}>
                {[
                  ["ti-bolt", "#F59E0B", "Electricity"],
                  ["ti-droplet", "#06B6D4", "Water"],
                  ["ti-flame", "#EF4444", "Gas"],
                  ["ti-phone", "#22C55E", "Telecom"],
                  ["ti-wifi", "#8B5CF6", "Broadband"],
                  ["ti-device-tv", "#6B84DD", "DTH"],
                ].map(([ic,c,t],i) => (
                  <div key={t} title={t} style={{ width: 44, height: 44, borderRadius: 10, background: `${c}1A`, border: `1px solid ${c}33`, display: "flex", alignItems: "center", justifyContent: "center", animation: `screenFloat ${3 + (i % 3)}s ease-in-out ${i * 0.2}s infinite` }}>
                    <i className={`ti ${ic}`} style={{ color: c, fontSize: 20 }} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
            <div data-scroll="right">
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(30,140,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <i className="ti ti-bolt" style={{ color: "var(--brand-green-light)", fontSize: 22 }} aria-hidden="true" />
              </div>
              <div className="eyebrow">BILL MANAGEMENT</div>
              <h2 className="sec-h">Auto-fetch bills from every provider</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65 }}>Connect once to 50+ utility providers across electricity, water, gas, telecom, broadband, and DTH. Bills are fetched automatically, categorized, and ready to process. No more logging into each portal separately.</p>
              <div style={{ marginTop: 16 }}>
                <span className="feature-pill">50+ Providers</span>
                <span className="feature-pill">Auto-sync</span>
                <span className="feature-pill">All categories</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — Commission & Rewards */}
        <section className="section" id="commission" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <div data-scroll="up" style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="eyebrow">RETAILER EARNINGS</div>
              <h2 className="sec-h">Retailers earn on every transaction</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 580, margin: "0 auto" }}>Build a loyal retailer network with automatic commissions, reward programs, and loyalty tracking that keeps your partners engaged and growing.</p>
            </div>
            <div data-scroll-stagger style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 24 }}>
              <div className="card-hoverable" style={{ position: "relative", background: "var(--bg-surface)", border: "1px solid var(--border-green)", borderRadius: 16, padding: 0, overflow: "visible" }}>
                <div className="section-screen" style={{ borderRadius: "16px 16px 0 0", animation: "none", boxShadow: "none", border: "none" }}>
                  <img src="/img/ledger.png" alt="Commission ledger" />
                </div>
                <div style={{ padding: 20, paddingTop: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <i className="ti ti-coins" style={{ color: "var(--accent-amber)", fontSize: 22 }} aria-hidden="true" />
                    <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Commission Engine</h3>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: "0 0 14px" }}>Configure commission percentages by transaction type. Every eligible sale automatically credits commission to the retailer wallet.</p>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 64, marginBottom: 10 }}>
                    {[40,55,48,62,58,75].map((h,i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? "linear-gradient(180deg,#4ADE80,#1E8C45)" : "linear-gradient(180deg,rgba(74,222,128,0.6),rgba(30,140,69,0.4))", borderRadius: "4px 4px 0 0" }} />
                    ))}
                  </div>
                  <div style={{ color: "var(--accent-amber)", fontSize: 20, fontWeight: 700 }}>₹1,87,340 this month</div>
                  <div style={{ color: "var(--brand-green-mid)", fontSize: 13 }}>+34% vs last month</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="card-hoverable" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 14, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <i className="ti ti-trophy" style={{ color: "var(--accent-amber)", fontSize: 22 }} aria-hidden="true" />
                    <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>Rewards Program</h3>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: "0 0 12px" }}>Set milestone-based rewards: transaction count, volume thresholds, special promotions. Retailers see live progress.</p>
                  <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 3, overflow: "hidden", marginBottom: 6 }}>
                    <div style={{ width: "64%", height: "100%", background: "linear-gradient(90deg,var(--accent-amber),#FBBF24)" }} />
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>64% to next reward</div>
                </div>
                <div className="card-hoverable" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 14, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <i className="ti ti-star" style={{ color: "var(--brand-green-light)", fontSize: 22 }} aria-hidden="true" />
                    <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>Loyalty Tracking</h3>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: "0 0 10px" }}>Retailers accumulate points on every transaction. Redeem against wallet credits, fee waivers, or offers.</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ color: "var(--brand-green-light)" }}>
                      {[1,2,3,4,5].map((i) => <i key={i} className="ti ti-star-filled" style={{ fontSize: 14, opacity: i <= 4 ? 1 : 0.3 }} aria-hidden="true" />)}
                    </div>
                    <span style={{ color: "var(--text-muted)", fontSize: 12 }}>2,840 pts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — Unified Dashboard (full screenshot in browser frame) */}
        <section className="section" id="dashboard" style={{ background: "var(--bg-base)" }}>
          <div className="container">
            <div data-scroll="up" style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="eyebrow">OPERATIONS DASHBOARD</div>
              <h2 className="sec-h">Your real-time operations command center</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 580, margin: "0 auto" }}>Revenue trends, collection ratios, payment breakdowns and growth — all updating live. No more waiting for month-end reports.</p>
            </div>
            <div data-scroll="scale" style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
              <Ambient />
              <div style={{ borderRadius: 14, border: "1px solid var(--border-green)", background: "#0A1419", boxShadow: "0 20px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(30,140,69,0.08)", overflow: "hidden" }}>
                <div style={{ height: 32, background: "#071013", borderBottom: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", padding: "0 12px", gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF4444" }} />
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} />
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
                  <span style={{ marginLeft: 14, fontSize: 11, color: "rgba(255,255,255,0.3)" }}>utility.drasken.dev/dashboard</span>
                </div>
                <img src="/img/dash.png" alt="Gatimaan operations dashboard" style={{ width: "100%", display: "block" }} />
              </div>
              <Callout text="Live revenue" t="12%" l="6%" />
              <Callout text="Collection rate" t="22%" r="6%" />
              <Callout text="Wallet summary" b="22%" l="4%" />
              <Callout text="Active retailers" b="14%" r="6%" />
            </div>
          </div>
        </section>

        {/* SECTION 7 — Role Based Access */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <div data-scroll="up" style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="eyebrow">BUILT FOR EVERY ROLE</div>
              <h2 className="sec-h">One platform, every team member covered</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 580, margin: "0 auto" }}>Each role sees exactly what they need — nothing more, nothing less.</p>
            </div>
            <div data-scroll-stagger style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }} className="role-grid">
              {[
                { c: "#1B2B6B", ic: "ti-shield", t: "Super Admin",      items: ["Full platform control","Treasury management","Provider configuration","All reports","Platform settings","User management","Audit log access"] },
                { c: "#2563EB", ic: "ti-settings", t: "Operations",     items: ["Bill management","Customer management","Provider management","Request handling","Bulk bill processing","Connection handling"] },
                { c: "#1E8C45", ic: "ti-calculator", t: "Finance Team", items: ["Wallet management","Ledger & transactions","Bank accounts & UPI","Settlement tracking","Refund authorization","Fee & charge setup"] },
                { c: "#DC2626", ic: "ti-headset", t: "Support",         items: ["Complaint management","Refund processing","Notification dispatch","Escalation handling","KYC verification"] },
                { c: "#F59E0B", ic: "ti-coin", t: "Retailer / Partner", items: ["Earn commissions","Use wallet","Submit bills","Track rewards","View milestones","Request wallet credit"] },
              ].map((r) => (
                <div key={r.t} className="card-hoverable" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderTop: `3px solid ${r.c}`, borderRadius: 12, padding: "24px 20px", minWidth: 0 }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${r.c}1F`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <i className={`ti ${r.ic}`} style={{ color: r.c, fontSize: 24 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 600 }}>{r.t}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {r.items.map((it) => (
                      <li key={it} style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 6, display: "flex", gap: 6 }}>
                        <i className="ti ti-check" style={{ color: "var(--brand-green-mid)", fontSize: 13, flexShrink: 0 }} aria-hidden="true" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 1080px){.role-grid{grid-template-columns:repeat(3,1fr) !important}}@media (max-width: 720px){.role-grid{grid-template-columns:repeat(2,1fr) !important}}@media (max-width: 480px){.role-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* SECTION 8 — Before/After */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div className="container">
            <h2 data-scroll="up" className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>What changes when you switch to Gatimaan</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div data-scroll="left" className="card-hoverable" style={{ border: "1px solid var(--border-subtle)", borderRadius: 14, overflow: "hidden", background: "var(--bg-surface)" }}>
                <div style={{ padding: 16, background: "rgba(239,68,68,0.08)", color: "var(--text-muted)", fontWeight: 500 }}>✗ Without Gatimaan</div>
                <div style={{ padding: "8px 20px 16px" }}>
                  {["Log into 5+ provider portals daily","Track commissions in Excel, disputes over WhatsApp","No real-time wallet visibility","Month-end treasury reconciliation","No audit trail for user actions"].map((t) => (
                    <div key={t} className="cmp-row-without" style={{ display: "flex", gap: 10, padding: "12px 0", borderBottom: "1px solid var(--border-subtle)", alignItems: "center" }}>
                      <i className="ti ti-x" style={{ color: "var(--accent-red)", opacity: 0.6 }} aria-hidden="true" />
                      <span style={{ color: "var(--text-secondary)", fontSize: 14 }}>{t}</span>
                      <span className="strike" />
                    </div>
                  ))}
                </div>
              </div>
              <div data-scroll="right" className="card-hoverable" style={{ border: "1px solid var(--border-green)", borderRadius: 14, overflow: "hidden", background: "var(--bg-surface)", transitionDelay: "150ms" }}>
                <div style={{ padding: 16, background: "rgba(30,140,69,0.1)", color: "var(--brand-green-light)", fontWeight: 500 }}>✓ With Gatimaan</div>
                <div style={{ padding: "8px 20px 16px" }}>
                  {["1 dashboard, auto-fetch from 50+ providers","Built-in commission engine, fully logged","Live wallet balances and transfer history","Real-time treasury and ledger view","Complete activity + login logs, full audit trail"].map((t) => (
                    <div key={t} style={{ display: "flex", gap: 10, padding: "12px 0", borderBottom: "1px solid var(--border-subtle)", alignItems: "center" }}>
                      <i className="ti ti-check cmp-check" style={{ color: "var(--brand-green-mid)", display: "inline-block" }} aria-hidden="true" />
                      <span style={{ color: "var(--text-primary)", fontSize: 14 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — How It Works */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <h2 data-scroll="up" className="sec-h" style={{ textAlign: "center", marginBottom: 64 }}>Up and running in 3 simple steps</h2>
            <div data-scroll-stagger style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, position: "relative" }} className="steps-grid">
              <div className="timeline-line" style={{ position: "absolute", top: 24, left: "16%", right: "16%", display: "block" }} />
              {[
                { ic: "ti-user-plus", t: "Sign up & onboard", b: "Create your account, add your team members and assign their roles and permissions." },
                { ic: "ti-plug", t: "Connect your providers", b: "Add utility providers, configure billing categories, set commission and reward rules for your retailer network." },
                { ic: "ti-rocket", t: "Start operating", b: "Fetch bills automatically, collect payments, manage wallets and track commissions — everything from one dashboard from day one." },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center", padding: 16, position: "relative", background: "var(--bg-elevated)" }}>
                  <div className="step-circle" style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--brand-green)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontWeight: 700, fontSize: 18, position: "relative", zIndex: 1 }}>{i + 1}</div>
                  <i className={`ti ${s.ic}`} style={{ color: "var(--brand-green-light)", fontSize: 28, marginBottom: 12, display: "block" }} aria-hidden="true" />
                  <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 600 }}>{s.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){.steps-grid{grid-template-columns:1fr !important}.steps-grid .timeline-line{display:none !important}}`}</style>
        </section>

        {/* SECTION 10 — Final CTA */}
        <section style={{ position: "relative", padding: "120px 24px", textAlign: "center", background: "var(--bg-base)", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {[-20, 0, 20].map((x, i) => (
              <div key={i} style={{ position: "absolute", top: 0, left: `calc(50% + ${x}px)`, width: i === 1 ? 3 : 2, height: i === 1 ? 140 : 100, background: "linear-gradient(to bottom, rgba(34,197,94,0.6), transparent)", animation: `auroraPulse ${4 + i * 0.3}s ease-in-out ${i * 0.3}s infinite` }} />
            ))}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 300, background: "radial-gradient(ellipse, rgba(30,140,69,0.1), transparent 70%)" }} />
          </div>
          <div data-scroll="scale" style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
            <div style={{ color: "var(--brand-green-light)", fontSize: 13, marginBottom: 12, letterSpacing: 0.5 }}>Join 200+ retailers already on Gatimaan Payments</div>
            <h2 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>Ready to run your utility business <span className="gradient-text">from one place?</span></h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, marginBottom: 32 }}>Join businesses already managing bills, wallets, commissions and settlements on Gatimaan Payments.</p>
            <Link href="/signup" className="btn-primary cta-shine" style={{ padding: "16px 48px", fontSize: 16, borderRadius: 12, display: "inline-block" }}>Get Started Free</Link>
            <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 18 }}>No credit card required · Setup in under 10 minutes</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Ambient() {
  return (
    <>
      <span className="ambient-dot" style={{ top: -12, left: -8, "--dur": "7s", "--dx": "10px", "--dy": "-6px" }} />
      <span className="ambient-dot" style={{ top: 20, right: -14, "--dur": "8s", "--dx": "-8px", "--dy": "8px" }} />
      <span className="ambient-dot" style={{ bottom: -10, left: 30, "--dur": "9s", "--dx": "8px", "--dy": "-10px" }} />
      <span className="ambient-dot" style={{ bottom: 14, right: 16, "--dur": "6s", "--dx": "-10px", "--dy": "-6px" }} />
      <span className="ambient-star" style={{ top: -20, right: 30 }}>✦</span>
      <span className="ambient-star" style={{ bottom: -16, left: -10 }}>✦</span>
      <span className="ambient-ring" style={{ top: "40%", right: -30 }} />
    </>
  );
}

function Callout({ text, t, b, l, r }) {
  const pos = {};
  if (t) pos.top = t;
  if (b) pos.bottom = b;
  if (l) pos.left = l;
  if (r) pos.right = r;
  return (
    <div style={{ position: "absolute", ...pos, background: "rgba(6,14,18,0.9)", border: "1px solid rgba(30,140,69,0.25)", borderRadius: 6, padding: "4px 10px", fontSize: 11, color: "#fff", whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(0,0,0,0.3)", zIndex: 2 }}>
      <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", marginRight: 6, verticalAlign: "middle" }} />
      {text}
    </div>
  );
}
