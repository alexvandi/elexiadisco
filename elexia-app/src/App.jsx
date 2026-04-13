import React, { useEffect, useState } from 'react';
import './App.css';

const SHOWCASE_TABS = [
  { id: 'tavoli',        label: 'Tavoli',        img: '/da_pc.png' },
  { id: 'omaggi',        label: 'Omaggi',        img: '/omaggi_pc.PNG' },
  { id: 'prenotazioni',  label: 'Prenotazioni',  img: '/prenotazioni.PNG' },
  { id: 'contabilita',   label: 'Contabilità',   img: '/contabilita_pc.PNG' },
];


function App() {
  const [activeTab, setActiveTab] = useState('tavoli');
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="#tavoli">Tavoli</a>
          <a href="#omaggi">Omaggi</a>
          <a href="#contabilita">Contabilità</a>
          <a href="#team">Team</a>
          <a href="#agente-ai">Agente AI</a>
        </div>
        <div className="nav-actions">
          <button className="btn btn-secondary" style={{ padding: '12px 24px', fontSize: '14px' }}>Accedi al Gestionale</button>
        </div>
        {/* Hamburger mobile */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span className={`ham-line${menuOpen ? ' open' : ''}`}></span>
          <span className={`ham-line${menuOpen ? ' open' : ''}`}></span>
          <span className={`ham-line${menuOpen ? ' open' : ''}`}></span>
        </button>
      </nav>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#tavoli"      onClick={() => setMenuOpen(false)}>Tavoli</a>
          <a href="#omaggi"      onClick={() => setMenuOpen(false)}>Omaggi</a>
          <a href="#contabilita" onClick={() => setMenuOpen(false)}>Contabilità</a>
          <a href="#team"        onClick={() => setMenuOpen(false)}>Team</a>
          <a href="#agente-ai"   onClick={() => setMenuOpen(false)}>Agente AI</a>
          <button className="btn btn-primary" style={{marginTop:'8px',width:'100%'}}>Accedi al Gestionale</button>
        </div>
      )}

      <main>
        <section className="hero">
          <div className="badge">
            <span style={{ marginRight: '8px', display: 'inline-block', animation: 'pulse-ring 2s infinite', borderRadius: '50%', width: '8px', height: '8px', background: 'var(--accent-primary)' }}></span>
            Il tuo locale, a portata di mano
          </div>
          <h1>
            Gestisci la Notte.<br />
            <span className="text-gradient">Come Mai Prima.</span>
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
                {/* Tab slider inside the PC frame */}
                <div className="showcase-tabs">
                  {SHOWCASE_TABS.map(tab => (
                    <button
                      key={tab.id}
                      className={`showcase-tab${activeTab === tab.id ? ' active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mac-screens">
                {SHOWCASE_TABS.map(tab => (
                  <img
                    key={tab.id}
                    src={tab.img}
                    alt={`Elexia ${tab.label} su Desktop`}
                    className={`mac-screen${activeTab === tab.id ? ' visible' : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* iPhone Wrap */}
            <div className="iphone-wrapper">
              <div className="iphone-mockup">
                <img src="/schermata_iphone_new.jpeg" alt="Elexia Dashboard su Mobile" />
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

          <div className="stats-strip">
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Digitale e in tempo reale</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">5</span>
              <span className="stat-label">Sezioni di controllo integrate</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Agente AI attivo su WhatsApp</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">0</span>
              <span className="stat-label">Excel ancora aperti</span>
            </div>
          </div>

        </section>

        {/* Sezione Tavoli */}
        <section id="tavoli" className="feature-split-section">
          <div className="feature-split-text">
            <div className="feature-split-badge">Sezione Tavoli</div>
            <h2>La tua sala,<br /><span className="text-gradient">sempre sotto controllo</span></h2>
            <p>La mappa interattiva mostra in tempo reale lo stato di ogni tavolo. Gestisci arrivi, aggiungi spostamenti in pochi secondi — senza alzarti dalla cassa.</p>
            <ul className="feature-split-list">
              <li><span className="check">✓</span> Stato fondo aggiornato in tempo reale per tutto lo staff</li>
              <li><span className="check">✓</span> Aggiungi arrivo, sposta tavolo, aggiungi coperti</li>
              <li><span className="check">✓</span> Barra di progresso stato del saldo per ogni fondo</li>
              <li><span className="check">✓</span> Multi-sala: Pista, Sala, ecc. Private e layout personalizzabili</li>
              <li><span className="check">✓</span> Scheda prenotazione con dettaglio completo ospite e PR</li>
            </ul>
          </div>
          <div className="feature-split-visual">
            <div className="tavoli-duo-grid">
              <div className="split-screen-mockup">
                <div className="split-mac-header">
                  <div className="mac-dot close"></div>
                  <div className="mac-dot min"></div>
                  <div className="mac-dot max"></div>
                  <span className="split-mac-title">Dettagli Prenotazione</span>
                </div>
                <img src="/dettagli_prenotazione.PNG" alt="Dettagli Prenotazione" />
              </div>
              <div className="split-screen-mockup">
                <div className="split-mac-header">
                  <div className="mac-dot close"></div>
                  <div className="mac-dot min"></div>
                  <div className="mac-dot max"></div>
                  <span className="split-mac-title">Stato e Saldo</span>
                </div>
                <img src="/stato_prenotazioni.PNG" alt="Stato Prenotazioni" />
              </div>
            </div>
          </div>
        </section>

        {/* Sezione Prenotazioni — immagine sinistra, testo destra */}
        <section id="prenotazioni" className="feature-split-section feature-split-reversed">
          <div className="feature-split-visual">
            <div className="prenotazioni-screen-wrap">
              <div className="split-screen-mockup">
                <div className="split-mac-header">
                  <div className="mac-dot close"></div>
                  <div className="mac-dot min"></div>
                  <div className="mac-dot max"></div>
                  <span className="split-mac-title">Prenotazioni</span>
                </div>
                <img src="/prenotazioni.PNG" alt="Lista Prenotazioni" />
              </div>
              <p className="screen-caption">
                Vista lista prenotazioni con <strong>riepilogo completo</strong>: ospiti, saldo, occupazione e media per tavolo.
              </p>
            </div>
          </div>
          <div className="feature-split-text">
            <div className="feature-split-badge">Sezione Prenotazioni</div>
            <h2>Tutto il quadro,<br />in un solo colpo<br /><span className="text-gradient">d'occhio</span></h2>
            <p>Dimentica i foglietti e le chat. Tutte le prenotazioni in lista, filtrabili per evento, sala e stato. Il riepilogo economico è sempre aggiornato in tempo reale.</p>
            <ul className="feature-split-list">
              <li><span className="check">✓</span> Totale ospiti, incasso e occupazione in tempo reale</li>
              <li><span className="check">✓</span> Filtri per evento, sala, stato e ricerca per nome o telefono</li>
              <li><span className="check">✓</span> Stato tavolo: Prenotata, In corso, Cancellata</li>
              <li><span className="check">✓</span> Dettaglio coperti, PR assegnato, saldo versato e residuo</li>
            </ul>
          </div>
        </section>

        {/* Sezione Omaggi — immagine sinistra, testo destra */}
        <section id="omaggi" className="feature-split-section feature-split-reversed">
          <div className="feature-split-text">
            <div className="feature-split-badge">Sezione Omaggi</div>
            <h2>Lista ospiti<br /><span className="text-gradient">sempre aggiornata</span></h2>
            <p>Ogni PR inserisce i propri ospiti dal suo account. L'Admin vede tutto in tempo reale e imposta i limiti per ciascuno. All'ingresso basta un click per segnare l'arrivo.</p>
            <ul className="feature-split-list">
              <li><span className="check">✓</span> Importa liste da WhatsApp o email con copia-incolla in blocco</li>
              <li><span className="check">✓</span> Limiti omaggio personalizzabili per ogni PR o Staff</li>
              <li><span className="check">✓</span> Check-in rapido: spunta verde → nome passa in "Omaggi Entrati"</li>
              <li><span className="check">✓</span> Inversione con click blu se check-in effettuato per errore</li>
              <li><span className="check">✓</span> Ricerca istantanea per nome o cognome nella lista</li>
            </ul>
          </div>
          <div className="feature-split-visual">
            <div className="split-screen-mockup">
              <div className="split-mac-header">
                <div className="mac-dot close"></div>
                <div className="mac-dot min"></div>
                <div className="mac-dot max"></div>
                <span className="split-mac-title">Omaggi</span>
              </div>
              <img src="/omaggi_pc.PNG" alt="Omaggi" />
            </div>
          </div>
        </section>

        {/* Sezione Contabilità — Dettaglio Tavolo */}
        <section id="contabilita" className="feature-split-section">
          <div className="feature-split-text">
            <div className="feature-split-badge">Contabilità — Dettaglio Tavolo</div>
            <h2>Ogni movimento<br />tracciato come una<br /><span className="text-gradient">partita doppia</span></h2>
            <p>Clicca su qualsiasi tavolo nella sezione contabilità per vedere lo storico completo dei movimenti — con data, ora, operatore e modalità di pagamento per ogni singola operazione registrata.</p>
            <ul className="feature-split-list">
              <li><span className="check">✓</span> Cronologia completa: acconti pre-evento, saldi serata, rettifiche</li>
              <li><span className="check">✓</span> Ogni movimento riporta l'operatore che lo ha inserito</li>
              <li><span className="check">✓</span> Contante ed elettronico tracciati separatamente</li>
              <li><span className="check">✓</span> Rettifiche negative visibili chiaramente in rosso</li>
              <li><span className="check">✓</span> Il saldo cambia automaticamente su statistiche e panoramica</li>
            </ul>
          </div>
          <div className="feature-split-visual">
            <div className="contabilita-mockup">
              <div className="contabilita-header">
                <span>ESEMPIO RIEPILOGO SERATA — CLOSING PARTY 12/04/2026</span>
              </div>
              <div className="contabilita-stats">
                <div className="cstat-item">
                  <span className="cstat-value accent">5.500€</span>
                  <span className="cstat-label">INCASSO TOTALE</span>
                </div>
                <div className="cstat-item">
                  <span className="cstat-value green">3.000€</span>
                  <span className="cstat-label">INCASSATO</span>
                </div>
                <div className="cstat-item">
                  <span className="cstat-value yellow">2.500€</span>
                  <span className="cstat-label">DA INCASSARE</span>
                </div>
                <div className="cstat-item">
                  <span className="cstat-value blue">1.750€</span>
                  <span className="cstat-label">CONTANTE</span>
                </div>
                <div className="cstat-item">
                  <span className="cstat-value blue">1.250€</span>
                  <span className="cstat-label">ELETTRONICO</span>
                </div>
                <div className="cstat-item">
                  <span className="cstat-value">1 / 2</span>
                  <span className="cstat-label">TAVOLI SALDATI</span>
                </div>
              </div>
              <div className="contabilita-table-wrap">
                <div className="ctable-title">DETTAGLIO MOVIMENTI — ELIA VANDI · TAVOLO T-32</div>
                <table className="ctable">
                  <thead>
                    <tr>
                      <th>DATA</th><th>ORA</th><th>OPERATORE</th><th>DESCRIZIONE</th><th>MODALITÀ</th><th>IMPORTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12/04/2026</td><td>12:11</td><td>Admin</td><td>Acconto pre-evento</td>
                      <td><span className="badge-pill contanti">CONTANTI</span></td>
                      <td className="imp-green">1.000€</td>
                    </tr>
                    <tr>
                      <td>12/04/2026</td><td>12:11</td><td>Admin</td><td>Saldo serata</td>
                      <td><span className="badge-pill contanti">CONTANTI</span></td>
                      <td className="imp-green">650€</td>
                    </tr>
                    <tr>
                      <td>12/04/2026</td><td>12:11</td><td>Admin</td><td>Saldo serata</td>
                      <td><span className="badge-pill contanti">CONTANTI</span></td>
                      <td className="imp-green">300€</td>
                    </tr>
                    <tr>
                      <td>12/04/2026</td><td>12:11</td><td>Admin</td><td>Saldo serata</td>
                      <td><span className="badge-pill elettronico">ELETTRONICO</span></td>
                      <td className="imp-green">1.000€</td>
                    </tr>
                    <tr>
                      <td>12/04/2026</td><td>12:12</td><td>Admin</td><td>rettifica</td>
                      <td><span className="badge-pill contanti">CONTANTI</span></td>
                      <td className="imp-red">-100€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Contabilità — Gestione Rapida */}
        <section className="feature-split-section feature-split-reversed">
          <div className="feature-split-visual">
            <div className="split-screen-mockup">
              <div className="split-mac-header">
                <div className="mac-dot close"></div>
                <div className="mac-dot min"></div>
                <div className="mac-dot max"></div>
                <span className="split-mac-title">Registra Pagamento</span>
              </div>
              <img src="/pagamentotavolo.png" alt="Registra Pagamento Tavolo" />
            </div>
          </div>
          <div className="feature-split-text">
            <div className="feature-split-badge">Contabilità — Gestione Rapida</div>
            <h2>Registra un pagamento<br />da qualsiasi sezione,<br /><span className="text-gradient">in pochi secondi</span></h2>
            <p>Il simbolo € presente in ogni scheda tavolo — sia dalla mappa che dalla lista prenotazioni — apre immediatamente la schermata di pagamento. Puoi registrare un acconto o un saldo senza cambiare sezione.</p>
            <ul className="feature-split-list">
              <li><span className="check">✓</span> Importo, modalità e descrizione in un'unica schermata</li>
              <li><span className="check">✓</span> Barra di progresso visiva: da 0% a 100% pagato</li>
              <li><span className="check">✓</span> Stato automatico: DA SALDARE → PAGATO al completamento</li>
              <li><span className="check">✓</span> Aggiornamento immediato su contabilità e statistiche</li>
            </ul>
          </div>
        </section>

        {/* Sezione Team */}
        <section id="team" className="team-section">

          {/* Header */}
          <div className="team-header">
            <div className="feature-split-badge">Gestione Team</div>
            <h2>Tu decidi chi fa cosa.<br /><span className="text-gradient">Tu controlli tutto.</span></h2>
            <p>ELEXIA è costruita attorno a un sistema di permessi preciso: l'Admin ha visione e controllo totale, ogni collaboratore vede e modifica solo ciò che gli compete.</p>
          </div>

          {/* Role Cards */}
          <div className="team-roles-grid">
            <div className="team-role-card">
              <div className="team-role-icon">👑</div>
              <div className="team-role-content">
                <h4>Account Admin</h4>
                <p>Il titolare o l'organizzatore dell'evento. Ha accesso completo a ogni sezione: tavoli, omaggi, prenotazioni, statistiche e contabilità. Vede in tempo reale ogni modifica effettuata da PR e Staff tramite il pannello notifiche.</p>
                <span className="team-role-badge admin">Accesso totale</span>
              </div>
            </div>
            <div className="team-role-card">
              <div className="team-role-icon">🎤</div>
              <div className="team-role-content">
                <h4>Promoter (PR)</h4>
                <p>Ogni PR ha il proprio account nominativo e inserisce le proprie prenotazioni e liste omaggi. L'Admin può impostare un limite massimo di omaggi per ciascun PR, mantenendo il pieno controllo sui numeri della serata.</p>
                <span className="team-role-badge pr">Permessi granulari</span>
              </div>
            </div>
            <div className="team-role-card">
              <div className="team-role-icon">🔐</div>
              <div className="team-role-content">
                <h4>Ingressista Tavoli</h4>
                <p>Account dedicato al personale che gestisce l'ingresso ai tavoli. Può registrare arrivi e pagamenti in tempo reale direttamente dalla propria postazione, senza accedere alle aree riservate all'Admin.</p>
                <span className="team-role-badge staff">Solo ingressi tavoli</span>
              </div>
            </div>
            <div className="team-role-card">
              <div className="team-role-icon">✅</div>
              <div className="team-role-content">
                <h4>Ingressista Omaggi</h4>
                <p>Account separato per chi gestisce l'ingresso degli omaggi. Vede solo la lista omaggi dell'evento in corso e può effettuare check-in con un click — senza accedere a nessun'altra sezione.</p>
                <span className="team-role-badge omaggi">Solo lista omaggi</span>
              </div>
            </div>
          </div>

          {/* Account panel + Notifiche */}
          <div className="team-bottom-split">
            <div className="team-bottom-visual">
              <div className="feature-split-badge" style={{marginBottom:'20px'}}>Gestione account ELEXIA</div>
              <div className="split-screen-mockup">
                <div className="split-mac-header">
                  <div className="mac-dot close"></div>
                  <div className="mac-dot min"></div>
                  <div className="mac-dot max"></div>
                  <span className="split-mac-title">Pannello Account</span>
                </div>
                <img src="/account.png" alt="Pannello Gestione Account" />
              </div>
              <p className="screen-caption" style={{marginTop:'14px'}}>Pannello Gestione Account con Staff di Servizio e Promoter — tutto configurabile dall'Admin.</p>
            </div>
            <div className="team-bottom-text">
              <div className="feature-split-badge">Notifiche in tempo reale</div>
              <h3>Sai sempre chi ha<br />fatto cosa, e quando</h3>
              <p>Il pannello notifiche dell'Admin registra in ordine cronologico ogni modifica effettuata da qualsiasi account slave — nuove prenotazioni, omaggi inseriti, pagamenti registrati, modifiche ai tavoli.</p>
              <ul className="feature-split-list" style={{marginTop:'28px'}}>
                <li><span className="check">✓</span> Feed notifiche cronologico in tempo reale</li>
                <li><span className="check">✓</span> Ogni azione riporta l'account che l'ha eseguita</li>
                <li><span className="check">✓</span> Nessuna modifica passa inosservata</li>
                <li><span className="check">✓</span> Attiva o disattiva gli account Staff in qualsiasi momento</li>
              </ul>
            </div>
          </div>

        </section>

        {/* Sezione Agente AI */}
        <section id="agente-ai" className="ai-section">
          <div className="ai-text">
            <span className="ai-whatsapp-badge">
              <span className="ai-wa-dot"></span> Agente AI su WhatsApp
            </span>
            <div className="feature-split-badge" style={{marginTop:'28px', marginBottom:'16px', display:'inline-block'}}>Intelligenza Artificiale</div>
            <h2 className="ai-heading">
              Ti lavora<br />
              mentre tu ti godi<br />
              <em className="text-gradient">la serata</em>
            </h2>
            <p>L'agente AI di ELEXIA è attivo su WhatsApp 24 ore su 24. Scrivile cosa vuoi fare — lei aggiorna tutto in tempo reale senza che tu debba aprire nessuna app.</p>
            <ul className="feature-split-list" style={{marginTop:'28px'}}>
              <li><span className="check">✓</span> Inserisce omaggi e aggiorna liste</li>
              <li><span className="check">✓</span> Crea prenotazioni tavoli direttamente via chat</li>
              <li><span className="check">✓</span> Risponde su tavoli liberi, prezzi e disponibilità</li>
              <li><span className="check">✓</span> Aggiorna la dashboard in tempo reale</li>
            </ul>
          </div>

          <div className="ai-chat-wrap">
            {/* Chat window */}
            <div className="ai-chat-window">
              <div className="ai-chat-header">
                <div className="ai-chat-avatar">EX</div>
                <div className="ai-chat-info">
                  <span className="ai-chat-name">ELEXIA AI</span>
                  <span className="ai-chat-status"><span className="ai-online-dot"></span> Online</span>
                </div>
              </div>
              <div className="ai-chat-messages">

                {/* User */}
                <div className="ai-msg user">
                  <p>Inserisci questa lista di omaggi per il Closing Party del 18/04:<br />Marco, Sofia, Luca, Giulia</p>
                </div>
                {/* Bot */}
                <div className="ai-msg bot">
                  <span className="ai-msg-check">✅</span>
                  <p>Fatto! Ho aggiunto <strong>4 omaggi</strong> al Closing Party del 18/04. Tutto aggiornato nella sezione Omaggi.</p>
                </div>

                {/* User */}
                <div className="ai-msg user">
                  <p>Quali tavoli VIP sono ancora liberi?</p>
                </div>
                {/* Bot */}
                <div className="ai-msg bot">
                  <p className="ai-msg-label">Tavoli VIP liberi:</p>
                  <ul className="ai-tavoli-list">
                    <li><span className="ai-dot-green"></span> VIP1 – Centrale – <strong>1.000€</strong></li>
                    <li><span className="ai-dot-green"></span> VIP2 – Centrale – <strong>1.000€</strong></li>
                    <li><span className="ai-dot-green"></span> VIP3 – Centrale – <strong>1.000€</strong></li>
                  </ul>
                </div>

                {/* User */}
                <div className="ai-msg user">
                  <p>Prenotami il VIP2 a nome Elia per 12 persone a 1.000€</p>
                </div>
                {/* Bot */}
                <div className="ai-msg bot">
                  <span className="ai-msg-check">✅</span>
                  <p><strong>Prenotazione creata!</strong> VIP2 · Elia · 12 persone · 1.000€.<br />Dashboard aggiornata in tempo reale.</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Testimonianze */}
        <section className="testimonials-section">
          <div className="testimonials-header">
            <div className="feature-split-badge">Testimonianze</div>
            <h2>Addio Excel.<br />Addio fogli di carta.<br />Addio mille chat.</h2>
            <p>Chi ha già scelto ELEXIA non tornerebbe indietro per nulla al mondo.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="tquote">"</div>
              <p>Prima gestivo tutto su Excel, con 3 gruppi WhatsApp diversi e un foglio di carta all'ingresso. Ora apro ELEXIA e <span className="t-highlight">ho tutto in un secondo</span>. Non riesco a credere di aver aspettato così tanto.</p>
              <div className="testimonial-author">
                <div className="tauthor-avatar" style={{background:'#0a6640'}}>M</div>
                <div>
                  <span className="tauthor-name">Marco D.</span>
                  <span className="tauthor-role">Proprietario – Club Milano</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="tquote">"</div>
              <p>I miei PR inseriscono gli omaggi da soli, io li vedo in tempo reale sul telefono. Niente più messaggi su WhatsApp alle 3 di notte per sapere chi deve entrare. <span className="t-highlight">ELEXIA ha cambiato la serata.</span></p>
              <div className="testimonial-author">
                <div className="tauthor-avatar" style={{background:'#0d5c4a'}}>S</div>
                <div>
                  <span className="tauthor-name">Sara C.</span>
                  <span className="tauthor-role">Event Manager – Riviera Club</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="tquote">"</div>
              <p>La contabilità era un disastro — foglietti, calcolatrice, sperare di non sbagliare. Con ELEXIA <span className="t-highlight">so esattamente quanto ho incassato</span> per ogni tavolo, diviso tra carta e contanti, in tempo reale.</p>
              <div className="testimonial-author">
                <div className="tauthor-avatar" style={{background:'#1a3d2e'}}>L</div>
                <div>
                  <span className="tauthor-name">Lorenzo B.</span>
                  <span className="tauthor-role">Titolare – Nyx Lounge</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="final-cta-section">
          <h2>Pronto a smettere di<br />rincorrere fogli di carta?</h2>
          <p>Richiedi una demo gratuita e scopri come ELEXIA trasforma la gestione della tua serata — senza cambiare nulla nel tuo locale, solo migliorandolo.</p>
          <div className="final-cta-actions">
            <button className="btn btn-primary final-cta-btn">Richiedi Demo Gratuita →</button>
            <button className="btn btn-secondary final-cta-btn">Scrivici su WhatsApp</button>
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
