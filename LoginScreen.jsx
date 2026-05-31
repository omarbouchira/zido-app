import { useState } from "react";

const PASSWORD = "lesucre12";

export default function LoginScreen({ onLogin }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (input === PASSWORD) {
      onLogin();
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');`}</style>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "linear-gradient(135deg, #f0fdf4 0%, #f3f4f6 100%)" }}>
        <div style={{ background: "#fff", padding: "2.5rem", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.10)", textAlign: "center", minWidth: 320, border: "1px solid #e5e7eb" }}>
          <div style={{ background: "#16a34a", borderRadius: 12, width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <span style={{ fontSize: 26 }}>🌿</span>
          </div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", marginBottom: 4 }}>Zido HACCP</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#6b7280", marginBottom: 28 }}>Accès privé — Back-office IA</div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false); }}
            onKeyDown={e => e.key === "Enter" && handleSubmit()}
            style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: error ? "2px solid #dc2626" : "2px solid #e5e7eb", fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#111827", outline: "none", boxSizing: "border-box", marginBottom: 8 }}
          />
          {error && <p style={{ color: "#dc2626", fontSize: 13, marginBottom: 10, fontFamily: "'DM Sans', sans-serif" }}>❌ Mot de passe incorrect</p>}
          <button
            onClick={handleSubmit}
            style={{ width: "100%", padding: "12px 24px", background: "#16a34a", color: "#fff", border: "none", borderRadius: 12, fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", marginTop: 4 }}
          >
            Entrer
          </button>
        </div>
      </div>
    </>
  );
}
