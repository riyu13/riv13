import { NavLink } from "react-router-dom";

const Navbars = () => {
  return (
    <div>
      <div className="navbar bg-base-100 text-white">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <NavLink
            data-aos="fade-down-right"
            data-aos-delay="300"
            to="/resume"
            className="btn btn-ghost normal-case text-md"
          >
            profile
          </NavLink>
          <NavLink
            data-aos="fade-down"
            data-aos-delay="500"
            to="/"
            className="btn btn-ghost normal-case text-xl"
          >
            Curriculum Vitae
          </NavLink>
          <NavLink
            data-aos="fade-down-left"
            data-aos-delay="400"
            to="/portofolio"
            className="btn btn-ghost normal-case text-md"
          >
            portofolio
          </NavLink>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
}

export default Navbars