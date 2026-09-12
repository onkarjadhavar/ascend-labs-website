/**
 * Ascend Labs - Centralized Configuration & Data Layer
 * ----------------------------------------------------
 * Working Brand: ASCEND LABS
 * Tagline: Learn. Build. Lead.
 */

const ASCEND_CONFIG = {
  brand: {
    name: "ASCEND LABS",
    symbol: "A",
    tagline: "Learn. Build. Lead.",
    legalNotice: "Working brand identity - final legal company name to be confirmed during registration.",
    description: "Ascend Labs is a launch-stage technology collective creating real internship exposure, campus leadership opportunities, business websites, and organized engineering notes."
  },

  contact: {
    email: "contact@ascendlabs.in",
    programsEmail: "programs@ascendlabs.in",
    notesEmail: "notes@ascendlabs.in",
    phone: "+91 98765 43210",
    location: "Maharashtra, India",
    responseTime: "24-48 business hours"
  },

  navigation: [
    { label: "Programs", href: "index.html#programs" },
    { label: "Services", href: "index.html#services" },
    { label: "Notes", href: "index.html#notes" },
    { label: "How it works", href: "index.html#process" }
  ],

  internship: {
    duration: "One Month (4 Weeks)",
    format: "Remote / Hybrid with Weekly Mentor Reviews",
    headline: "YOUR FIRST STEP INTO THE CORPORATE WORLD STARTS HERE.",
    subtitle: "1-Month Internship Program | Specially Designed for Beginners",
    motto: "Learn. Work. Experience. Grow.",
    tracks: [
      {
        id: "web",
        title: "Web Development & Full Stack",
        tech: "HTML5, CSS3, JavaScript (ES6+), Node.js, REST APIs, Git",
        description: "Build fast, production-grade responsive websites and full stack apps with performance budgets and semantic structure."
      },
      {
        id: "python",
        title: "Python Programming & Backend Systems",
        tech: "Python 3, FastAPI, Flask, SQLite / PostgreSQL, Data Structures, OOP",
        description: "Develop reliable server-side endpoints, structured schemas, backend logic, and handle database persistence."
      },
      {
        id: "java",
        title: "Java & Enterprise Software Development",
        tech: "Java 17+, OOP Principles, JDBC, SQL, Algorithms, Maven",
        description: "Master enterprise Java architecture, object-oriented patterns, database querying, and structured problem solving."
      },
      {
        id: "datascience",
        title: "Data Science & Machine Learning",
        tech: "Python, Pandas, NumPy, Scikit-Learn, Matplotlib, Jupyter",
        description: "Perform exploratory data analysis, data cleaning, statistical modeling, and train predictive machine learning pipelines."
      },
      {
        id: "uiux",
        title: "UI/UX & Frontend Engineering",
        tech: "Figma, Design Tokens, Component Architecture, Micro-animations, WCAG 2.1",
        description: "Craft accessible, interactive user interfaces with typography scales, design systems, and responsive layouts."
      },
      {
        id: "cloud",
        title: "Cloud Computing & DevOps Foundations",
        tech: "Linux CLI, Git / GitHub, CI/CD Actions, Docker Basics, Cloud Deployment",
        description: "Deploy production software using version control workflows, automated CI/CD pipelines, containerization, and cloud hosting."
      }
    ],
    selectionProcess: [
      { step: 1, title: "Apply", desc: "Submit your application with your details, college name, and preferred domain." },
      { step: 2, title: "Selection", desc: "Shortlisted candidates undergo profile review & beginner readiness screening." },
      { step: 3, title: "Get an Offer Letter", desc: "Receive your formal Ascend Labs Internship Offer Letter & onboarding guide." },
      { step: 4, title: "Complete Your Task & Project", desc: "Work on assigned real-world project tasks with weekly mentor guidance & Git code reviews." },
      { step: 5, title: "Get Completion Certificate", desc: "Final project evaluation, verified experience certificate, and personalized LOR." }
    ],
    benefits: [
      { id: "cert", title: "Experience Certificate", tag: "VERIFIED CREDENTIAL", desc: "Receive an official, valid internship completion certificate verified by Ascend Labs with a unique credential verification code for your CV and LinkedIn." },
      { id: "portfolio", title: "Live Project Portfolio", tag: "PORTFOLIO ASSET", desc: "Add real-world production projects to your CV that you have actually built, tested, and deployed to live cloud URLs with public GitHub repositories." },
      { id: "network", title: "Mentorship & Networking", tag: "FOUNDER ACCESS", desc: "Connect with senior software engineers, founders, and ambitious peer interns across DBATU and SPPU. Build a lasting professional tech network." },
      { id: "lor", title: "Letter of Recommendation", tag: "MERIT RECOGNITION", desc: "Top-performing interns receive a personalized, merit-backed Letter of Recommendation (LOR) for upcoming job interviews and master's degree applications." }
    ],
    curriculum: [
      { week: "01", title: "Connect & Plan", desc: "Environment setup, Git workflow, repository breakdown, project specification review, and initial schema wireframes." },
      { week: "02", title: "Core Build", desc: "Feature development, layout assembly, API integration, and first formal pull request review." },
      { week: "03", title: "Optimization", desc: "Lighthouse performance audits, cross-browser compatibility, mobile responsive testing, and accessibility audit." },
      { week: "04", title: "Deploy & Defense", desc: "Live production deployment, technical documentation writeup, capstone project defense, and verifiable certificate." }
    ],
    eligibility: [
      "Enrolled in engineering, polytechnic, or computer science degree/diploma (DBATU, SPPU, or recognized universities).",
      "Familiarity with at least one programming language (JavaScript, Python, C++, or Java).",
      "Ability to commit 10-14 hours per week for milestones and code reviews.",
      "A proactive mindset to build real software rather than copy tutorials."
    ],
    faqs: [
      { q: "What is the time commitment required?", a: "Interns dedicate 10 to 14 hours per week on flexible milestones and asynchronous check-ins so academic coursework is never compromised." },
      { q: "Is the internship remote or in-person?", a: "The programme is remote-first with weekly virtual reviews and paired problem-solving sessions, accessible across DBATU, SPPU, and all regional colleges." },
      { q: "Will I receive a verifiable certificate?", a: "Yes. Upon completing all assigned deliverables and defending your capstone project, you receive an official, verifiable Certificate of Completion." },
      { q: "How are candidates selected?", a: "After reviewing your application, we arrange a brief 15-minute technical conversation to evaluate your current baseline and match you to the right track." }
    ]
  },

  ambassador: {
    duration: "Flexible (1 Semester / 3-6 Months)",
    commitment: "3-5 Hours / Week",
    responsibilities: [
      "Represent Ascend Labs as the primary developer connection on your college campus.",
      "Organize informal peer study circles, code walkthroughs, and notes review sessions.",
      "Share early access to IT internships, tech workshops, and campus initiatives.",
      "Gather student feedback on academic challenges and university syllabus pain points."
    ],
    benefits: [
      "Direct 1-on-1 mentorship from the founders on technical roadmaps and portfolio reviews.",
      "Priority fast-track admission into Ascend Labs IT internship cohorts.",
      "Official Letter of Recommendation (LOR) and verified Certificate of Leadership.",
      "Networking with proactive student leaders across DBATU, SPPU, and Maharashtra colleges."
    ],
    eligibility: [
      "Undergraduate engineering student (2nd, 3rd, or final year preferred).",
      "Active participant in technical cells, student clubs, or peer groups.",
      "Clear communication, organized mindset, and enthusiasm for community building."
    ],
    faqs: [
      { q: "Will this role affect my college attendance and exams?", a: "No. The role requires only 3 to 5 flexible hours per week and pauses during college practicals and university exams." },
      { q: "Can students from non-computer branches apply?", a: "Yes. Students from all branches (Computer, IT, ENTC, Mechanical, Civil) are encouraged to apply." }
    ]
  },

  webDevelopment: {
    services: [
      {
        title: "High-Converting Single Pages",
        ideal: "Cafes, retail shops, salons, boutique brands",
        description: "Fast, elegant single-page websites featuring menus, hours, services, Google Maps, and WhatsApp click-to-chat."
      },
      {
        title: "Multi-Section Service Websites",
        ideal: "Clinics, consultancies, coaching academies, local firms",
        description: "Structured multi-page websites detailing team credentials, service offerings, client reviews, and direct appointment enquiry funnels."
      },
      {
        title: "Modernization & Performance Rebuilds",
        ideal: "Businesses with slow, outdated, or broken existing sites",
        description: "Rebuilding bloated CMS websites with clean code that loads in under 1 second, works flawlessly on mobile, and ranks higher locally."
      }
    ],
    workflow: [
      { step: "01", name: "Connect", desc: "Consultation on business goals, customer targets, and desired call-to-actions." },
      { step: "02", name: "Plan", desc: "Design mockup, content hierarchy, and visual prototype for your review." },
      { step: "03", name: "Build", desc: "Clean code development, responsive testing, and WhatsApp/enquiry setup." },
      { step: "04", name: "Launch", desc: "Custom domain connection, SSL setup, and 30 days of post-launch warranty." }
    ],
    deliverables: [
      "100% full ownership of source code and assets (no platform lock-in)",
      "Zero monthly CMS hosting fees (free hosting on Cloudflare/GitHub)",
      "Mobile-first responsive layout tested at 360px, 768px, and desktop",
      "Direct WhatsApp and validated email enquiry integration",
      "30-day post-launch support and warranty"
    ]
  },

  notesHub: {
    disclaimer: "Ascend Labs curates independent, student-authored conceptual revision guides and study roadmaps. We do not host, distribute, or claim ownership of proprietary university question papers, textbook scans, or copyrighted institutional materials.",
    universities: [
      { id: "dbatu", name: "DBATU", fullName: "Dr. Babasaheb Ambedkar Technological University (Lonere)" },
      { id: "sppu", name: "SPPU", fullName: "Savitribai Phule Pune University (Pune)" }
    ],
    branches: [
      { id: "all", name: "All Branches" },
      { id: "comp", name: "Computer Engineering" },
      { id: "it", name: "Information Technology" },
      { id: "mech", name: "Mechanical Engineering" },
      { id: "civil", name: "Civil Engineering" },
      { id: "entc", name: "Electronics & Telecommunication" },
      { id: "aids", name: "AI & Data Science" }
    ],
    semesters: [
      { id: "all", name: "All Semesters" },
      { id: "sem1", name: "Semester 1 (FE)" },
      { id: "sem2", name: "Semester 2 (FE)" },
      { id: "sem3", name: "Semester 3 (SE)" },
      { id: "sem4", name: "Semester 4 (SE)" },
      { id: "sem5", name: "Semester 5 (TE)" },
      { id: "sem6", name: "Semester 6 (TE)" },
      { id: "sem7", name: "Semester 7 (BE)" },
      { id: "sem8", name: "Semester 8 (BE)" }
    ],
    subjects: [
      {
        id: "dbatu-comp-sem3-dsa",
        university: "dbatu",
        branch: "comp",
        semester: "sem3",
        code: "BTCOC301",
        title: "Data Structures & Algorithms",
        units: "5 Units",
        description: "Linear and non-linear data structures, stacks, queues, binary search trees, AVL balancing, graphs, and sorting complexities.",
        status: "Curating Roadmaps",
        lastUpdated: "September 2026",
        syllabusRev: "2024-25 DBATU Scheme"
      },
      {
        id: "dbatu-comp-sem3-oop",
        university: "dbatu",
        branch: "comp",
        semester: "sem3",
        code: "BTCOC302",
        title: "Object-Oriented Programming (C++ / Java)",
        units: "5 Units",
        description: "Encapsulation, inheritance hierarchies, polymorphism, templates, exception handling, and standard library collections.",
        status: "Syllabus Aligned",
        lastUpdated: "September 2026",
        syllabusRev: "2024-25 DBATU Scheme"
      },
      {
        id: "dbatu-comp-sem3-dm",
        university: "dbatu",
        branch: "comp",
        semester: "sem3",
        code: "BTBS303",
        title: "Discrete Mathematics & Graph Theory",
        units: "5 Units",
        description: "Set theory, predicate logic, mathematical induction, relations, generating functions, and graph isomorphism.",
        status: "In Peer Review",
        lastUpdated: "September 2026",
        syllabusRev: "2024-25 DBATU Scheme"
      },
      {
        id: "dbatu-it-sem4-os",
        university: "dbatu",
        branch: "it",
        semester: "sem4",
        code: "BTCOC401",
        title: "Operating Systems Principles",
        units: "5 Units",
        description: "Process synchronization, CPU scheduling algorithms, deadlock handling, virtual memory paging, and file management.",
        status: "Curating Roadmaps",
        lastUpdated: "September 2026",
        syllabusRev: "2024-25 DBATU Scheme"
      },
      {
        id: "sppu-comp-sem3-dsa",
        university: "sppu",
        branch: "comp",
        semester: "sem3",
        code: "210242",
        title: "Data Structures & Algorithms (SPPU)",
        units: "6 Units",
        description: "Algorithmic analysis, searching/sorting algorithms, hash tables, binary trees, dynamic graphs, and file organization.",
        status: "Syllabus Aligned",
        lastUpdated: "September 2026",
        syllabusRev: "2024 Pattern SPPU"
      },
      {
        id: "sppu-comp-sem3-dm",
        university: "sppu",
        branch: "comp",
        semester: "sem3",
        code: "210241",
        title: "Discrete Mathematics (SPPU)",
        units: "6 Units",
        description: "Mathematical induction, group theory, algebraic systems, lattices, Boolean algebra, and tree traversals.",
        status: "In Peer Review",
        lastUpdated: "September 2026",
        syllabusRev: "2024 Pattern SPPU"
      },
      {
        id: "sppu-entc-sem4-signals",
        university: "sppu",
        branch: "entc",
        semester: "sem4",
        code: "204191",
        title: "Signals and Systems",
        units: "6 Units",
        description: "Continuous and discrete-time signals, LTI systems convolution, Fourier transform, Laplace transform, and Z-transforms.",
        status: "Curating Roadmaps",
        lastUpdated: "September 2026",
        syllabusRev: "2024 Pattern SPPU"
      },
      {
        id: "dbatu-mech-sem3-tom",
        university: "dbatu",
        branch: "mech",
        semester: "sem3",
        code: "BTMEC304",
        title: "Theory of Machines",
        units: "5 Units",
        description: "Kinematic link inversions, velocity & acceleration analysis, cam profiles, gear trains, and gyroscopic motion.",
        status: "Curating Roadmaps",
        lastUpdated: "September 2026",
        syllabusRev: "2024-25 DBATU Scheme"
      }
    ]
  }
};

if (typeof window !== "undefined") {
  window.ASCEND_CONFIG = ASCEND_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = ASCEND_CONFIG;
}
