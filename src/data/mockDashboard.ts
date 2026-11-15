export const allocationData = [
  { name: 'Equities', value: 58, color: '#62e5cb' },
  { name: 'Fixed income', value: 24, color: '#8a7dff' },
  { name: 'Cash', value: 18, color: '#6597ff' },
];

export const performanceData = [
  { month: 'Oct', value: 218 }, { month: 'Nov', value: 226 }, { month: 'Dec', value: 222 },
  { month: 'Jan', value: 245 }, { month: 'Feb', value: 263 }, { month: 'Mar', value: 285 },
];

export const holdings = [
  { symbol: 'NVDA', name: 'NVIDIA Corporation', type: 'Equity', shares: '24 shares', value: '$28,840', change: '+2.18%', positive: true },
  { symbol: 'MSFT', name: 'Microsoft Corporation', type: 'Equity', shares: '36 shares', value: '$15,120', change: '+0.84%', positive: true },
  { symbol: 'BND', name: 'Vanguard Total Bond', type: 'Fixed income', shares: '120 units', value: '$10,560', change: '−0.12%', positive: false },
  { symbol: 'AAPL', name: 'Apple Inc.', type: 'Equity', shares: '42 shares', value: '$9,240', change: '+1.06%', positive: true },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', type: 'Equity', shares: '18 shares', value: '$3,420', change: '+0.62%', positive: true },
  { symbol: 'CASH', name: 'USD cash balance', type: 'Cash', shares: '—', value: '$18,420', change: '—', positive: true },
];

export const transactions = [
  { type: 'Dividend', detail: 'Microsoft · quarterly payout', date: 'Today, 10:42 AM', amount: '+$86.40', positive: true, icon: '↗' },
  { type: 'Buy order', detail: 'NVIDIA · 2 shares', date: 'Yesterday', amount: '−$240.00', positive: false, icon: '+' },
  { type: 'Stock split', detail: 'Apple · 4-for-1 adjustment', date: 'Mar 12, 2026', amount: 'Applied', positive: true, icon: '⟳' },
];

export const skillMatch = [
  { name: 'Java', match: 96, color: 'mint' },
  { name: 'Spring Boot', match: 91, color: 'violet' },
  { name: 'REST APIs', match: 86, color: 'blue' },
  { name: 'Kubernetes', match: 48, color: 'amber' },
];

export const interviewQuestions = [
  { role: 'Java Engineer', level: 'Intermediate', topic: 'Spring Boot', text: 'How does dependency injection improve testability in a Spring application?' },
  { role: 'Full Stack Engineer', level: 'Advanced', topic: 'System design', text: 'Design a service that processes and displays real-time inventory updates.' },
  { role: 'Frontend Engineer', level: 'Beginner', topic: 'React', text: 'When would you use memoization in a React application, and what are its trade-offs?' },
];

export const pastSessions = [
  { topic: 'Spring Boot fundamentals', role: 'Java Engineer', date: 'Mar 14', score: 86 },
  { topic: 'API design principles', role: 'Backend Engineer', date: 'Mar 12', score: 82 },
  { topic: 'React rendering patterns', role: 'Full Stack Engineer', date: 'Mar 10', score: 78 },
  { topic: 'SQL query optimization', role: 'Java Engineer', date: 'Mar 08', score: 89 },
  { topic: 'System design essentials', role: 'Full Stack Engineer', date: 'Mar 06', score: 80 },
];
