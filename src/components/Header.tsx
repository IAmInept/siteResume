import "./CSS/Header.css"

const Header = () => {
  return (
    <header>
      <nav>
        <a href="https://www.facebook.com/gianluca.wallace.31/" target="_blank">
          <img
            id="fb_img"
            className="navBarIcons"
            alt="facebook"
            src="..\src\icons\fb_icon.svg"
            width="24"
            height="24"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/gian-luca-w-49303218a/"
          target="_blank"
        >
          <img
            id="linkedin_img"
            className="navBarIcons"
            alt="linkedin"
            src="..\src\icons\linkedin_icon.svg"
            width="24"
            height="24"
          />
        </a>
        <a href="https://github.com/IAmInept" target="_blank">
          <img
            id="github_img"
            className="navBarIcons"
            alt="github"
            src="..\src\icons\github_icon.svg"
            width="24"
            height="24"
          />
        </a>
        <a href="mailto:gianwallace2002@gmail.com" target="_blank">
          <img
            id="email_img"
            className="navBarIcons"
            alt="email"
            src="..\src\icons\email_icon.svg"
            width="24"
            height="24"
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;
