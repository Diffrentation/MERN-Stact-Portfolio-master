import { FiDatabase, FiShield, FiUsers } from "react-icons/fi";
import "./ExperienceHighlights.css";

const highlights = [
  {
    title: "Ramyoz Scrapers",
    focus: "Research automation",
    description: "Instagram, LinkedIn, and domain intelligence through distributed workers.",
    Icon: FiDatabase,
    tone: "violet",
  },
  {
    title: "Diginfluencers",
    focus: "Creator operations",
    description: "Creator discovery, campaign workflows, engagement, and reporting.",
    Icon: FiUsers,
    tone: "pink",
  },
  {
    title: "HRMS",
    focus: "Quality assurance",
    description: "Employee operations, approvals, payroll, and workflow validation.",
    Icon: FiShield,
    tone: "green",
  },
];

const ExperienceHighlights = () => (
  <section className="experience-highlights" aria-label="Professional project highlights">
    <div className="experience-highlights__heading">
      <span>Professional experience</span>
      <p>Recent work across automation, operations, creator tools, and HR technology.</p>
    </div>
    <div className="experience-highlights__grid">
      {highlights.map(({ title, focus, description, Icon, tone }) => (
        <article key={title} className={`experience-tile experience-tile--${tone}`}>
          <div className="experience-tile__icon"><Icon /></div>
          <div>
            <p>{focus}</p>
            <h3>{title}</h3>
            <span>{description}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ExperienceHighlights;
