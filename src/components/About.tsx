import { ArrowUpRight, Blocks, Braces, GitBranch, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="section container" id="about">
      <div className="section-heading">
        <p className="section-index">01 / ABOUT ME</p>
        <h2>Java development<br /><span className="muted-heading">with intention.</span></h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">I like making useful software feel <em>simple.</em></p>
          <p>I’m a Java developer focused on building reliable applications with Java and Spring Boot, and solving practical problems with clear APIs and thoughtful data handling.</p>
          <p>At Auroclean, I contribute to garment-operations systems, including an IoT application that collects status, cycle progress, temperature and water readings, and fault alerts from washing machines, alongside RFID tracking and scan reconciliation.</p>
          <a className="inline-link" href="mailto:siruvuruvenku@gmail.com">Start a conversation <ArrowUpRight size={15} /></a>
          <a className="inline-link" href="https://github.com/siruvuruvenku" target="_blank" rel="noreferrer">Explore my GitHub <GitBranch size={15} /></a>
        </div>
        <div className="about-principles">
          <div className="principle-card"><span className="principle-icon mint"><Braces size={18} /></span><div><h3>Built with care</h3><p>Clear APIs, considered edge cases and code that gives the next engineer a good starting point.</p></div><span className="principle-index">01</span></div>
          <div className="principle-card"><span className="principle-icon violet"><Blocks size={18} /></span><div><h3>Systems thinking</h3><p>From data model to dashboard, I connect the small decisions to the full product experience.</p></div><span className="principle-index">02</span></div>
          <div className="principle-card"><span className="principle-icon blue"><Sparkles size={18} /></span><div><h3>Always improving</h3><p>Curious about AI, cloud-native systems and better ways to make software useful.</p></div><span className="principle-index">03</span></div>
        </div>
      </div>
      <div className="about-stat-row">
        <div><b>40<span>%</span></b><small>faster response time through focused optimization</small></div>
        <div><b>Java</b><small>with Spring Boot for application development</small></div>
        <div><b>2025</b><small>joined Auroclean as an Associate – IT</small></div>
        <div className="about-stat-note">B.Tech · Computer Science<br />GITAM University, 2021–2025</div>
      </div>
    </section>
  );
}
