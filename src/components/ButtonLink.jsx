export default function ButtonLink({ href, children, backgroundColor = '#007bff', textColor = 'white' }) {
  const linkButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: backgroundColor,
    color: textColor,
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    cursor: 'pointer',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={linkButtonStyle}
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
    >
      {children}
    </a>
  );
}
