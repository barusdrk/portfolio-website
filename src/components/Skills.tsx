import SectionTitle from "./SectionTitle";
import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle
          eyebrow="SKILLS"
          title="Technologies I use to build applications."
          description="My primary focus is full-stack development and AI-powered applications."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
