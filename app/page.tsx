import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: "120px 0 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="heading-1">
            Find Local Talent.{" "}
            <span className="text-gradient">Instantly.</span>
          </h1>
          <p
            className="text-lg"
            style={{ margin: "0 auto 40px", fontSize: "1.25rem" }}
          >
            Connect with local help and clients with local service providers
            instantly.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              marginBottom: "80px",
            }}
          >
            <button className="btn-secondary">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.05 20.28c-.98.54-2.06.81-3.14.81-1.07 0-2.15-.27-3.13-.81-1.89-1.04-3.52-2.67-4.56-4.56C5.17 13.84 4.9 12.76 4.9 11.69c0-1.08.27-2.15.82-3.13 1.04-1.89 2.67-3.52 4.56-4.56.98-.55 2.05-.82 3.13-.82 1.08 0 2.16.27 3.14.82 1.89 1.04 3.52 2.67 4.56 4.56.55.98.82 2.05.82 3.13 0 1.07-.27 2.15-.82 3.13-1.04 1.89-2.67 3.52-4.56 4.56z" opacity=".2"/>
                <path d="M15.42 16.74c-.6.33-1.29.5-1.99.5s-1.39-.17-1.99-.5c-1.22-.67-2.22-1.67-2.89-2.89-.33-.6-.5-1.29-.5-1.99s.17-1.39.5-1.99c.67-1.22 1.67-2.22 2.89-2.89.6-.33 1.29-.5 1.99-.5s1.39.17 1.99.5c1.22.67 2.22 1.67 2.89 2.89.33.6.5 1.29.5 1.99s-.17 1.39-.5 1.99c-.67 1.22-1.67 2.22-2.89 2.89zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.43 14.74c-.98.54-2.06.81-3.14.81-1.07 0-2.15-.27-3.13-.81-1.89-1.04-3.52-2.67-4.56-4.56C4.05 10.3 3.78 9.22 3.78 8.15c0-1.08.27-2.15.82-3.13 1.04-1.89 2.67-3.52 4.56-4.56.98-.55 2.05-.82 3.13-.82 1.08 0 2.16.27 3.14.82 1.89 1.04 3.52 2.67 4.56 4.56.55.98.82 2.05.82 3.13 0 1.07-.27 2.15-.82 3.13-1.04 1.89-2.67 3.52-4.56 4.56z"/>
              </svg>
              Download on App Store
            </button>
            <button className="btn-secondary">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.05 20.28c-.98.54-2.06.81-3.14.81-1.07 0-2.15-.27-3.13-.81-1.89-1.04-3.52-2.67-4.56-4.56C5.17 13.84 4.9 12.76 4.9 11.69c0-1.08.27-2.15.82-3.13 1.04-1.89 2.67-3.52 4.56-4.56.98-.55 2.05-.82 3.13-.82 1.08 0 2.16.27 3.14.82 1.89 1.04 3.52 2.67 4.56 4.56.55.98.82 2.05.82 3.13 0 1.07-.27 2.15-.82 3.13-1.04 1.89-2.67 3.52-4.56 4.56z" opacity=".2"/>
                <path d="M15.42 16.74c-.6.33-1.29.5-1.99.5s-1.39-.17-1.99-.5c-1.22-.67-2.22-1.67-2.89-2.89-.33-.6-.5-1.29-.5-1.99s.17-1.39.5-1.99c.67-1.22 1.67-2.22 2.89-2.89.6-.33 1.29-.5 1.99-.5s1.39.17 1.99.5c1.22.67 2.22 1.67 2.89 2.89.33.6.5 1.29.5 1.99s-.17 1.39-.5 1.99c-.67 1.22-1.67 2.22-2.89 2.89zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.43 14.74c-.98.54-2.06.81-3.14.81-1.07 0-2.15-.27-3.13-.81-1.89-1.04-3.52-2.67-4.56-4.56C4.05 10.3 3.78 9.22 3.78 8.15c0-1.08.27-2.15.82-3.13 1.04-1.89 2.67-3.52 4.56-4.56.98-.55 2.05-.82 3.13-.82 1.08 0 2.16.27 3.14.82 1.89 1.04 3.52 2.67 4.56 4.56.55.98.82 2.05.82 3.13 0 1.07-.27 2.15-.82 3.13-1.04 1.89-2.67 3.52-4.56 4.56z"/>
              </svg>
              Get it on Google Play
            </button>
          </div>
        </div>
        
        {/* Abstract mock of app */}
        <div style={{
          width: '320px',
          height: '650px',
          background: 'var(--bg-card)',
          borderRadius: '40px',
          border: '8px solid rgba(255,255,255,0.05)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--border-glass)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(5deg)'
        }}>
           <div style={{
             position: 'absolute',
             top: '15px',
             width: '100px',
             height: '30px',
             background: 'rgba(0,0,0,0.8)',
             borderRadius: '15px',
           }}></div>
           <div style={{ color: 'var(--accent-teal)', fontSize: '24px', fontWeight: 'bold' }}>Gigz</div>
           <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', padding: '40px' }}>
              {[1,2,3,4,5].map(i => (
                <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-teal)', opacity: 0.2 }}></div>
              ))}
           </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <h2 className="heading-2">Why Gigz?</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            <div className="glass-card">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(20, 184, 166, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-teal)",
                  marginBottom: "20px",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3 className="heading-3">Location-based discovery</h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Location-based discovery connecting clients with local service
                providers instantly.
              </p>
            </div>
            
            <div className="glass-card">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(20, 184, 166, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-teal)",
                  marginBottom: "20px",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="heading-3">Real-time availability</h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Real-time availability means you can hire someone right when you need them.
              </p>
            </div>

            <div className="glass-card">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(20, 184, 166, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-teal)",
                  marginBottom: "20px",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="heading-3">Secure payments</h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Secure payments to offer insurance and more secure transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section style={{ padding: "100px 0", background: "rgba(255,255,255,0.02)" }}>
        <div className="container">
          <h2 className="heading-2">How it works</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
              textAlign: "center",
            }}
          >
            <div>
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                border: "2px solid var(--accent-teal)", color: "var(--accent-teal)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px", fontWeight: "bold", margin: "0 auto 24px"
              }}>1</div>
              <p style={{ color: "var(--text-secondary)" }}>Clients use the Gigz app to find and hire local talent.</p>
            </div>
            <div>
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                border: "2px solid var(--accent-teal)", color: "var(--accent-teal)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px", fontWeight: "bold", margin: "0 auto 24px"
              }}>2</div>
              <p style={{ color: "var(--text-secondary)" }}>Match in real-time with available service providers.</p>
            </div>
            <div>
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                border: "2px solid var(--accent-teal)", color: "var(--accent-teal)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px", fontWeight: "bold", margin: "0 auto 24px"
              }}>3</div>
              <p style={{ color: "var(--text-secondary)" }}>Get the job done and pay securely through the app.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
