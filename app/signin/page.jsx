"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.password) errs.password = "Required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setLoading(true);
      try { localStorage.setItem("gm-justSignedIn", "1"); } catch {}
      setTimeout(() => router.push("/dashboard"), 500);
    }
  };

  const h = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <main style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--bg-base)" }} className="auth-grid">
      {/* LEFT PANEL */}
      <div style={{ position: "relative", background: "#060E12", color: "#fff", padding: 48, display: "flex", flexDirection: "column", overflow: "hidden", animation: "fadeLeft 600ms cubic-bezier(0.16,1,0.3,1)" }} className="auth-left">
        {/* Aurora */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: "50%", width: 500, height: 400, transform: "translate(-50%,-30%)", background: "radial-gradient(ellipse, rgba(30,140,69,0.15), transparent 70%)" }} />
          {[{x:-20,d:0},{x:0,d:0.4},{x:20,d:0.8}].map((b,i) => (
            <div key={i} style={{ position: "absolute", top: 0, left: `calc(50% + ${b.x}px)`, width: i === 1 ? 3 : 2, height: i === 1 ? 180 : 130, background: "linear-gradient(to bottom, #22C55E, transparent)", animation: `auroraPulse ${4 + i * 0.3}s ease-in-out ${b.d}s infinite`, opacity: 0.7 }} />
          ))}
          {[{l:"15%",t:"30%"},{l:"82%",t:"22%"},{l:"20%",t:"75%"},{l:"75%",t:"70%"},{l:"50%",t:"15%"},{l:"55%",t:"85%"}].map((p, i) => (
            <span key={i} className="ambient-dot" style={{ left: p.l, top: p.t, "--dur": `${6 + i}s`, "--dx": `${i % 2 ? 10 : -10}px`, "--dy": `${i % 2 ? -8 : 8}px` }} />
          ))}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        </div>

        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff", zIndex: 2 }}>
          <img src="/img/logo.jpeg" alt="Gatimaan Payments" style={{ height: 40, width: "auto", borderRadius: 7 }} />
          <span style={{ fontSize: 16, fontWeight: 500 }}>
            <span style={{ color: "#fff" }}>Gati</span><span style={{ color: "#4ADE80" }}>Maan</span><span style={{ color: "rgba(255,255,255,0.3)" }}> Payments</span>
          </span>
        </Link>

        <div style={{ margin: "auto 0", position: "relative", zIndex: 2, maxWidth: 380 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Welcome back</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 28 }}>Sign in to continue managing your operations</p>

          {/* Feature cards with CRM thumbnails */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            {[
              { src: "/img/dash.png", t: "Your dashboard awaits", s: "Real-time revenue, bills, and retailer metrics" },
              { src: "/img/wallet.png", t: "Wallet operations running", s: "Transfers, credit requests, and settlements" },
              { src: "/img/ledger.png", t: "Commissions being tracked", s: "Your retailer earnings are auto-calculating" },
            ].map((c, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", gap: 12,
                opacity: 0, animation: `fadeUp 600ms cubic-bezier(0.16,1,0.3,1) ${400 + i * 100}ms forwards, screenFloat ${5 + i}s ease-in-out ${i * 0.3}s infinite`,
              }}>
                <img src={c.src} alt="" style={{ width: 56, height: 36, borderRadius: 6, border: "1px solid rgba(30,140,69,0.15)", objectFit: "cover", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{c.t}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{c.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Secure, role-based access", "Real-time dashboard", "Trusted by 200+ retailers"].map((t) => (
              <div key={t} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(30,140,69,0.08)", border: "1px solid rgba(30,140,69,0.15)", borderRadius: 8, padding: "6px 12px", fontSize: 12, color: "rgba(255,255,255,0.85)" }}>
                <i className="ti ti-check" style={{ color: "#4ADE80" }} aria-hidden="true" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 40, background: "var(--bg-surface)", animation: "fadeRight 600ms cubic-bezier(0.16,1,0.3,1) 150ms both" }} className="auth-right">
        <div style={{ width: "100%", maxWidth: 380 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 6px" }}>Welcome back</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>Sign in to your Gatimaan Payments account</p>
          <form onSubmit={submit} noValidate>
            <div style={{ marginBottom: 14 }}>
              <label className="label">Email Address</label>
              <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={h("email")} style={errors.email ? { borderColor: "var(--accent-red)" } : {}} />
              {errors.email && <div style={errStyle}>{errors.email}</div>}
            </div>
            <div style={{ marginBottom: 8 }}>
              <label className="label">Password</label>
              <div style={{ position: "relative" }}>
                <input className="input" type={show ? "text" : "password"} placeholder="Enter password" value={form.password} onChange={h("password")} style={errors.password ? { borderColor: "var(--accent-red)" } : {}} />
                <button type="button" onClick={() => setShow(!show)} aria-label="Toggle password visibility" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", color: "var(--text-muted)" }}>
                  <i className={`ti ti-${show ? "eye-off" : "eye"}`} aria-hidden="true" />
                </button>
              </div>
              {errors.password && <div style={errStyle}>{errors.password}</div>}
            </div>
            <div style={{ textAlign: "right", marginBottom: 20 }}>
              <Link href="#" style={{ fontSize: 13, color: "var(--brand-green-light)" }}>Forgot password?</Link>
            </div>
            <button type="submit" disabled={loading} className="btn-primary cta-shine" style={{ width: "100%", padding: 13, borderRadius: 10, fontSize: 14, opacity: loading ? 0.7 : 1 }}>
              {loading ? <span className="spinner" /> : "Sign In"}
            </button>
            <div style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 12, margin: "18px 0" }}>— or —</div>
            <button type="button" style={{ width: "100%", padding: 12, borderRadius: 10, fontSize: 14, background: "transparent", border: "1px solid var(--border-subtle)", color: "var(--text-primary)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <i className="ti ti-brand-google" aria-hidden="true" /> Continue with Google
            </button>
            <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "var(--text-muted)" }}>
              Don't have an account? <Link href="/signup" style={{ color: "var(--brand-green-light)" }}>Sign up</Link>
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fadeLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        .spinner { width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.4); border-top-color: #fff; border-radius: 50%; display: inline-block; animation: spin 700ms linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .auth-grid { grid-template-columns: 1fr !important; }
          .auth-left { padding: 32px !important; min-height: 360px; }
        }
      `}</style>
    </main>
  );
}

const errStyle = { color: "var(--accent-red)", fontSize: 12, marginTop: 4 };
