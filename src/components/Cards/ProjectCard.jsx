import { FiActivity, FiArrowRight, FiChevronDown, FiDatabase, FiShield } from "react-icons/fi";
import "./ProjectCard.css";

const projects = [
  {
    title: "Ramyoz Scrapers",
    eyebrow: "01 / Automation infrastructure",
    icon: FiDatabase,
    color: "violet",
    overview:
      "Ramyoz Scrapers is a distributed data-collection system that turns web research into dependable, structured jobs. It supports Instagram, LinkedIn, and domain intelligence workflows without tying each scraper to the same runtime.",
    marketProblem:
      "Sales, marketing, and research teams often spend hours switching between websites and social platforms to build lead lists. Manual collection is slow, inconsistent, and hard to scale when fresh data is needed every day.",
    value:
      "The platform gives operations teams a reliable way to collect profile, company, contact, and website data while keeping long-running browser work isolated from the main product.",
    flow: ["Create job", "Priority queue", "Worker fleet", "Structured results"],
    contributions: [
      "Designed priority-based queue processing with retries and dead-letter recovery.",
      "Built dedicated workers for profile, contact, company, and domain data collection.",
      "Created a scalable architecture where new scraper services can run independently.",
    ],
    stack: ["TypeScript", "Node.js", "RabbitMQ", "MongoDB", "Puppeteer"],
  },
  {
    title: "Diginfluencers",
    eyebrow: "02 / Creator operations",
    icon: FiActivity,
    color: "pink",
    overview:
      "Diginfluencers is an influencer-management platform that brings creator discovery, campaign operations, engagement activity, and reporting into one working environment.",
    marketProblem:
      "Influencer campaigns are frequently managed across spreadsheets, DMs, and separate reporting tools. This makes it difficult to find suitable creators, keep campaigns organised, and understand campaign performance.",
    value:
      "Teams can move from finding suitable creators to managing campaigns and communication through connected admin tools, background jobs, and data-led views.",
    flow: ["Discover creators", "Build campaign", "Run engagement", "Review insights"],
    contributions: [
      "Contributed to admin tools, creator workflows, and reporting features.",
      "Integrated workers for data collection, notifications, and email operations.",
      "Helped build scalable data and cloud-storage workflows for day-to-day operations.",
    ],
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "Google Cloud Storage"],
  },
  {
    title: "HRMS",
    eyebrow: "03 / Quality assurance",
    icon: FiShield,
    color: "green",
    overview:
      "HRMS is a multi-tenant human resource management system that supports the full employee journey: onboarding, attendance, leave, payroll, approvals, documents, and company administration.",
    marketProblem:
      "Growing companies often run HR processes through spreadsheets, paper forms, and disconnected tools. That creates approval delays, duplicate work, and poor visibility for employees, managers, and HR teams.",
    value:
      "Its configurable approval engine allows each company to apply its own policies while employees, managers, HR teams, and administrators work from role-specific experiences.",
    flow: ["Employee action", "Approval workflow", "Role validation", "Audit trail"],
    contributions: [
      "Tested employee lifecycle, attendance, leave, payroll, and role-based workflows.",
      "Validated configurable approval paths, permissions, and cross-role hand-offs.",
      "Helped improve reliability across a complex tenant-aware product.",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Google Cloud Storage"],
  },
];

const ProjectCard = () => (
  <div className="project-grid">
      {projects.map((project) => {
        const Icon = project.icon;

        return (
          <article
            key={project.title}
            className={`project-grid__item project-grid__item--${project.color}`}
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <details className="project-panel">
              <summary className="project-panel__summary">
              <div className="project-panel__topline">
                <span className="project-panel__label"><Icon aria-hidden="true" />{project.eyebrow}</span>
                <span className="project-panel__status">Private product</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-panel__overview">{project.overview}</p>
              <span className="project-panel__toggle">View project details <FiChevronDown /></span>
              </summary>

              <div className="project-panel__content">
              <div className="market-problem">
                <span>Market problem solved</span>
                <p>{project.marketProblem}</p>
              </div>

              <div className="project-value">
                <span>What it enables</span>
                <p>{project.value}</p>
              </div>

              <div className="project-flow">
                <p>How the platform flows</p>
                <ol>
                  {project.flow.map((step, stepIndex) => (
                    <li key={step}>
                      <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                      {step}
                      {stepIndex < project.flow.length - 1 && <FiArrowRight aria-hidden="true" />}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="project-details">
                <div>
                  <p className="project-section-label">My contribution</p>
                  <ul>
                    {project.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="project-section-label">Built with</p>
                  <div className="project-stack">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </details>
          </article>
        );
      })}
  </div>
);

export default ProjectCard;
