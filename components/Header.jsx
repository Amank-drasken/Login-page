"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = (active) => ({
    fontSize: 14,
    color: active ? "var(--text-primary)" : "var(--text-secondary)",
    borderBottom: active ? "2px solid var(--brand-green-mid)" : "2px solid transparent",
    paddingBottom: 4,
    transition: "color 150ms",
  });

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        background: scrolled ? "rgba(6,14,18,0.95)" : "var(--header-bg)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border-green)",
        zIndex: 100,
        transition: "background 200ms",
      }}
    >
      <div className="container" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/img/logo.jpeg" alt="Gatimaan Payments" style={{ height: 34, width: "auto", borderRadius: 6 }} />
          <span className="brand-text" style={{ fontSize: 15, fontWeight: 500 }}>
            <span className="gati">Gati</span><span className="maan">Maan</span><span className="payments"> Payments</span>
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="desktop-nav">
          <Link href="/" style={linkStyle(path === "/")}>Home</Link>
          <Link href="/about" style={linkStyle(path === "/about")}>About Us</Link>
          <div style={{ position: "relative" }} onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
            <span style={{ ...linkStyle(path.startsWith("/services")), cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4 }}>
              Services <i className="ti ti-chevron-down" aria-hidden="true" />
            </span>
            {svcOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, marginTop: 8, width: 240, background: "var(--bg-elevated)", border: "1px solid var(--border-green)", borderRadius: 10, padding: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.3)", animation: "fadeUp 200ms ease-out" }}>
                <Link href="/services" style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: 8, borderRadius: 6, transition: "background 150ms" }} onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(30,140,69,0.08)")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                  <i className="ti ti-file-invoice" style={{ color: "var(--brand-green-light)", fontSize: 16, marginTop: 2 }} aria-hidden="true" />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>Bill Payments</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Auto-fetch & manage utility bills</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" style={linkStyle(path === "/contact")}>Contact Us</Link>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <ThemeToggle />
          <Link href="/signin" className="btn-ghost" style={{ display: "inline-block" }}>Sign In</Link>
          <Link href="/signup" className="btn-primary" style={{ display: "inline-block", padding: "7px 18px", fontSize: 13, animation: "none" }}>Sign Up</Link>
          <button onClick={() => setMobile(!mobile)} className="mobile-menu-btn" aria-label="Menu" style={{ display: "none", background: "transparent", border: "none", color: "var(--text-primary)", fontSize: 22 }}>
            <i className={`ti ${mobile ? "ti-x" : "ti-menu-2"}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobile && (
        <div style={{ position: "fixed", top: 64, right: 0, bottom: 0, width: 280, background: "var(--header-bg)", backdropFilter: "blur(14px)", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          <Link href="/" onClick={() => setMobile(false)} style={{ fontSize: 16, padding: "12px 0" }}>Home</Link>
          <Link href="/about" onClick={() => setMobile(false)} style={{ fontSize: 16, padding: "12px 0" }}>About Us</Link>
          <Link href="/services" onClick={() => setMobile(false)} style={{ fontSize: 16, padding: "12px 0" }}>Services</Link>
          <Link href="/contact" onClick={() => setMobile(false)} style={{ fontSize: 16, padding: "12px 0" }}>Contact Us</Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
