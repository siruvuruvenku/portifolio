import { ArrowUpRight, Database, Layers3, Monitor, Network, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import type { ProjectId } from '../types';

const skillGroups = [
  { name: 'Languages', skills: ['Java', 'Scala', 'Go', 'SQL'] },
  { name: 'Backend & frameworks', skills: ['Spring Boot', 'Microservices', 'RESTful APIs', 'Node.js'] },
  { name: 'System design', skills: ['HLD / LLD', 'Distributed systems', 'Event-driven architecture'] },
  { name: 'DevOps & cloud', skills: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'AWS'] },
  { name: 'Data & caching', skills: ['MongoDB', 'Redis', 'MySQL'] },
  { name: 'Messaging & observability', skills: ['Kafka', 'RabbitMQ', 'OpenTelemetry', 'Instana'] },
  { name: 'Testing & practices', skills: ['JUnit', 'TDD', 'Integration testing', 'FVT frameworks', 'Agile'] },
];

const systemFlow = [
  { name: 'Client', Icon: Monitor },
  { name: 'API gateway', Icon: Network },
  { name: 'Service', Icon: Server },
  { name: 'Cache', Icon: Layers3 },
  { name: 'Database', Icon: Database },
];

const skillProjectIds: Partial<Record<string, ProjectId>> = {
  SQL: 'transaction-search',
  'RESTful APIs': 'wallet-ledger',
  'HLD / LLD': 'lld-library',
  'Distributed systems': 'api-gateway',
  'Event-driven architecture': 'wallet-ledger',
  TDD: 'lld-library',
};

function getSkillProject(skill: string) {
  const projectId = skillProjectIds[skill];
  if (projectId) return projects.find((project) => project.id === projectId);

  return projects.find((project) =>
    project.stack.some((technology) => technology.toLowerCase() === skill.toLowerCase()),
  );
}

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><p className="section-index">02 / TECHNICAL SKILLS</p><h2>Java & backend<br /><span className="muted-heading">engineering toolkit.</span></h2></div>
          <p className="section-aside">Select a linked skill to open a project case study showing where it is used.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.name}>
              <div className="skill-group-top"><span className="skill-number">0{index + 1}</span></div>
              <h3>{group.name}</h3>
              <div className="skill-pills">
                {group.skills.map((skill) => {
                  const project = getSkillProject(skill);
                  return project ? (
                    <Link
                      className="skill-pill-link"
                      to={project.slug}
                      aria-label={`View ${skill} in the ${project.shortTitle} case study`}
                      key={skill}
                    >
                      {skill}<ArrowUpRight size={10} />
                    </Link>
                  ) : <span key={skill}>{skill}</span>;
                })}
              </div>
            </article>
          ))}
        </div>
        <div className="system-design-flow">
          <p>// TYPICAL SYSTEM DESIGN FLOW</p>
          <div className="system-flow-steps">
            {systemFlow.map(({ name, Icon }, index) => (
              <div className="system-flow-step" key={name}>
                <span className={`system-flow-node system-flow-node-${index}`}><Icon size={17} /></span>
                <small>{name}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
