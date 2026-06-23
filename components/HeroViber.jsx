"use client";
import Link from "next/link";

const screens = [
  { src: "/img/dash.png",   label: "Dashboard",   style: { top: "4%",    left: "50%",  width: 360, height: 220, transform: "translateX(-50%)", "--rot": "-2deg", "--delay": "500ms",  "--fdur": "5s",   "--fdelay": "0s",   zIndex: 0, opacity: 0.55 } },
  { src: "/img/wallet.png", label: "Wallet",      style: { top: "26%",   left: "1%",                width: 260, height: 175,                            "--rot": "-4deg", "--delay": "700ms",  "--fdur": "6s",   "--fdelay": "0.4s", zIndex: 3 } },
  { src: "/img/bill.png",   label: "Bills",       style: { top: "22%",   right: "1%",               width: 260, height: 175,                            "--rot": "3deg",  "--delay": "900ms",  "--fdur": "5.5s", "--fdelay": "0.8s", zIndex: 3 } },
  { src: "/img/ledger.png", label: "Ledger",      style: { bottom: "8%", left: "3%",                width: 240, height: 165,                            "--rot": "2deg",  "--delay": "1100ms", "--fdur": "7s",   "--fdelay": "0.2s", zIndex: 3 } },
  { src: "/img/dash.png",   label: "Reports",     style: { bottom: "12%", right: "3%",              width: 250, height: 165,                            "--rot": "-3deg", "--delay": "1300ms", "--fdur": "6.5s", "--fdelay": "1.2s", zIndex: 3 } },
];

export default function HeroViber() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", padding: "120px 24px 80px", textAlign: "center", background: "#060E12", overflow: "hidden" }}>
      {/* Aurora beams */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 700, height: 500, left: "50%", top: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(ellipse, rgba(30,140,69,0.10), transparent 65%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(30,140,69,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30,140,69,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px", WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)", maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)" }} />
        {[
          { x: -56, w: 3, h: 240, d: 0 },
          { x: -22, w: 2, h: 200, d: 0.4 },
          { x: 4,   w: 4, h: 260, d: 0.8 },
          { x: 34,  w: 2, h: 180, d: 1.2 },
          { x: 64,  w: 3, h: 160, d: 1.6 },
        ].map((b, i) => (
          <div key={i} style={{ position: "absolute", top: 0, left: `calc(50% + ${b.x}px)`, width: b.w, height: b.h, background: "linear-gradient(to bottom, rgba(34,197,94,0.7), transparent)", animation: `auroraPulse ${4 + i * 0.3}s ease-in-out ${b.d}s infinite` }} />
        ))}
        {[
          { l: "8%", t: "12%" }, { l: "92%", t: "18%" }, { l: "5%", t: "75%" },
          { l: "94%", t: "80%" }, { l: "20%", t: "50%" }, { l: "78%", t: "55%" },
          { l: "45%", t: "85%" }, { l: "55%", t: "8%" },
        ].map((p, i) => (
          <span key={i} className="ambient-dot" style={{ left: p.l, top: p.t, "--dur": `${6 + i}s`, "--dx": `${i % 2 ? 10 : -10}px`, "--dy": `${i % 2 ? -8 : 8}px` }} />
        ))}
      </div>

      {/* Floating CRM screens */}
      <div className="floating-layer" aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {screens.map((s, i) => (
          <div key={i} className="floating-screen" style={{ ...s.style, pointerEvents: "auto" }}>
            <img src={s.src} alt="" />
            <span className="screen-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Center text */}
      <div style={{ position: "relative", maxWidth: 680, margin: "0 auto", zIndex: 5 }}>
        <div className="fade-up" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>
          For utility payment businesses, distributors &amp; retailer networks
        </div>
        <div className="badge-pill fade-up" style={{ marginBottom: 22, animationDelay: ".08s" }}>
          <span className="dot" />
          <span>UTILITY BILLING &amp; OPERATIONS PLATFORM</span>
        </div>
        <h1 className="fade-up" style={{ fontSize: "clamp(32px, 5.5vw, 58px)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 20px", animationDelay: ".18s", color: "#fff" }}>
          One platform to manage <span className="gradient-text">all utility operations</span>
        </h1>
        <p className="fade-up" style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.65, maxWidth: 460, margin: "0 auto 28px", animationDelay: ".28s" }}>
          Fetch bills, manage wallets, track commissions and settle payments for your retailer network — all from one dashboard.
        </p>
        <div className="fade-up" style={{ display: "flex", gap: 18, justifyContent: "center", alignItems: "center", marginBottom: 36, animationDelay: ".38s", flexWrap: "wrap" }}>
          <Link href="/signup" className="btn-primary cta-shine" style={{ padding: "12px 32px", borderRadius: 10, fontSize: 14, display: "inline-block" }}>Get Started</Link>
          <Link href="/contact" style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 4 }}>
            Book a demo <i className="ti ti-chevron-right" aria-hidden="true" />
          </Link>
        </div>
        <div className="fade-up" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 28, flexWrap: "wrap", animationDelay: ".48s" }}>
          {[["50+","Providers"],["5","User Roles"],["99.8%","Settled"]].map(([n,l],i) => (
            <div key={l} style={{ display: "flex", alignItems: "center", gap: 28 }}>
              {i > 0 && <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.08)" }} />}
              <div>
                <div style={{ color: "#4ADE80", fontSize: 22, fontWeight: 700 }}>{n}</div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>{l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile fallback dashboard */}
      <div className="mobile-fallback" style={{ display: "none", marginTop: 40 }}>
        <img src="/img/dash.png" alt="Dashboard preview" style={{ width: "100%", maxWidth: 420, borderRadius: 12, border: "1px solid rgba(30,140,69,0.2)", boxShadow: "0 12px 40px rgba(0,0,0,0.4)" }} />
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .floating-layer { display: none; }
          .mobile-fallback { display: flex !important; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
