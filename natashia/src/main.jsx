import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download,
  Code2, Database, Server, Smartphone, Users, Terminal,
  ExternalLink, ChevronRight
} from "lucide-react";
import "./styles.css";

//==============================SECTION : PROJECTS========================================================//
const projects = [
  {
    title: "OpportunityNav",
    category: "Full Stack",
    featured: true,
    description:
      "A unified virtual career fair and job portal connecting students, job seekers and employers through jobs, career fairs and skill matching.",
    tech: ["React", "React Native", "FastAPI", "SQLite", "Python"],
    tags: ["Web", "Mobile", "Backend"],
  },
  {
    title: "Financial Data Integration",
    category: "Data",
    featured: true,
    description:
      "A PostgreSQL financial data platform powered by Python ETL pipelines for generating, transforming, validating and loading realistic financial data.",
    tech: ["Python", "PostgreSQL", "SQL", "ETL", "Faker"],
    tags: ["Data", "Backend"],
  },

  {
    title: "Graph ADT",
    category: "Algorithms",
    description:
      "A data structures project exploring graph representations, traversal and algorithmic problem solving with Dijkstra's algorithm and K-NN.",
    tech: ["Java", "JavaFX", "GraphADT", "GUI"],
    tags: ["Algorithms"],
  },

  {
    title: "AutoSpare E-Commerce",
    category: "Full Stack",
    description:
      "A team-built e-commerce platform for automotive products, combining a product catalogue with web-based shopping functionality.",
    tech: ["HTML", "CSS", "JavaScript", "SQL", "C#"],
    tags: ["Web", "Team"],
  },
];

const experience = [
  {
    year: "2026",
    role: "Student Assistant — Computer Science 1A",
    org: "University of Johannesburg",
    text: "Supporting first-year students with C++ programming, problem solving and foundational computer science concepts.",
  },
  {
    year: "2026",
    role: "UJDevSoc — Secretary & Community Involvement",
    org: "University of Johannesburg",
    text: "Contributing to developer-community activities, event planning, sponsorship outreach, and administration.",
  },
  {
    year: "2026",
    role: "UJ Marshal",
    org: "University of Johannesburg",
    text: "Taking on a university community role that strengthened responsibility, communication and teamwork.",
  },
];

const skillGroups = [
  { icon: Code2, title: "Languages", items: ["Python", "Java", "C++", "C#", "JavaScript", "SQL", "VB.NET"] },
  { icon: Code2, title: "Frontend", items: ["React", "React Native", "HTML", "CSS"] },
  { icon: Server, title: "Backend", items: ["FastAPI"] },
  { icon: Database, title: "Data", items: ["PostgreSQL", "SQLite", "MySQL", "ETL"] },
  { icon: Terminal, title: "Tools", items: ["Git", "GitHub", "VS Code", "Visual Studio", "Android Studio"] },
  { icon: Smartphone, title: "Other", items: ["Data structures", "OOP", "Software Engineering"] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter || p.tags.includes(filter));

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="noise" />
      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">N</span>
          <span>NATASHIA<span className="accent">.</span></span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["About", "Projects", "Experience", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-resume" href="/Sithole_NN.pdf" target="_blank" onClick={closeMenu}>Resume <ArrowUpRight size={15} /></a>
        </nav>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> OPEN TO WORK</div>
            <h1>Building software<br /><span className="gradient-text">for real problems.</span></h1>
            <p className="hero-sub">
              Final-year Computer Science Student at the University of Johannesburg,
              building practical applications across full-stack development, mobile,
              backend systems and data.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">View my work <ArrowUpRight size={18} /></a>
              <a className="btn btn-ghost" href="#contact">Let's connect <Mail size={17} /></a>
            </div>
            <div className="social-row">
              <a href="https://github.com/Natashia-n" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/natashia-sithole-8367192aa/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href="mailto:sitholenkoka@gmail.com"><Mail size={18} /> Email</a>
            </div>
          </div>

          <div className="terminal-wrap">
            <div className="terminal-glow" />
            <div className="terminal">
              <div className="terminal-bar">
                <div className="dots"><i /><i /><i /></div>
                <span>natashia.dev — portfolio</span>
                <span className="terminal-status">● online</span>
              </div>
              <div className="terminal-body">
                <div><span className="muted">01</span> <span className="pink">const</span> <span className="blue">developer</span> = {"{"}</div>
                <div className="indent"><span className="muted">02</span> name: <span className="green">'Natashia'</span>,</div>
                <div className="indent"><span className="muted">03</span> focus: <span className="green">'software engineering | development'</span>,</div>
                <div className="indent"><span className="muted">04</span> stack: [</div>
                <div className="indent2"><span className="muted">05</span> <span className="green">'React'</span>, <span className="green">'Python'</span>,</div>
                <div className="indent2"><span className="muted">06</span> <span className="green">'FastAPI'</span>, <span className="green">'PostgreSQL'</span></div>
                <div className="indent"><span className="muted">07</span> ],</div>
                <div className="indent"><span className="muted">08</span> currently: <span className="green">'building'</span></div>
                <div><span className="muted">09</span> {"}"};</div>
                <div className="terminal-command"><span className="blue">➜</span> <span>./build --something-useful</span><span className="cursor">▋</span></div>
              </div>
            </div>
            <div className="float-card card-one"><span>PROJECTS</span><strong>04+</strong></div>
            <div className="float-card card-two"><span>FOCUS</span><strong>BUILD → SOLVE</strong></div>
          </div>
        </section>

        <section className="status-strip">
          <div><span className="status-dot" /> FINAL-YEAR COMPUTER SCIENCE</div>
          <div>UNIVERSITY OF JOHANNESBURG</div>
          <div>FULL-STACK · DATA · MOBILE</div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-grid">
            <div>
              <h2>More than<br /><span className="muted-text">just code.</span></h2>
            </div>
            <div className="about-copy">
              <p className="lead">
                I'm a final-year Computer Science student who enjoys turning ideas into
                working software — and figuring things out when the software refuses to work.
              </p>
              <p>
                My work has taken me from C++ data structures and socket programming to
                React applications, Fast APIs, React Native mobile development, PostgreSQL
                ETL pipelines.
              </p>
              <p>
                Alongside building software, I've grown through team projects, student
                leadership and assisting first-year students. I'm interested in opportunities
                where I can keep learning while contributing to meaningful products.
              </p>
              <div className="about-stats">
                <div><strong>03</strong><span>Final year</span></div>
                <div><strong>04+</strong><span>Projects</span></div>
                <div><strong>06+</strong><span>Technical areas</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section build-section">
          <div className="section-label">02 / WHAT I BUILD</div>
          <div className="build-grid">
            {[
              [Code2, "Full-Stack Applications", "React interfaces backed by Python with FastAPIs, authentication and databases."],
              [Server, "Backend & APIs", "Application logic, Fast APIs, authentication and integration."],
              [Smartphone, "Mobile Experiences", "Cross-platform applications with React Native and Expo."],
              [Database, "Data Systems", "PostgreSQL, SQLite, SQL modelling and Python ETL pipelines."],
            ].map(([Icon, title, text]) => (
              <div className="build-card" key={title}>
                <div className="icon-box"><Icon size={21} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-heading">
            <div>
              <div className="section-label">03 / SELECTED WORK</div>
              <h2>Things I've<br /><span className="muted-text">been building.</span></h2>
            </div>
            <p>A selection of academic, team and personal work that represents how I learn and build.</p>
          </div>

          <div className="filters">
            {["All", "Full Stack", "Data", "Backend", "Algorithms"].map((item) => (
              <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>
            ))}
          </div>

          <div className="project-grid">
            {filtered.map((project, index) => (
              <article className={project.featured ? "project-card featured" : "project-card"} key={project.title}>
                {project.featured && <div className="featured-tag">FEATURED PROJECT</div>}
                <div className="project-number">0{index + 1}</div>
                <div className="project-top">
                  <span className="project-category">{project.category}</span>
                  <ExternalLink size={18} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="project-link">Project available upon request <ChevronRight size={16} /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section case-study">
          <div className="case-grid">
            <div>
              <div className="section-label">04 / FLAGSHIP PROJECT</div>
              <span className="case-kicker">OPPORTUNITYNAV</span>
              <h2>Technology that<br /><span className="gradient-text">connects people.</span></h2>
              <p>
                A unified virtual career fair and job portal designed to bring students,
                employers and opportunities into one platform.
              </p>
              <div className="case-tags">
                {["React", "React Native", "FastAPi", "SQLite", "Python", "Git/Git Hub"].map(t => <span key={t}>{t}</span>)}
              </div>
              <a className="text-link" href="#contact">Discuss the project <ArrowUpRight size={17} /></a>
            </div>

            <div className="architecture">
              <div className="arch-node">REACT WEB</div>
              <div className="arch-line" />
              <div className="arch-node">REACT NATIVE</div>
              <div className="arch-line" />
              <div className="arch-node main-node">FAST API</div>
              <div className="arch-branches">
                <span>AUTH</span><span>JOBS</span><span>CAREER FAIR</span><span>SKILL MATCHING</span>
              </div>
              <div className="arch-line" />
              <div className="arch-node">SQLITE DATABASE</div>
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-label">05 / EXPERIENCE</div>
          <div className="section-heading compact">
            <h2>Learning by<br /><span className="muted-text">doing.</span></h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={item.role}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span>{item.org}</span>
                  <h3>{item.role}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-label">06 / TOOLKIT</div>
          <div className="skills-heading">
            <h2>Tools I use to<br /><span className="muted-text">make things work.</span></h2>
            <p>Technologies I've worked with across projects and coursework.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, items }) => (
              <div className="skill-card" key={title}>
                <div className="skill-title"><Icon size={18} /><span>{title}</span></div>
                <div className="skill-pills">{items.map(i => <span key={i}>{i}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section philosophy">
          <div className="philosophy-inner">
            <div className="section-label">07 / PHILOSOPHY</div>
            <div className="quote-mark">“</div>
            <h2>Build.<br />Break.<br /><span className="gradient-text">Debug. Learn. Repeat.</span></h2>
            <p>
              Becoming a better developer isn't only about writing code when everything
              works. It's about understanding systems, asking better questions, debugging
              patiently and learning from every broken build.
            </p>
          </div>
        </section>

        <section className="section education">
          <div className="section-label">08 / EDUCATION</div>
          <div className="education-card">
            <div>
              <span className="edu-kicker">UNIVERSITY OF JOHANNESBURG</span>
              <h2>BSc in IT in Computer Science<br />& Informatics</h2>
            </div>
            <div className="edu-meta">
              <strong>NQF Level 7</strong>
              <span>360 Credits</span>
              <span>Final Year · 2026</span>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-box">
            <div className="section-label">09 / CONTACT</div>
            <h2>Let's <br /><span className="gradient-text">Connect.</span></h2>
            <p>
              Looking for a graduate developer, collaborator or someone who enjoys
              working with technology?
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:sitholenkoka@gmail.com">Email me <Mail size={18} /></a>
              <a className="btn btn-ghost" href="https://github.com/Natashia-n" target="_blank" rel="noreferrer">GitHub <Github size={18} /></a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/natashia-sithole-8367192aa/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">NATASHIA<span className="accent">.</span></div>
        <span> Developer · Johannesburg</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
