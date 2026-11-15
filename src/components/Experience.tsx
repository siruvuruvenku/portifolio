import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';

const workAreas = [
  {
    title: 'Backend platforms & operations workflows',
    detail: 'Designed relational data models for customer structures spanning legal entities, business groups, companies, customer sites, departments and employees. Built work-order and garment-inventory workflows covering employee assignment, stock allocation and unassignment, lifecycle updates and order dispatch, with audit history.',
    skills: ['Relational data modeling', 'REST APIs', 'Transactional workflows', 'MySQL', 'Audit trails'],
  },
  {
    title: 'Live RFID tracking & washing-machine IoT',
    detail: 'Built a WebSocket hub using ws to ingest RFID reader scans and share status updates with operational dashboards. Tracked garment processing through Sorting, Washing, Folding, Packing and Delivery. Worked with washing-machine IoT data including running/idle/stopped status, cycle progress, temperature and water readings, and fault alerts.',
    skills: ['WebSockets', 'RFID ingestion', 'IoT telemetry', 'Stateful workflows', 'Background workers'],
  },
  {
    title: 'API performance & plant operations',
    detail: 'Reduced application API response times by 40% by optimizing SQL reporting queries, introducing caching, and moving background processing off the request path. Also built operational APIs supporting machine tracking, bag and label generation, delivery challans, route planning and missing-garment reports.',
    skills: ['SQL optimization', 'Caching', 'API performance', 'Reporting', 'Production support'],
  },
  {
    title: 'Secure scan reconciliation & reporting',
    detail: 'Built an HTTPS/TLS-secured service to ingest .txt and .xlsx RFID scan files, validate tags against Microsoft SQL Server inventory records, and flag discrepancies across sterilization logs, pickups and customer scans. Generated streamed Excel reports and distributed them through SMTP email workflows.',
    skills: ['Batch processing', 'Microsoft SQL Server', 'HTTPS / TLS', 'Excel reporting', 'SMTP'],
  },
];

const capabilityGroups = [
  { title: 'Architecture & concurrency', skills: ['REST APIs', 'WebSockets', 'Background workers', 'Stateful workflows', 'Multi-tenant hierarchy'] },
  { title: 'Databases & performance', skills: ['MySQL', 'Microsoft SQL Server', 'SQL optimization', 'Caching', 'Audit trails'] },
  { title: 'Security & production operations', skills: ['JWT and cookie auth', 'Profile-based RBAC', 'HTTPS / TLS', 'Linux', 'PM2'] },
  { title: 'Broader engineering toolkit', skills: ['Java', 'Spring Boot', 'Node.js / TypeScript', 'React', 'JUnit', 'Mockito'] },
];

export default function Experience() {
  return (
    <section className="section container experience-section" id="experience">
      <div className="section-heading section-heading-row">
        <div><p className="section-index">03 / EXPERIENCE</p><h2>Backend work for<br /><span className="muted-heading">real-world operations.</span></h2></div>
        <span className="experience-current"><span className="pulse-dot" /> CURRENT ROLE</span>
      </div>
      <article className="experience-card">
        <div className="experience-top">
          <div>
            <p className="experience-company">AUROCLEAN <span>· HYDERABAD, INDIA</span></p>
            <h3>Associate – IT <span className="experience-role-focus">(Backend Software Engineer)</span></h3>
          </div>
          <p className="experience-date">SEPTEMBER 2025 — PRESENT</p>
        </div>
        <div className="experience-divider" />
        <div className="experience-content">
          <p className="experience-summary">I work on backend services and production workflows for garment operations—spanning data modeling, inventory and work orders, live RFID and machine data, reporting, and production support.</p>
          <div className="experience-impact">
            <div><strong>40%</strong><span>faster API responses after query, caching and background-work optimizations</span></div>
            <div><strong>5 stages</strong><span>garment tracking from Sorting through Delivery</span></div>
          </div>
        </div>

        <div className="experience-work-grid">
          {workAreas.map((area) => (
            <article className="experience-work-card" key={area.title}>
              <div className="experience-work-heading"><Check size={14} /><h4>{area.title}</h4></div>
              <p>{area.detail}</p>
              <div className="experience-system-skills">
                <span>SKILLS USED</span>
                <div>{area.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="experience-capabilities">
          <div className="experience-capabilities-heading">
            <ShieldCheck size={15} />
            <strong>Technical skills across my role</strong>
          </div>
          <p>These are broader skills and tools from my work; this list does not imply that every tool was used in every workflow.</p>
          <div className="experience-capability-groups">
            {capabilityGroups.map((group) => (
              <div className="experience-capability-group" key={group.title}>
                <strong>{group.title}</strong>
                <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
        <a className="experience-link" href="mailto:siruvuruvenku@gmail.com" aria-label="Ask about professional experience"><ArrowUpRight size={18} /></a>
      </article>
    </section>
  );
}
