"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [form, setForm] = useState({ first: "", last: "", business: "", email: "", phone: "", password: "", confirm: "" });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const strength = (p) => {
    let s = 0;
    if (!p) return 0;
    if (p.length >= 6) s++;
    if (p.length >= 10) s++;
    if (/[A-Z]/.test(p) && /[a-z]/.test(p)) s++;
    if (/[0-9]/.test(p) && /[^A-Za-z0-9]/.test(p)) s++;
    return s;
  };
  const sLevel = strength(form.password);
  const sMeta = [
    { w: "0%",   c: "transparent",   l: "" },
    { w: "25%",  c: "#EF4444",       l: "Weak" },
    { w: "50%",  c: "#F59E0B",       l: "Fair" },
    { w: "75%",  c: "#4ADE80",       l: "Good" },
    { w: "100%", c: "#22C55E",       l: "Strong" },
  ][sLevel];

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    ["first","last","business","email","phone","password","confirm"].forEach((k) => { if (!form[k]) errs[k] = "Required"; });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (form.password && form.confirm && form.password !== form.confirm) errs.confirm = "Passwords do not match";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setLoading(true);
      try {
        localStorage.setItem("gm-justSignedIn", "1");
        localStorage.setItem("gm-kycDone", "0");
      } catch {}
      setTimeout(() => router.push("/dashboard"), 500);
    }
  };

  const h = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <main style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--bg-base)" }} className="auth-grid">
      {/* LEFT PANEL */}
      <div style={{ position: "relative", background: "#060E12", color: "#fff", padding: 48, display: "flex", flexDirection: "column", overflow: "hidden", animation: "fadeLeft 600ms cubic-bezier(0.16,1,0.3,1)" }} className="auth-left">
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
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>Start managing your utility business today</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 24 }}>Everything you need in one platform</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
            {[
              { ic: "ti-bolt", c: "#4ADE80", bg: "rgba(30,140,69,0.15)", t: "Auto-fetch utility bills", s: "Connect 50+ providers. Bills fetched automatically." },
              { ic: "ti-wallet", c: "#06B6D4", bg: "rgba(6,182,212,0.15)", t: "Built-in wallet system", s: "Transfers, credits, treasury — all managed." },
              { ic: "ti-trophy", c: "#F59E0B", bg: "rgba(245,158,11,0.15)", t: "Commission & rewards", s: "Your retailers earn automatically on every sale." },
              { ic: "ti-users", c: "#2563EB", bg: "rgba(37,99,235,0.15)", t: "5 user roles ready", s: "Admin, operations, finance, support, retailer." },
            ].map((c, i) => (
              <div key={i} style={{
                background: "rgba(30,140,69,0.06)", border: "1px solid rgba(30,140,69,0.12)",
                borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", gap: 12,
                opacity: 0, animation: `fadeUp 600ms cubic-bezier(0.16,1,0.3,1) ${300 + i * 100}ms forwards, screenFloat ${4 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
              }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={`ti ${c.ic}`} style={{ color: c.c, fontSize: 18 }} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{c.t}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{c.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
            No credit card required · Free to start · Setup in 10 minutes
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 40px 60px", background: "var(--bg-surface)", animation: "fadeRight 600ms cubic-bezier(0.16,1,0.3,1) 150ms both" }} className="auth-right">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 6px" }}>Create your account</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>Start managing your utility payment business</p>
          <form onSubmit={submit} noValidate>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
              <Field label="First Name" value={form.first} onChange={h("first")} err={errors.first} />
              <Field label="Last Name" value={form.last} onChange={h("last")} err={errors.last} />
            </div>
            <Field label="Business Name" value={form.business} onChange={h("business")} err={errors.business} />
            <Field label="Email Address" type="email" value={form.email} onChange={h("email")} err={errors.email} />
            <div style={{ marginBottom: 14 }}>
              <label className="label">Phone Number</label>
              <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.04)", border: `1px solid ${errors.phone ? "var(--accent-red)" : "rgba(255,255,255,0.1)"}`, borderRadius: 9, overflow: "hidden" }}>
                <span style={{ padding: "11px 12px", borderRight: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 14, fontWeight: 500 }}>+91</span>
                <input type="tel" placeholder="XXXXX XXXXX" value={form.phone} onChange={h("phone")} style={{ flex: 1, background: "transparent", border: "none", color: "var(--text-primary)", padding: "11px 14px", fontSize: 14, outline: "none", fontFamily: "inherit" }} />
              </div>
              {errors.phone && <div style={errStyle}>{errors.phone}</div>}
            </div>
            <div style={{ marginBottom: 8 }}>
              <label className="label">Password</label>
              <div style={{ position: "relative" }}>
                <input className="input" type={show ? "text" : "password"} value={form.password} onChange={h("password")} style={errors.password ? { borderColor: "var(--accent-red)" } : {}} />
                <button type="button" onClick={() => setShow(!show)} aria-label="Toggle password" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", color: "var(--text-muted)" }}>
                  <i className={`ti ti-${show ? "eye-off" : "eye"}`} aria-hidden="true" />
                </button>
              </div>
              {form.password && (
                <div style={{ marginTop: 6 }}>
                  <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ width: sMeta.w, height: "100%", background: sMeta.c, transition: "width 300ms ease, background 300ms ease" }} />
                  </div>
                  <div style={{ color: sMeta.c, fontSize: 11, marginTop: 4 }}>{sMeta.l}</div>
                </div>
              )}
              {errors.password && <div style={errStyle}>{errors.password}</div>}
            </div>
            <Field label="Confirm Password" type="password" value={form.confirm} onChange={h("confirm")} err={errors.confirm} />
            <p style={{ fontSize: 12, color: "var(--text-muted)", margin: "12px 0 16px" }}>
              By signing up, you agree to our <Link href="#" target="_blank" style={{ color: "var(--brand-green-light)" }}>Terms of Service</Link> and <Link href="#" target="_blank" style={{ color: "var(--brand-green-light)" }}>Privacy Policy</Link>
            </p>
            <button type="submit" disabled={loading} className="btn-primary cta-shine" style={{ width: "100%", padding: 13, borderRadius: 10, fontSize: 14, opacity: loading ? 0.7 : 1 }}>
              {loading ? <span className="spinner" /> : "Create Account"}
            </button>
            <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "var(--text-muted)" }}>
              Already have an account? <Link href="/signin" style={{ color: "var(--brand-green-light)" }}>Sign in</Link>
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
          .auth-left { padding: 32px !important; }
        }
      `}</style>
    </main>
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
