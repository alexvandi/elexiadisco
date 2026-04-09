import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    // Adding noise overlay strictly via DOM to avoid React rendering issues
    const noise = document.createElement('div');
    noise.className = 'noise-overlay';
    document.body.appendChild(noise);
    return () => document.body.removeChild(noise);
  }, []);

  return (
    <div className="app-wrapper">
      {/* Ambient background glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <nav className="navbar">
        <div className="nav-brand">
          <img src="/logo.png" alt="Elexia Logo" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
          <span className="brand-text">ELEXIA</span>
        </div>
        <div className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#layout">Gestione Sala</a>
          <a href="#integrazioni">Integrazioni</a>
          <a href="#stats">Statistiche</a>
        </div>
        <div className="nav-actions">
          <button className="btn btn-secondary" style={{ padding: '12px 24px', fontSize: '14px' }}>Accedi al Gestionale</button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="badge">
            <span style={{ marginRight: '8px', display: 'inline-block', animation: 'pulse-ring 2s infinite', borderRadius: '50%', width: '8px', height: '8px', background: 'var(--accent-primary)' }}></span>
            L'Ecosistema Premium per la Ristorazione & Club
          </div>
          <h1>
            Controllo Totale.<br />
            <span className="text-gradient">Servizio Perfetto.</span>
          </h1>
          <p>
            Dal layout di sala al walk-in istantaneo, passando per l'integrazione TheFork in tempo reale. 
            Il gestionale web che eleva l'operatività del tuo locale portandola nel futuro.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary">Richiedi Demo Completa</button>
            <button className="btn btn-secondary">Scopri i Moduli</button>
          </div>
        </section>

        <section className="showcase-container">
          <div className="device-cluster">
            {/* PC Wrap */}
            <div className="mac-mockup">
              <div className="mac-header">
                <div className="mac-dot close"></div>
                <div className="mac-dot min"></div>
                <div className="mac-dot max"></div>
              </div>
              <img src="/da_pc.png" alt="Elexia Dashboard su Desktop" />
            </div>

            {/* iPhone Wrap */}
            <div className="iphone-wrapper">
              <div className="iphone-mockup">
                <div className="iphone-notch"></div>
                <img src="/schermata_iphone.png" alt="Elexia Dashboard su Mobile" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Split Section */}
        <section id="piattaforma" className="features-section extended-features">
          <div className="section-header">
            <h2>Non è un semplice gestionale. <br />È il motore del tuo locale.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
              Abbiamo ricostruito la gestione delle prenotazioni da zero, mettendo al centro la velocità operativa 
              nella gestione dei turni e la massima sincronizzazione con i motori di prenotazione esterni.
            </p>
          </div>

          <div className="features-grid grid-2x2">
            
            <div className="feature-card technical-card">
              <div className="feature-icon">🔍</div>
              <h3>Layout Sala Dinamico & Walk-in Istantanei</h3>
              <p>Mappa visiva interattiva divisa tra Sala Interna ed Esterna. Visualizzazione istantanea dei tavoli occupati 
                con possibilità di creare ingressi "Walk-in" con un singolo clic su un tavolo libero. Gestione perfetta del servizio.</p>
              <ul className="tech-list">
                <li><span>•</span> Gestione Turni (Es. 1° e 2° Turno)</li>
                <li><span>•</span> Filtri istantanei Pranzo/Cena</li>
                <li><span>•</span> Overlay di "chiusura" per giorni di riposo</li>
              </ul>
            </div>

            <div className="feature-card technical-card">
              <div className="feature-icon">⚡</div>
              <h3>Assegnazione Algoritmica</h3>
              <p>Il sistema calcola automaticamente quanti tavoli unire in base al numero di ospiti, assegnando 
                immediatamente la prenotazione ai tavoli liberi secondo i tuoi parametri di occupazione (es. 2 persone per modulo).</p>
               <ul className="tech-list">
                <li><span>•</span> Buffer di tolleranza oraria (±90 min)</li>
                <li><span>•</span> Algoritmi di merge automatico dei tavoli proposti</li>
                <li><span>•</span> Override manuale istantaneo</li>
              </ul>
            </div>

            <div className="feature-card technical-card">
              <div className="feature-icon">🔗</div>
              <h3>Integrazione TheFork & API Native</h3>
              <p>Dimentica l'inserimento manuale. Tutte le prenotazioni da TheFork o da app terze fluiscono in tempo reale 
                in Elexia. Endpoint per la verifica delle disponibilità condivisi con bot esterni e canali di vendita.</p>
              <ul className="tech-list">
                <li><span>•</span> Sync webhooks senza ritardi</li>
                <li><span>•</span> Architettura REST per moduli esterni (WhatsApp ready)</li>
                <li><span>•</span> Sicurezza Token IAM & Row Level Security</li>
              </ul>
            </div>

            <div className="feature-card technical-card">
              <div className="feature-icon">📊</div>
              <h3>Business Intelligence & Statistiche Real-time</h3>
              <p>Tutte le KPI che contano in una dashboard moderna. Confronta i coperti odierni con quelli mensili, controlla 
                il tuo tasso d'occupazione e scopri esattamente quanto peso hanno le integrazioni (TheFork vs Walk-in vs Dirette).</p>
               <ul className="tech-list">
                <li><span>•</span> Statistiche coperti e rapporto sala</li>
                <li><span>•</span> Archiviazione rapida dello storico</li>
                <li><span>•</span> Esportazioni CSV per backend amministrativo</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Security / Architecture block */}
        <section className="architecture-showcase cta-section" style={{ background: 'var(--bg-darker)' }}>
          <div className="arch-content">
            <h3 style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', marginBottom: '16px'}}>Enterprise Grade</h3>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Fondazioni Infallibili.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 60px' }}>
              Elexia è costruito con uno stack moderno (Vite, React, TypeScript) accoppiato a un motore backend Supabase Edge. 
              Massima sicurezza dei dati, autorizzazioni Row Level Security e architettura zero-downtime.
            </p>
          </div>
        </section>

        <section className="cta-section" style={{ paddingTop: '80px' }}>
          <div className="cta-box">
            <h2>Scopri il vero potenziale della tua sala.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '40px' }}>
              Elimina errori, semplifica la vita al tuo staff in sala e tieni sotto controllo ogni singola prenotazione.
            </p>
            <button className="btn btn-primary" style={{ transform: 'scale(1.1)' }}>Contatta il Team Prodotti Elexia</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '20px' }}>ELEXIA DISCO</span>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Elexia Systems. Architettura e Sviluppo in Cloud.
        </div>
        <div className="footer-legal">
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '20px' }}>API Docs</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '20px' }}>Privacy & RLS</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
