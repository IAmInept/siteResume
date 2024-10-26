import "./CSS/Main.css";

const Portfolio = () => {
  return (
    <>
      <p className="HeaderDiv">Portfolio</p>
      <div className="Portfolio">
        <div className="PortContainer">
          <div className="PortCard">
            <h2 className="CardTitle">Website Design</h2>
            <p className="CardContent">
              Although this website was made entirely by myself, this is not the
              discipline I wish to go into, and was made simply as a hobby to
              test my skills and knowledge, and showcase my interest for
              learning new skills regardless of their importance or relevance.
            </p>
            <a
              href="https://www.figma.com/design/4235rOuOdXPYbIZN5MVExS/Untitled?node-id=22-6&t=FLwCT6MpyCDzwHlK-1"
              target="_blank"
              className="PortfolioLink"
            >
              View UI Design
            </a>
          </div>
          <div className="PortCard">
            <h2 className="CardTitle">Github Projects</h2>
            <p className="CardContent">
              Alongside the UI Designs for this website, you can also find all
              my published FOSS code for this site and many other projects that
              I have worked on, or am working on! Including but not limited to:
              HTML, CSS, JS, JSX (React), Rust, C#, Python and many more.
            </p>
            <a
              href="https://github.com/IAmInept"
              target="_blank"
              className="PortfolioLink"
            >
              Visit Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;