import "./suite.css";

export default function PhDSuiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="suite-container">
      <aside className="suite-sidebar">
        <div className="suite-logo">PhD Research Suite</div>
        
        <nav className="nav-group">
          <span className="nav-label">Core Skills</span>
          <div className="nav-item active">
            <span>Dashboard</span>
          </div>
          <div className="nav-item">
            <span>Literature Review</span>
          </div>
          <div className="nav-item">
            <span>Research Framework</span>
          </div>
          <div className="nav-item">
            <span>Methodology</span>
          </div>
          <div className="nav-item">
            <span>Data Analysis</span>
          </div>
          <div className="nav-item">
            <span>Academic Writing</span>
          </div>
          <div className="nav-item">
            <span>Citation Manager</span>
          </div>
          <div className="nav-item">
            <span>Critical Review</span>
          </div>
        </nav>

        <nav className="nav-group">
          <span className="nav-label">Thesis Roadmap</span>
          <div className="nav-item">
            <span>Chapter 1: Intro</span>
          </div>
          <div className="nav-item">
            <span>Chapter 4: Results</span>
          </div>
        </nav>

        <div style={{ marginTop: 'auto' }}>
          <div className="nav-item">
            <span>Settings</span>
          </div>
        </div>
      </aside>
      
      <main className="suite-main">
        {children}
      </main>
    </div>
  );
}
