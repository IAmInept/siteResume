import "./CSS/Main.css";

const Experience = () => {
  return (
    <>
      <p className="TitleContainer">Experience & Employment</p>
      <div className="CTA">
        <div className="Experience">
          <div className="ExperienceBox">
            <h2> University of Staffordshire</h2>
            <p> BSc (Hons) | Computer Science | 2023 - 2026</p>
          </div>
          <div className="ExperienceBox">
            <h2>East Coast College</h2>
            <p> (E. Diploma) | Engineering Technologies | 2019 - 2022</p>
          </div>
          <div className="ExperienceBox">
            <h2> Pakefield Highschool</h2>
            <p>
              GCSEs | 2013 - 2018
            </p>
          </div>
        </div>
        <div className="Employment">
          <div className="EmploymentBox">
            <h2>ASDA | Lowestoft</h2>
            <p>Home Shopping & Delivery Driver | 2021 - Present</p>
          </div>
          <div className="EmploymentBox">
            <h2>Adnams - The Swan | Southwold</h2>
            <p>Front of House & Kitchen | 2018 - 2021</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
