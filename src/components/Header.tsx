import "./CSS/Main.css";

const Header = () => {
  return (
    <header>
      <nav>
        <a href="https://www.facebook.com/gianluca.wallace.31/" target="_blank">
          <svg
            aria-label="Facebook Image/Link"
            width="24"
            height="24"
            viewBox="0 0 13 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
              // stroke="#F3F3F3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/gian-luca-w-49303218a/"
          target="_blank"
        >
          <svg
            aria-label="Linkedin Image/Link"
            width="24"
            height="24"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7C16.5913 7 18.1174 7.63214 19.2426 8.75736C20.3679 9.88258 21 11.4087 21 13V20H17V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V20H9V13C9 11.4087 9.63214 9.88258 10.7574 8.75736C11.8826 7.63214 13.4087 7 15 7Z"
              // stroke="#F3F3F3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 8H1V20H5V8Z"
              // stroke="#F3F3F3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z"
              // stroke="#F3F3F3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="https://github.com/IAmInept" target="_blank">
          <svg
            aria-label="Github Image/Link"
            width="24"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 20C3 21.5 3 17.5 1 17M15 23V19.13C15.0375 18.6532 14.9731 18.1738 14.811 17.7238C14.6489 17.2738 14.3929 16.8634 14.06 16.52C17.2 16.17 20.5 14.98 20.5 9.52C20.4997 8.12383 19.9627 6.7812 19 5.77C19.4559 4.54851 19.4236 3.19835 18.91 2C18.91 2 17.73 1.65 15 3.48C12.708 2.85882 10.292 2.85882 8 3.48C5.27 1.65 4.09 2 4.09 2C3.57638 3.19835 3.54414 4.54851 4 5.77C3.03013 6.7887 2.49252 8.14346 2.5 9.55C2.5 14.97 5.8 16.16 8.94 16.55C8.611 16.89 8.35726 17.2954 8.19531 17.7399C8.03335 18.1844 7.96681 18.6581 8 19.13V23"
              // stroke="#F3F3F3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="mailto:gianwallace2002@gmail.com" target="_blank">
          <svg
            aria-label="Email Recipient (Gian)"
            width="24"
            height="24"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="emailsvg"
          >
            <path
              d="M2 16C1.45 16 0.975 15.8083 0.575 15.425C0.191667 15.025 0 14.55 0 14V2C0 1.45 0.191667 0.983334 0.575 0.599999C0.975 0.2 1.45 0 2 0H18C18.55 0 19.0167 0.2 19.4 0.599999C19.8 0.983334 20 1.45 20 2V14C20 14.55 19.8 15.025 19.4 15.425C19.0167 15.8083 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z"
              fill="#FEF7FF"
            />
          </svg>
        </a>
      </nav>
    </header>
  );
};

export default Header;
