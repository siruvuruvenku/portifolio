import { useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, GitBranch, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import About from '../components/About';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';
import { projects } from '../data/projects';

const githubRepos = [
  {
    name: 'Ats-score-genrated',
    description: 'Resume analyzer built with Java, Spring Boot, and React.',
    stack: ['Java', 'Spring Boot', 'React'],
    href: 'https://github.com/siruvuruvenku/Ats-score-genrated',
  },
  {
    name: 'investment-portifolio',
    description: 'Investment portfolio application with a React and Spring Boot stack.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
    href: 'https://github.com/siruvuruvenku/investment-portifolio',
  },
  {
    name: 'yum_junction',
    description: 'Recipe-sharing application with Spring Boot APIs for users and recipes.',
    stack: ['Java', 'Spring Boot', 'REST APIs'],
    href: 'https://github.com/siruvuruvenku/yum_junction',
  },
];

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = decodeURIComponent(location.hash.slice(1));
    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [location.hash]);

  return (
    <main id="top">
      <Hero />
      <div className="container featured-strip"><span><Sparkles size={14} /> SELECTED WORK</span><span className="strip-line" /><span>ENGINEERING THAT FEELS HUMAN</span></div>
      <About />
      <Skills />
      <Experience />
      <section className="section container" id="work">
        <div className="section-heading section-heading-row">
          <div><p className="section-index">04 / SELECTED WORK</p><h2>Built to solve.<br /><span className="muted-heading">Made to explore.</span></h2></div>
          <p className="section-aside">Explore interactive case studies, then browse selected projects on GitHub. <ArrowDownRight size={17} /></p>
        </div>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        <div className="projects-note"><span className="tiny-spark">✳</span> These are frontend demonstrations of project work. All dashboards use mock data.</div>
      </section>
      <section className="section container github-section" id="github">
        <div className="section-heading section-heading-row">
          <div><p className="section-index">05 / GITHUB</p><h2>Selected repositories.<br /><span className="muted-heading">Real code, open to explore.</span></h2></div>
          <a className="github-profile-link" href="https://github.com/siruvuruvenku" target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={15} /></a>
        </div>
        <div className="github-repos-grid">
          {githubRepos.map((repo) => (
            <a className="github-repo-card" href={repo.href} key={repo.name} target="_blank" rel="noreferrer">
              <span className="github-repo-icon"><GitBranch size={16} /><ArrowUpRight size={14} /></span>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <span className="github-repo-stack">{repo.stack.map((item) => <span key={item}>{item}</span>)}</span>
            </a>
          ))}
        </div>
      </section>
      <section className="contact-banner container" id="contact">
        <div><p className="section-index">06 / NEXT UP</p><h2>Good work starts<br />with a <span className="gradient-text">good conversation.</span></h2></div>
        <a className="contact-arrow" href="mailto:siruvuruvenku@gmail.com">Let’s talk <ArrowUpRight size={17} /></a>
      </section>
    </main>
  );
}
