import "./CSS/Main.css";

const Footer = () => {
  return (
    <>
      <a href="#top" id="Return">
        <svg
          aria-label="Return to Top"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 24L24 16M24 16L16 24M24 16V32M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
            stroke="#F3F3F3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <footer>© 2024 Gian-Luca Wallace, All rights reserved.</footer>
    </>
  );
};

export default Footer;
