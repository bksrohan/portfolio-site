export default function Header() {
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
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#2c003e' }}>Hi, I'm Rohan!</h1>
        <p style={{ fontSize: '1.2rem', color: '#2c003e' }}>
          Welcome to my Portfolio Site
        </p>
        <p style={{ fontSize: '1.2rem', color: '#2c003e'}}>
          I'm an aspiring developer, hoping to learn and build awesome things!
        </p>
      </section>
    );
  }
  