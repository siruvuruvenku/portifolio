export const skillGroups = [
  {
    name: 'Programming & OOD',
    detail: 'Languages, clean code and class-level design',
    skills: ['Java', 'C++', 'OOP', 'SOLID', 'Separation of concerns', 'Strategy', 'Factory', 'Observer', 'Builder', 'Singleton', 'Machine coding'],
    learningPath: {
      steps: [
        { phase: 'START', title: 'Build your fundamentals', description: 'Use Java as your primary interview language. Practise arrays, strings, maps, stacks, queues, recursion and Big-O; keep C++ fundamentals and STL close as a second language.' },
        { phase: 'BUILD', title: 'Design a small library', description: 'Model a parking lot, library or order workflow with clear interfaces. Apply SOLID, composition and a few justified patterns instead of adding patterns for their own sake.' },
        { phase: 'GO DEEPER', title: 'Handle real constraints', description: 'Add validation, error handling and an extensible feature. Compare the Java and C++ implementations, including ownership and RAII basics in C++.' },
      ],
      finishLine: 'A clean, runnable repository with focused tests, a short design explanation, and the ability to discuss complexity and trade-offs.',
    },
    evidence: [
      { label: 'Data Structures · UC San Diego', href: 'https://www.coursera.org/account/accomplishments/verify/4SK2TERRSRNS', kind: 'certificate' },
      { label: 'Java LLD library · design case study', href: '/projects/low-level-design-library', kind: 'case study' },
    ],
  },
  {
    name: 'Concurrency',
    detail: 'Thread safety, synchronization and async work',
    skills: ['ReentrantLock', 'ReadWriteLock', 'synchronized', 'volatile', 'ConcurrentHashMap', 'BlockingQueue', 'AtomicLong / AtomicInteger', 'ExecutorService', 'Thread pools', 'CompletableFuture', 'Race and deadlock prevention'],
    learningPath: {
      steps: [
        { phase: 'START', title: 'Learn the execution model', description: 'Practise ExecutorService, tasks, futures and orderly shutdown. Identify shared mutable state and explain why a race can happen.' },
        { phase: 'BUILD', title: 'Create a bounded worker queue', description: 'Use BlockingQueue and a fixed thread pool to process jobs. Define back-pressure, failure handling and what happens during shutdown.' },
        { phase: 'GO DEEPER', title: 'Prove thread safety', description: 'Protect shared counters or account updates with the right lock or atomic operation. Compare synchronized, ReentrantLock and ConcurrentHashMap; look for deadlocks.' },
      ],
      finishLine: 'A repeatable concurrency test that runs many workers, checks invariants, and explains the chosen synchronization strategy.',
    },
    evidence: [
      { label: 'Java LLD library · design case study', href: '/projects/low-level-design-library', kind: 'case study' },
      { label: 'Wallet and ledger · design case study', href: '/projects/payment-wallet-ledger', kind: 'case study' },
    ],
  },
  {
    name: 'Databases & Storage',
    detail: 'Relational data, search and distributed caches',
    skills: ['MySQL schema modeling', 'ACID', 'Indexes / EXPLAIN', 'SELECT ... FOR UPDATE', '@Version locking', 'Elasticsearch full-text / filters', 'Redis TTL / Lua', 'HBase / Aerospike trade-offs'],
    learningPath: {
      steps: [
        { phase: 'START', title: 'Model the data first', description: 'Create a normalized MySQL schema for accounts, transfers and ledger entries. Define constraints and explain which operations must be atomic.' },
        { phase: 'BUILD', title: 'Measure and protect queries', description: 'Add indexes based on real query patterns, inspect EXPLAIN output, and test optimistic versioning against SELECT ... FOR UPDATE.' },
        { phase: 'GO DEEPER', title: 'Choose storage by workload', description: 'Add a Redis cache with TTL and invalidation rules. Explore Elasticsearch for search, and compare HBase or Aerospike only when the workload calls for them.' },
      ],
      finishLine: 'A schema, migration script and tests for transaction safety, duplicate requests, and a documented index or cache trade-off.',
    },
    evidence: [
      { label: 'Transaction search · design case study', href: '/projects/transaction-search', kind: 'case study' },
      { label: 'Wallet and ledger · design case study', href: '/projects/payment-wallet-ledger', kind: 'case study' },
      { label: 'API gateway · design case study', href: '/projects/distributed-api-gateway', kind: 'case study' },
    ],
  },
  {
    name: 'HLD & Distributed Systems',
    detail: 'Reliable business flows and traffic control',
    skills: ['Idempotency', 'Double-entry ledger', 'State machines', 'Reconciliation', 'Token bucket', 'Sliding window', 'Kafka', 'Event-driven systems', 'p95 / p99 latency', 'Profiling and query tuning'],
    learningPath: {
      steps: [
        { phase: 'START', title: 'Write requirements and limits', description: 'Choose one flow such as wallet transfer or API rate limiting. Define the API, correctness rules, expected traffic and failure cases before drawing services.' },
        { phase: 'BUILD', title: 'Design the reliable path', description: 'Add idempotency, a transaction state machine and clear retry behavior. Explain where Kafka helps and how consumers handle duplicate or delayed events.' },
        { phase: 'GO DEEPER', title: 'Plan for recovery and scale', description: 'Describe reconciliation, observability and p95/p99 latency. Start with a simple architecture, state its limits and show how it can evolve.' },
      ],
      finishLine: 'A concise design document with an architecture diagram, API and data flow, failure/recovery cases, and explicit trade-offs.',
    },
    evidence: [
      { label: 'Wallet and ledger · design case study', href: '/projects/payment-wallet-ledger', kind: 'case study' },
      { label: 'API gateway · design case study', href: '/projects/distributed-api-gateway', kind: 'case study' },
      { label: 'Risk engine · design case study', href: '/projects/transaction-risk-analytics', kind: 'case study' },
    ],
  },
  {
    name: 'Testing, Linux & Delivery',
    detail: 'Test-first habits and production workflows',
    skills: ['TDD', 'JUnit 5', 'Mockito', 'Concurrency tests', 'Linux', 'Docker / Compose', 'Jenkins', 'GitHub Actions', 'CI/CD'],
    learningPath: {
      steps: [
        { phase: 'START', title: 'Make tests part of the loop', description: 'Write a focused JUnit 5 test before a small Java change. Use Mockito at service boundaries and keep business logic testable.' },
        { phase: 'BUILD', title: 'Run the app reproducibly', description: 'Use Linux shell basics and Docker Compose to start the application and its dependencies. Add integration checks for persistence and API behavior.' },
        { phase: 'GO DEEPER', title: 'Automate the delivery path', description: 'Add a GitHub Actions or Jenkins pipeline for build, tests and packaging. Surface failures clearly and document the local run steps.' },
      ],
      finishLine: 'A fresh clone can run the app and tests with documented commands, and CI reports a clear pass or failure.',
    },
    evidence: [
      { label: 'Linux Fundamentals · LearnQuest', href: 'https://www.coursera.org/account/accomplishments/verify/VYTUDVMCPJFD', kind: 'certificate' },
      { label: 'Problem-Solving · UC Irvine', href: 'https://www.coursera.org/account/accomplishments/verify/6F2XXU6NLNJQ', kind: 'certificate' },
      { label: 'Java LLD library · design case study', href: '/projects/low-level-design-library', kind: 'case study' },
    ],
  },
];

export const certifications = [
  {
    name: 'Data Structures',
    issuer: 'University of California San Diego',
    completed: 'December 2022',
    url: 'https://www.coursera.org/account/accomplishments/verify/4SK2TERRSRNS',
    skills: ['Java', 'C++', 'Algorithms', 'Data structures'],
  },
  {
    name: 'Linux Fundamentals',
    issuer: 'LearnQuest',
    completed: 'April 2023',
    url: 'https://www.coursera.org/account/accomplishments/verify/VYTUDVMCPJFD',
    skills: ['Linux', 'Command line', 'Linux servers'],
  },
  {
    name: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    completed: 'May 2023',
    url: 'https://www.coursera.org/account/accomplishments/verify/D9CHK2QR359N',
    skills: ['TCP/IP', 'Routing', 'Network protocols'],
  },
  {
    name: 'Fundamentals of Network Communication',
    issuer: 'University of Colorado System',
    completed: 'December 2022',
    url: 'https://www.coursera.org/account/accomplishments/verify/XYXA969J8FYH',
    skills: ['Network architecture', 'TCP/IP', 'Digital communications'],
  },
  {
    name: 'Effective Problem-Solving and Decision-Making',
    issuer: 'University of California, Irvine',
    completed: 'June 2022',
    url: 'https://www.coursera.org/account/accomplishments/verify/6F2XXU6NLNJQ',
    skills: ['Complex problem-solving', 'Decision-making', 'Team collaboration'],
  },
];
