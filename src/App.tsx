import { Suspense, lazy, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import type { ProjectId } from './types';

const Home = lazy(() => import('./pages/Home'));
const InvestmentPortfolio = lazy(() => import('./pages/InvestmentPortfolio'));
const RoleReady = lazy(() => import('./pages/RoleReady'));
const AIMockInterview = lazy(() => import('./pages/AIMockInterview'));

function createProjectDetailRoute(projectId: ProjectId) {
  return lazy(() => import('./pages/ProjectDetail').then(({ default: ProjectDetail }) => ({
    default: function ProjectRoute() {
      return <ProjectDetail projectId={projectId} />;
    },
  })));
}

const WalletLedger = createProjectDetailRoute('wallet-ledger');
const ApiGateway = createProjectDetailRoute('api-gateway');
const TransactionSearch = createProjectDetailRoute('transaction-search');
const LowLevelDesignLibrary = createProjectDetailRoute('lld-library');
const RiskAnalytics = createProjectDetailRoute('risk-analytics');

function PortfolioApp() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = window.localStorage.getItem('varma-portfolio-theme');
    return saved === 'light' ? 'light' : 'dark';
  });
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('varma-portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);

  return (
    <div className="app-shell min-h-screen">
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.24 }}>
          <Suspense fallback={<div className="route-loading" aria-label="Loading page" />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects/investment-portfolio" element={<InvestmentPortfolio />} />
              <Route path="/projects/roleready" element={<RoleReady />} />
              <Route path="/projects/ai-mock-interview" element={<AIMockInterview />} />
              <Route path="/projects/payment-wallet-ledger" element={<WalletLedger />} />
              <Route path="/projects/distributed-api-gateway" element={<ApiGateway />} />
              <Route path="/projects/transaction-search" element={<TransactionSearch />} />
              <Route path="/projects/low-level-design-library" element={<LowLevelDesignLibrary />} />
              <Route path="/projects/transaction-risk-analytics" element={<RiskAnalytics />} />
              <Route path="/projects/cpp-payment-engine" element={<RiskAnalytics />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default function App() {
  return <BrowserRouter><PortfolioApp /></BrowserRouter>;
}
