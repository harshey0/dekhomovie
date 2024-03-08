import "./Footer.css";
export default function Footer() {
  return (
      <footer className="page-footer">
        <p className="footer-text">
          &#169; 2024 Harshit Sethi
          <a
              href="https://github.com/harshey0"
              className="social"
              target="_blank"
          >
            GitHub
          </a>
          <a
              href="https://www.linkedin.com/in/harshit-sethi00/"
              className="social"
              target="_blank"
          >
            LinkedIn
          </a>
        </p>
      </footer>
  );
}
