import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, GitBranch, MapPin } from 'lucide-react';

const enter = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className="hero-section container">
      <div className="hero-grid">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={enter}>
          <div className="eyebrow"><span className="pulse-dot" /> AVAILABLE FOR WHAT’S NEXT</div>
          <p className="hero-overline">JAVA / BACKEND ENGINEER <span>·</span> HYDERABAD, INDIA</p>
          <h1>Building the<br /><span className="gradient-text">useful</span> side of<br />technology.</h1>
          <p className="hero-intro">
            I’m <strong>Siruvuru Venkatapathi Varma</strong> — a Java / backend engineer building reliable services and practical applications.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <ArrowRight size={16} /></a>
            <a className="button button-quiet" href="mailto:siruvuruvenku@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={14} /> Hyderabad, India</span>
            <span className="meta-divider" />
            <span>1+ year building for production</span>
          </div>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/siruvuruvenku" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><BriefcaseBusiness size={16} /></a>
            <a href="https://github.com/siruvuruvenku/" target="_blank" rel="noreferrer" aria-label="GitHub profile"><GitBranch size={16} /></a>
            <a href="/resume.pdf" download>Download résumé <ArrowDown size={13} /></a>
          </div>
        </motion.div>

        <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.14 }}>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-coordinate">17° 23' N<br />78° 29' E</div>
          <div className="terminal-card">
            <div className="terminal-top"><div className="window-lights"><i /><i /><i /></div><span>varma.ts</span><span className="terminal-language">TYPESCRIPT</span></div>
            <div className="terminal-code" aria-label="Developer profile code sample">
              <div><span className="code-line">01</span> <span className="code-purple">const</span> <span className="code-blue">engineer</span> = {'{'}</div>
              <div><span className="code-line">02</span> &nbsp; name: <span className="code-green">'Varma'</span>,</div>
              <div><span className="code-line">03</span> &nbsp; focus: [</div>
              <div><span className="code-line">04</span> &nbsp;&nbsp; <span className="code-green">'Java'</span>, <span className="code-green">'React'</span>,</div>
              <div><span className="code-line">05</span> &nbsp;&nbsp; <span className="code-green">'Thoughtful UX'</span></div>
              <div><span className="code-line">06</span> &nbsp; ],</div>
              <div><span className="code-line">07</span> &nbsp; building: <span className="code-orange">true</span></div>
              <div><span className="code-line">08</span> {'}'};</div>
              <div className="terminal-comment"><span className="code-line">09</span> // always learning, shipping, improving <span className="cursor" /></div>
            </div>
            <div className="terminal-bottom"><span><span className="status-dot" /> SYSTEMS ONLINE</span><span>INDIA · IST</span></div>
          </div>
          <div className="float-chip chip-stack"><span className="chip-icon">⌘</span><span><b>Java</b><small>backend engineering</small></span></div>
          <div className="float-chip chip-build"><span className="build-icon">↗</span><span><b>1+ year</b><small>in production</small></span></div>
          <div className="hero-art-caption">CURIOUS BY DEFAULT <span>✳</span> BUILT TO LAST</div>
        </motion.div>
      </div>
      <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><span className="scroll-rule" /><span>01 — 06</span></div>
    </section>
  );
}
