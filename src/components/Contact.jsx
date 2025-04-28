import ButtonLink from "./ButtonLink";

export default function Contact() {
  return (
    <section style={{
      backgroundColor: '#f7f0ff',
      border: '1px solid #ddd',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
      marginBottom: '40px',
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto',
      animation: 'fadeInUp 0.8s ease forwards',
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#2c003e' }}>Contact Me</h2>
      <p style={{ marginBottom: '20px', color: '#2c003e' }}>
        I'd love to connect with you. Drop me a line!
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}>
        <ButtonLink href="https://github.com/bksrohan">GitHub</ButtonLink>
        <ButtonLink href="https://www.linkedin.com/in/rohan-patel-4414a7173">LinkedIn</ButtonLink>
        <ButtonLink href="mailto:rohanrajpatel@outlook.com">Email</ButtonLink>
      </div>
    </section>
  );
}
