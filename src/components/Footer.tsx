function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          © {year} Derek Barus. Built with React, TypeScript, and Vite.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
