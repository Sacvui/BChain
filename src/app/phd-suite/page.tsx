export default function PhDSuiteDashboard() {
  const benchmarks = [
    { name: "Cronbach's Alpha", threshold: "> 0.7", status: "Requirement" },
    { name: "AVE", threshold: "> 0.5", status: "Validity" },
    { name: "CR", threshold: "> 0.7", status: "Reliability" },
    { name: "RMSEA", threshold: "< 0.08", status: "Model Fit" },
  ];

  return (
    <div>
      <header className="header">
        <div className="welcome-msg">
          <h1>Welcome back, Researcher</h1>
          <p>Your thesis project is 65% complete. Focus on Chapter 4 today.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ 
            padding: '0.75rem 1.5rem', 
            borderRadius: '0.5rem', 
            background: 'var(--suite-accent)', 
            border: 'none', 
            color: 'white',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            New Analysis
          </button>
        </div>
      </header>

      <section className="grid-dashboard">
        <div className="card">
          <div className="card-title">
            <div className="active-status"></div>
            Data Analysis Engine
          </div>
          <p className="card-content">
            Currently monitoring SEM model fit. Your latest Chi-square/df is 2.15 (Accepted).
          </p>
          <div className="benchmark-tag">SEM/CFA Ready</div>
        </div>

        <div className="card">
          <div className="card-title">Statistical Benchmarks</div>
          <div className="card-content">
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {benchmarks.map((b, i) => (
                <li key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  padding: '0.5rem 0',
                  borderBottom: i < benchmarks.length - 1 ? '1px solid var(--suite-border)' : 'none'
                }}>
                  <span>{b.name}</span>
                  <span style={{ color: 'var(--suite-accent)' }}>{b.threshold}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Literature Synthesis</div>
          <p className="card-content">
            12 papers pending review for PRISMA flow. Integration with Zotero active.
          </p>
          <div className="benchmark-tag" style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8' }}>
            BibTeX Connected
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Thesis Roadmap Progress</h2>
        <div style={{ 
          background: 'var(--suite-card)', 
          padding: '2rem', 
          borderRadius: '1rem',
          border: '1px solid var(--suite-border)'
        }}>
          {[
            { ch: 1, title: "Dẫn nhập", status: "Completed", width: "100%" },
            { ch: 2, title: "Cơ sở lý thuyết", status: "Completed", width: "100%" },
            { ch: 3, title: "Phương pháp", status: "In Progress", width: "75%" },
            { ch: 4, title: "Kết quả", status: "Planned", width: "10%" },
            { ch: 5, title: "Thảo luận", status: "Planned", width: "0%" },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Chương {item.ch}: {item.title}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--suite-text-muted)' }}>{item.status}</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'var(--suite-border)', borderRadius: '3px' }}>
                <div style={{ width: item.width, height: '100%', background: 'var(--suite-accent)', borderRadius: '3px' }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Contemporary Theory Hub</h2>
        <div className="grid-dashboard">
          <div className="card">
            <div className="card-title">Digital & AI Strategy</div>
            <p className="card-content">
              • <strong>AI-Augmented Management:</strong> Focus on Human-AI collaboration.<br/>
              • <strong>TAM / UTAUT2:</strong> Tech acceptance benchmarks.
            </p>
          </div>
          <div className="card">
            <div className="card-title">Sustainability (ESG)</div>
            <p className="card-content">
              • <strong>Institutional Theory:</strong> Compliance & Legitimacy.<br/>
              • <strong>Signaling Theory:</strong> Transparency via Blockchain.
            </p>
          </div>
          <div className="card">
            <div className="card-title">Adaptive Leadership</div>
            <p className="card-content">
              • <strong>Dynamic Capabilities:</strong> Sensing & Seizing opportunities.<br/>
              • <strong>Human-Centered Leadership:</strong> Psychological safety.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
