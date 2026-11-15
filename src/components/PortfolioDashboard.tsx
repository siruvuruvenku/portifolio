import { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import {
  Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from 'recharts';
import { allocationData, holdings, performanceData, transactions } from '../data/mockDashboard';

export default function PortfolioDashboard() {
  const [period, setPeriod] = useState('6M');
  const [showAllHoldings, setShowAllHoldings] = useState(false);
  const periodData = period === '1Y' ? [...performanceData, { month: 'Apr', value: 294 }, { month: 'May', value: 301 }] : performanceData;

  return (
    <div className="demo-dashboard portfolio-dashboard">
      <div className="dashboard-topbar"><div><span className="dashboard-kicker">DEMO WORKSPACE <span className="demo-pill">MOCK DATA</span></span><h3>Good afternoon, Alex <span>✦</span></h3><p>Your portfolio is moving in the right direction.</p></div><div className="dashboard-user"><span>AC</span><div><b>Alex Chen</b><small>INVESTOR · PREMIUM</small></div></div></div>
      <div className="metric-grid">
        <div className="metric-card metric-main"><span>TOTAL PORTFOLIO VALUE</span><b>$284,650<span>.00</span></b><small><span className="positive">↗ $12,840.20 (4.72%)</span> this month</small><div className="metric-orbit" /></div>
        <div className="metric-card"><span>UNREALIZED RETURN</span><b className="metric-smaller">$34,218</b><small><span className="positive">+13.67%</span> all time</small><div className="metric-spark">▂ ▃ ▂ ▄ ▃ ▅ ▄ ▆ ▅ ▇</div></div>
        <div className="metric-card"><span>AVAILABLE CASH</span><b className="metric-smaller">$18,420</b><small>6.5% of portfolio</small><div className="cash-line"><i /></div></div>
      </div>
      <div className="dashboard-charts">
        <section className="chart-card performance-card"><div className="chart-title"><div><span>PORTFOLIO PERFORMANCE</span><b>Value over time</b></div><div className="chart-periods">{['1M', '6M', '1Y'].map((item) => <button key={item} className={period === item ? 'active' : ''} onClick={() => setPeriod(item)}>{item}</button>)}</div></div><div className="chart-legend"><span><i /> Portfolio value</span><b>+$26,840 <small>(+10.4%)</small></b></div><div className="chart-plot"><ResponsiveContainer width="100%" height="100%"><AreaChart data={periodData} margin={{ top: 10, right: 4, bottom: 0, left: -20 }}><defs><linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#5de0c1" stopOpacity={0.28} /><stop offset="95%" stopColor="#5de0c1" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="#25343c" strokeDasharray="3 5" vertical={false} /><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#77878d', fontSize: 10 }} /><YAxis axisLine={false} tickLine={false} tick={{ fill: '#77878d', fontSize: 10 }} tickFormatter={(value: number) => `$${value}k`} /><Tooltip contentStyle={{ background: '#101a20', border: '1px solid #26373d', borderRadius: 10, fontSize: 12 }} formatter={(value) => [`$${value}k`, 'Portfolio']} /><Area type="monotone" dataKey="value" stroke="#62e5cb" strokeWidth={2.5} fill="url(#portfolioGradient)" /></AreaChart></ResponsiveContainer></div></section>
        <section className="chart-card allocation-card"><div className="chart-title"><div><span>ASSET ALLOCATION</span><b>Balanced for growth</b></div><span className="chart-more" aria-hidden="true">···</span></div><div className="allocation-plot"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={allocationData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={78} paddingAngle={4} stroke="none">{allocationData.map((item) => <Cell key={item.name} fill={item.color} />)}</Pie><Tooltip contentStyle={{ background: '#101a20', border: '1px solid #26373d', borderRadius: 10, fontSize: 12 }} /></PieChart></ResponsiveContainer><div className="allocation-center"><b>3</b><span>ASSET CLASSES</span></div></div><div className="allocation-legend">{allocationData.map((item) => <div key={item.name}><i style={{ background: item.color }} />{item.name}<b>{item.value}%</b></div>)}</div></section>
      </div>
      <div className="dashboard-bottom">
        <section className="chart-card holdings-card"><div className="chart-title"><div><span>YOUR HOLDINGS</span><b>{showAllHoldings ? 'All positions' : 'Top positions'} <small>{showAllHoldings ? '06 assets' : '04 assets'}</small></b></div><button className="table-link" onClick={() => setShowAllHoldings((current) => !current)}>{showAllHoldings ? 'Show top positions' : 'View all assets'} <ArrowUpRight size={13} /></button></div><div className="holdings-table"><div className="table-head"><span>ASSET</span><span>TYPE</span><span>MARKET VALUE</span><span>DAY CHANGE</span></div>{(showAllHoldings ? holdings : holdings.slice(0, 4)).map((item) => <div className="holding-row" key={item.symbol}><div className="holding-asset"><span className={`asset-logo asset-${item.symbol.toLowerCase()}`}>{item.symbol.slice(0, 1)}</span><div><b>{item.symbol}</b><small>{item.name}</small></div></div><span>{item.type}</span><b>{item.value}</b><span className={item.positive ? 'positive' : 'negative'}>{item.change}</span></div>)}</div></section>
        <section className="chart-card transactions-card"><div className="chart-title"><div><span>ACTIVITY</span><b>Recent transactions</b></div><span className="chart-more" aria-hidden="true">···</span></div><div className="transaction-list">{transactions.map((item) => <div className="transaction-item" key={`${item.type}-${item.detail}`}><span className={`transaction-icon ${item.positive ? 'positive-icon' : ''}`}>{item.icon}</span><div><b>{item.type}</b><small>{item.detail}</small><small>{item.date}</small></div><strong className={item.positive ? 'positive' : ''}>{item.amount}</strong></div>)}</div></section>
      </div>
      <p className="mock-caption"><Sparkles size={12} /> Product concept only · all values and activity are sample data</p>
    </div>
  );
}
