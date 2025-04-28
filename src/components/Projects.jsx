import { useState } from "react";
import ButtonLink from "./ButtonLink";
import { projects } from "./projectsData";

const getCardStyle = (isHovered) => ({
  backgroundColor: '#f7f0ff',
  border: '1px solid #ddd',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: isHovered
    ? '0 12px 30px rgba(0, 0, 0, 0.08)'
    : '0 6px 12px rgba(0, 0, 0, 0.1)',
  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
  transition: 'all 0.3s ease',
  maxWidth: '400px',
  textAlign: 'center',
  animation: 'fadeInUp 0.8s ease forwards',
});

const mainCardStyle = {
  backgroundColor: '#f7f0ff',
  border: '1px solid #ddd',
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
  margin: '0 auto 60px auto',
  maxWidth: '1000px',
  textAlign: 'center',
  animation: 'fadeInUp 0.8s ease forwards',
};

const techColors = {
  HTML: '#f16529',
  CSS: '#2965f1',
  Bootstrap: '#7952b3',
  Python: '#3776ab',
  React: '#61dafb',
  Vite: '#646cff',
  JavaScript: '#000000',
};

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section style={{ marginBottom: '60px' }}>
      {/* Whole Projects Card */}
      <div style={mainCardStyle}>

        <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: '#2c003e' }}>
          Projects
        </h2>

        {/* Projects Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                ...getCardStyle(index === hoveredIndex),
                flex: '1 1 300px',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 style={{ marginBottom: '10px', color: '#2c003e' }}>
                {project.title}
              </h3>
              <p style={{ marginBottom: '20px', color: '#2c003e' }}>
                {project.description}
              </p>

              {/* Tech Badges */}
              <div style={{
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      backgroundColor: techColors[tech] || '#e0e0e0',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      color: '#ffffff',
                      fontWeight: '500',
                      letterSpacing: '0.5px',
                      transition: 'transform 0.2s ease, background-color 0.2s ease, filter 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.filter = 'brightness(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.filter = 'brightness(1)';
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <ButtonLink href={project.link}>View Project →</ButtonLink>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
