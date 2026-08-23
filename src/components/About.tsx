import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="ABOUT ME"
          title="From simple AI tools to full AI SaaS workflows."
        />

        <div className="about-grid">
          <div>
            <p>
              I am a developer focused on building practical AI-powered
              applications. My projects combine modern frontend
              development, backend APIs, databases, authentication, and
              AI capabilities.
            </p>

            <p>
              I am particularly interested in applications that turn AI
              into useful products, including text processing,
              productivity tools, document intelligence, and workflow
              automation.
            </p>
          </div>

          <div className="about-highlight">
            <span>My focus</span>

            <strong>
              Full-stack applications with practical AI features.
            </strong>

            <p>
              React + TypeScript on the frontend. Node.js + Express on
              the backend. MongoDB for data. AI APIs for intelligent
              features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
