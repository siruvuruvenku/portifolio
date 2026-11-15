import { ArrowUpRight, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';
import apiGatewayArt from '../assets/api-gateway-art.svg';
import transactionRiskArt from '../assets/transaction-risk-art.svg';
import walletLedgerArt from '../assets/wallet-ledger-art.svg';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link to={project.slug} className={`project-card project-${project.accent}`}>
      <div className="project-card-top"><span>{project.eyebrow}</span><ArrowUpRight size={17} /></div>
      <div className="project-visual">
        {project.id === 'investment' ? (
          <div className="mini-portfolio">
            <div className="mini-portfolio-header"><span>PORTFOLIO VALUE</span><span className="mini-green">+8.4%</span></div>
            <b>$284,650<span>.00</span></b><div className="mini-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="mini-bars"><span style={{ width: '58%' }} /><span style={{ width: '24%' }} /><span style={{ width: '18%' }} /></div>
          </div>
        ) : project.id === 'roleready' ? (
          <div className="mini-score"><div className="score-ring"><strong>84</strong><small>ATS SCORE</small></div><div className="score-skills"><span>Java <b>96%</b></span><i><em style={{ width: '96%' }} /></i><span>Spring Boot <b>91%</b></span><i><em style={{ width: '91%' }} /></i><span>Cloud <b>48%</b></span><i><em style={{ width: '48%' }} /></i></div></div>
        ) : project.id === 'interview' ? (
          <div className="mini-interview"><div className="interview-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><span className="mini-timer">◷ &nbsp; 08:42</span><div className="interview-bars"><span /><span /><span /></div></div>
        ) : project.id === 'wallet-ledger' ? (
          <img className="project-artwork" src={walletLedgerArt} alt="" aria-hidden="true" />
        ) : project.id === 'api-gateway' ? (
          <img className="project-artwork" src={apiGatewayArt} alt="" aria-hidden="true" />
        ) : project.id === 'transaction-search' ? (
          <div className="mini-project-preview"><span>SEARCH INDEX <b>IN SYNC</b></span><strong>1,024,880 <i>records</i></strong><div><span>FULL TEXT</span><span>·</span><span>DATE RANGE</span></div><small>MYSQL → ELASTICSEARCH</small></div>
        ) : project.id === 'risk-analytics' ? (
          <img className="project-artwork" src={transactionRiskArt} alt="" aria-hidden="true" />
        ) : (
          <div className="mini-project-preview"><span>JAVA CONCURRENCY <b>TESTED</b></span><strong>1,000 <i>operations</i></strong><div><span>RATE LIMIT</span><span>·</span><span>THREAD POOL</span></div><small>PURE JAVA · TEST FIRST</small></div>
        )}
        <span className="project-index">0{index + 1}</span>
      </div>
      <div className="project-card-copy"><div className="project-card-heading"><h3>{project.shortTitle}</h3><span><Layers3 size={15} /></span></div><p>{project.summary}</p></div>
      <div className="project-card-foot"><div className="project-stack">{project.stack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}{project.stack.length > 4 && <span>+{project.stack.length - 4}</span>}</div><span className="project-read">VIEW CASE STUDY <ArrowUpRight size={13} /></span></div>
    </Link>
  );
}
