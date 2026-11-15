import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock3, FileText, Play, RotateCcw, Sparkles, Upload, X } from 'lucide-react';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import { interviewQuestions, pastSessions, skillMatch } from '../data/mockDashboard';
import { apiDocs } from '../data/apis';
import { projects } from '../data/projects';
import type { ProjectId } from '../types';

const ApiExplorer = lazy(() => import('../components/ApiExplorer'));
const PortfolioDashboard = lazy(() => import('../components/PortfolioDashboard'));
const tabs = ['Overview', 'Features', 'Architecture', 'APIs', 'Database', 'Challenges'] as const;
type ProjectTab = typeof tabs[number];

function RoleReadyDashboard() {
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const [analyzed, setAnalyzed] = useState(false);

  function handleFile(file?: File) {
    setFileError('');
    if (!file) return;
    if (!/\.(pdf|docx)$/i.test(file.name)) {
      setFileError('Choose a PDF or DOCX resume to preview this flow.');
      setFileName('');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFileError('This sample upload supports files up to 5 MB.');
      setFileName('');
      return;
    }
    setFileName(file.name);
    setAnalyzed(false);
  }

  return (
    <div className="demo-dashboard role-dashboard">
      <div className="dashboard-topbar"><div><span className="dashboard-kicker">ROLEREADY <span className="demo-pill">MOCK ANALYSIS</span></span><h3>Your next role, in focus.</h3><p>Backend Engineer · Product & Platform</p></div><div className="role-avatar">RR</div></div>
      <div className="role-dashboard-grid">
        <section className="chart-card resume-upload-card"><div className="chart-title"><div><span>RESUME WORKSPACE</span><b>Compare your fit</b></div><span className="step-count">01 / 02</span></div><label className="upload-zone"><input type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(event) => handleFile(event.target.files?.[0])} /><span className="upload-icon"><Upload size={19} /></span><b>{fileName || 'Drop your resume here'}</b><small>{fileName ? 'Ready for local demo analysis' : 'PDF or DOCX · up to 5 MB'}</small><span className="upload-browse">Choose a file</span></label>{fileError && <p className="file-error"><X size={13} />{fileError}</p>}<div className="target-role"><span className="role-icon">⌘</span><div><small>COMPARING AGAINST</small><b>Backend Engineer <span>·</span> Sample role</b></div><span className="target-edit">EDIT</span></div><button className="button button-primary analyze-button" onClick={() => setAnalyzed(true)}><Sparkles size={15} />{analyzed ? 'Demo analysis complete' : 'Run sample analysis'}<ArrowRight size={14} /></button><p className="local-only-note">This frontend demo does not upload or transmit your file.</p></section>
        <section className="chart-card ats-card"><div className="chart-title"><div><span>ATS ALIGNMENT</span><b>{analyzed ? 'Your demo results' : 'Strong foundation'}</b></div><span className="score-trend">↗ +8 pts</span></div><div className="ats-score-row"><div className="ats-ring"><div><b>84</b><small>/ 100</small></div></div><div><span className="match-label">GOOD MATCH</span><h4>{analyzed ? 'Sample analysis ready' : 'You’re close to a great fit.'}</h4><p>Strong technical alignment. A few focused updates could make your experience stand out.</p></div></div><div className="skill-bars">{skillMatch.map((skill) => <div className="skill-bar-row" key={skill.name}><span>{skill.name}</span><div className="skill-track"><i className={`fill-${skill.color}`} style={{ width: `${skill.match}%` }} /></div><b>{skill.match}%</b></div>)}</div></section>
      </div>
      <div className="role-insights-grid">
        <section className="chart-card matched-card"><div className="chart-title"><div><span>SKILL GAP ANALYSIS</span><b>Where you align</b></div><span className="score-label">4 MATCHED · 2 TO GROW</span></div><div className="match-chips"><span className="chip-matched"><Check size={12} /> Java</span><span className="chip-matched"><Check size={12} /> Spring Boot</span><span className="chip-matched"><Check size={12} /> REST APIs</span><span className="chip-matched"><Check size={12} /> SQL</span><span className="chip-gap">○ Kubernetes</span><span className="chip-gap">○ Observability</span></div><div className="insight-callout"><span>✳</span><p><b>Quick win:</b> Add a concrete example of monitoring or alerting to connect your platform experience to the observability requirement.</p></div></section>
        <section className="chart-card recommendation-card"><div className="chart-title"><div><span>RECOMMENDATIONS</span><b>Small changes, more signal</b></div><FileText size={16} /></div><ol><li><span>01</span><p>Quantify your performance work with the 40% response-time improvement.</p></li><li><span>02</span><p>Bring your Redis and SQL optimization work into the first third of your resume.</p></li><li><span>03</span><p>Include one example of a production issue you debugged and resolved.</p></li></ol></section>
      </div>
      <p className="mock-caption"><Sparkles size={12} /> The upload and analysis states are local UI demonstrations; no file is sent anywhere.</p>
    </div>
  );
}

function InterviewDashboard() {
  const [role, setRole] = useState('Java Engineer');
  const [level, setLevel] = useState('Intermediate');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(600);
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showAllSessions, setShowAllSessions] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const question = interviewQuestions[questionIndex % interviewQuestions.length];

  useEffect(() => {
    if (started && !submitted) {
      timer.current = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    }
    return () => window.clearInterval(timer.current);
  }, [started, submitted]);

  function resetPractice() {
    window.clearInterval(timer.current);
    setStarted(false);
    setSubmitted(false);
    setAnswer('');
    setSeconds(600);
    setQuestionIndex((index) => (index + 1) % interviewQuestions.length);
  }

  return (
    <div className="demo-dashboard interview-dashboard">
      <div className="dashboard-topbar"><div><span className="dashboard-kicker">PRACTICE STUDIO <span className="demo-pill">SIMULATION</span></span><h3>Practice makes progress.</h3><p>A focused space to find your next great answer.</p></div><div className="interview-streak"><span>✳</span><div><b>4 day streak</b><small>KEEP THE MOMENTUM</small></div></div></div>
      <div className="interview-controls"><label>ROLE<select value={role} onChange={(event) => setRole(event.target.value)}><option>Java Engineer</option><option>Full Stack Engineer</option><option>Frontend Engineer</option></select></label><label>DIFFICULTY<select value={level} onChange={(event) => setLevel(event.target.value)}><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label><div className="interview-focus"><span>FOCUS AREA</span><b>{question.topic}</b></div><span className="question-count">QUESTION {questionIndex + 1} <i>/ {interviewQuestions.length.toString().padStart(2, '0')}</i></span></div>
      <div className="interview-session-grid">
        <section className="chart-card question-card"><div className="question-top"><span className="question-label"><span className="pulse-dot" /> LIVE PRACTICE</span><span className="timer"><Clock3 size={14} /> {`${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`}</span></div><div className="question-topic">{role} <span>·</span> {level}</div><h4>{question.text}</h4><div className="answer-label"><span>YOUR ANSWER</span><span>{answer.trim().split(/\s+/).filter(Boolean).length} words</span></div><textarea value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder="Structure your answer. Consider the context, your approach and the outcome..." disabled={submitted} /><div className="answer-actions">{!started ? <button className="button button-primary" onClick={() => setStarted(true)}><Play size={14} /> Start practice</button> : !submitted ? <button className="button button-primary" onClick={() => setSubmitted(true)} disabled={!answer.trim()}>Submit answer <ArrowRight size={14} /></button> : <button className="button button-primary" onClick={resetPractice}><RotateCcw size={14} /> Try another question</button>}<span>{submitted ? 'Your feedback is ready below.' : started ? 'Take a breath — you’ve got this.' : 'Your timer starts when you begin.'}</span></div></section>
        <section className="chart-card feedback-card"><div className="chart-title"><div><span>FEEDBACK PREVIEW</span><b>{submitted ? 'A thoughtful first pass.' : 'What great answers show'}</b></div><span className="feedback-icon"><Sparkles size={15} /></span></div>{submitted ? <><div className="overall-score"><b>{Math.min(96, 72 + Math.min(20, answer.trim().split(/\s+/).filter(Boolean).length))}</b><span>/ 100<br />PRACTICE SCORE</span></div><p className="feedback-message">Nice start. You explained the core idea — now anchor it with a specific example from a project you’ve worked on.</p><div className="feedback-score-bars"><span>Correctness <b>88</b></span><i><em style={{ width: '88%' }} /></i><span>Clarity <b>82</b></span><i><em style={{ width: '82%' }} /></i><span>Depth <b>76</b></span><i><em style={{ width: '76%' }} /></i></div></> : <><div className="rubric-list"><div><span>01</span><p><b>Correctness</b><small>Is the technical reasoning sound?</small></p><span>30%</span></div><div><span>02</span><p><b>Clarity</b><small>Can the interviewer follow your answer?</small></p><span>30%</span></div><div><span>03</span><p><b>Depth</b><small>Do you connect ideas to real work?</small></p><span>40%</span></div></div><div className="feedback-hint">✳ &nbsp; Try a clear structure: context → decision → outcome.</div></>}</section>
      </div>
      <section className="chart-card interview-history"><div className="chart-title"><div><span>YOUR PRACTICE</span><b>Recent sessions</b></div><button className="table-link" onClick={() => setShowAllSessions((current) => !current)}>{showAllSessions ? 'Show recent' : 'View all'} <ArrowUpRight size={13} /></button></div><div className={`history-list ${showAllSessions ? 'history-expanded' : ''}`}>{(showAllSessions ? pastSessions : pastSessions.slice(0, 3)).map((session, index) => <span key={session.topic}><i className={`history-dot ${index === 1 ? 'history-violet' : index === 2 ? 'history-blue' : ''}`} /><b>{session.topic}</b><small>{session.role} · {session.date}</small><strong>{session.score} <em>/100</em></strong></span>)}</div></section>
      <p className="mock-caption"><Sparkles size={12} /> Simulated interview experience · feedback and scores are sample data</p>
    </div>
  );
}

interface ProjectDetailProps { projectId: ProjectId }

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState<ProjectTab>('Overview');
  const project = projects.find((item) => item.id === projectId);
  if (!project) return null;
  const projectIndex = projects.findIndex((item) => item.id === projectId);

  return (
    <main className={`detail-page detail-${project.accent}`} id="top">
      <div className="container detail-container">
        <Link to="/#work" className="back-link"><ArrowLeft size={14} /> BACK TO SELECTED WORK</Link>
        <header className="detail-hero">
          <div><p className="section-index">{project.eyebrow} <span>·</span> CASE STUDY</p><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p><div className="detail-highlights">{project.highlights.map((highlight) => <span key={highlight}><Check size={12} /> {highlight}</span>)}</div></div>
          <div className="detail-number">{(projectIndex + 1).toString().padStart(2, '0')}<span>/ {projects.length.toString().padStart(2, '0')}</span></div>
        </header>
        <div className="detail-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <section className="project-quick-summary" aria-label="Project summary">
          <div className="project-quick-summary-heading">
            <p className="section-index">PROJECT SUMMARY · QUICK READ</p>
            <h2>{project.shortTitle}</h2>
            <p>{project.summary}</p>
          </div>
          <div className="project-quick-summary-points">
            <article><span>THE CHALLENGE</span><p>{project.problem}</p></article>
            <article><span>THE APPROACH</span><p>{project.approach}</p></article>
          </div>
        </section>
        {project.industryAlignment && (
          <section className="industry-alignment" aria-label="Industry alignment examples">
            <div className="industry-alignment-heading">
              <span>INDUSTRY SKILLS ALIGNMENT</span>
              <p>Independent portfolio concept; no company affiliation or integration is claimed.</p>
            </div>
            <div className="industry-alignment-grid">
              {project.industryAlignment.map((item) => (
                <article key={item.organization}>
                  <h3>{item.organization}</h3>
                  <p>{item.relevance}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        {projectId === 'investment' ? <Suspense fallback={<div className="demo-dashboard route-loading" aria-label="Loading portfolio dashboard" />}><PortfolioDashboard /></Suspense> : projectId === 'roleready' ? <RoleReadyDashboard /> : projectId === 'interview' ? <InterviewDashboard /> : <ProjectPreview project={project} />}
        <div className="detail-workspace">
          <div className="detail-tabbar" role="tablist" aria-label="Project case study sections">{tabs.map((tab) => <button key={tab} role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>{tab}{tab === 'APIs' && <span>{apiDocs[projectId].length}</span>}</button>)}</div>
          <div className="detail-tab-content" role="tabpanel">
            {activeTab === 'Overview' && <div className="overview-content"><div className="overview-main"><p className="section-index">THE PRODUCT STORY</p><h2>{project.problem}</h2><p>{project.approach}</p><div className="outcome-grid">{project.outcomes.map((outcome, index) => <div key={outcome}><span>0{index + 1}</span><p>{outcome}</p></div>)}</div></div><aside className="overview-aside"><span className="aside-icon"><Sparkles size={18} /></span><p className="section-index">DESIGN PRINCIPLE</p><h3>Make the important thing obvious.</h3><p>Every screen prioritizes the decision someone needs to make next. This interactive dashboard is a frontend-only concept built from local mock data.</p></aside></div>}
            {activeTab === 'Features' && <div className="feature-tab"><div><p className="section-index">CAPABILITIES</p><h2>Small details.<br /><span className="muted-heading">Complete workflows.</span></h2></div><div className="feature-list">{project.features.map((feature, index) => <div key={feature}><span>0{index + 1}</span><p>{feature}</p><Check size={15} /></div>)}</div></div>}
            {activeTab === 'Architecture' && <><ArchitectureDiagram diagram={project.architectureDiagram} projectName={project.shortTitle} /><div className="architecture-stack-note"><span>DESIGN NOTES</span><p>Services and infrastructure shown are conceptual project architecture, not connected to this portfolio. All interactions here run client-side.</p></div></>}
            {activeTab === 'APIs' && <div className="api-tab"><div className="tab-intro"><div><p className="section-index">CONTRACT EXPLORER</p><h2>Interfaces, <span className="muted-heading">made clear.</span></h2></div><span>{apiDocs[projectId].length} ILLUSTRATIVE ROUTES</span></div><Suspense fallback={<div className="api-empty">Loading documentation examples…</div>}><ApiExplorer endpoints={apiDocs[projectId]} /></Suspense></div>}
            {activeTab === 'Database' && <div className="database-tab"><div><p className="section-index">DATA DESIGN</p><h2>Useful data.<br /><span className="muted-heading">Clear ownership.</span></h2><p>Conceptual persistence choices for this project — described here for the case study only.</p></div><div className="database-list">{project.database.map((item, index) => <article key={item.name}><span className="db-index">0{index + 1}</span><div><h3>{item.name}</h3><p>{item.purpose}</p></div><span className="db-type">DATA LAYER</span></article>)}</div></div>}
            {activeTab === 'Challenges' && <div className="challenges-tab"><div><p className="section-index">ENGINEERING NOTES</p><h2>What made it<br /><span className="muted-heading">interesting.</span></h2></div><div className="challenge-list">{project.challenges.map((item, index) => <article key={item.challenge}><span>0{index + 1}</span><div><h3>{item.challenge}</h3><p>{item.solution}</p></div></article>)}</div></div>}
          </div>
        </div>
        <div className="project-pagination"><Link to={projects[(projectIndex + projects.length - 1) % projects.length].slug}><span>PREVIOUS PROJECT</span><b><ArrowLeft size={15} /> {projects[(projectIndex + projects.length - 1) % projects.length].shortTitle}</b></Link><Link to={projects[(projectIndex + 1) % projects.length].slug}><span>NEXT PROJECT</span><b>{projects[(projectIndex + 1) % projects.length].shortTitle} <ArrowRight size={15} /></b></Link></div>
        <div className="detail-contact"><span>READY TO BUILD THE NEXT THING?</span><a href="mailto:siruvuruvenku@gmail.com">Let’s connect <ArrowUpRight size={15} /></a></div>
      </div>
    </main>
  );
}

function ProjectPreview({ project }: { project: (typeof projects)[number] }) {
  return (
    <section className={`demo-dashboard detail-project-preview project-${project.accent}`}>
      <div className="dashboard-topbar"><div><span className="dashboard-kicker">PROJECT SNAPSHOT <span className="demo-pill">CONCEPT</span></span><h3>{project.shortTitle}</h3><p>{project.highlights.join(' · ')}</p></div><div className="role-avatar">0{projects.indexOf(project) + 1}</div></div>
      <div className="role-dashboard-grid">
        {project.outcomes.slice(0, 3).map((outcome, index) => (
          <section className="chart-card" key={outcome}><div className="chart-title"><div><span>ENGINEERING FOCUS 0{index + 1}</span><b>{project.highlights[index]}</b></div></div><p>{outcome}</p></section>
        ))}
      </div>
      <p className="mock-caption">Conceptual project case study · implementation and infrastructure are illustrative.</p>
    </section>
  );
}
