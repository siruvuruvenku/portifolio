import { ArrowUpRight, BriefcaseBusiness, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-cta"><p className="section-index">HAVE SOMETHING GOOD IN MIND?</p><h2>Let’s make it<br /><span className="gradient-text">real.</span></h2><a className="button button-primary" href="mailto:siruvuruvenku@gmail.com">Email me <ArrowUpRight size={15} /></a></div>
        <div className="footer-contact"><span>YOUR NEXT COLLABORATOR</span><a className="footer-email" href="mailto:siruvuruvenku@gmail.com">siruvuruvenku@gmail.com <ArrowUpRight size={16} /></a><p>Hyderabad, India <span>·</span> Open to meaningful opportunities</p>        <div className="footer-socials"><a href="https://www.linkedin.com/in/siruvuruvenku" target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} /> LinkedIn</a><a href="https://github.com/siruvuruvenku/" target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub</a></div></div>
      </div>
      <div className="container footer-bottom"><Link className="brand" to="/"><span className="brand-mark">V<span>.</span></span><span className="brand-name">VARMA<span className="brand-dot">/</span>DEV</span></Link><span>DESIGNED WITH INTENTION · © 2026 VARMA</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  );
}
