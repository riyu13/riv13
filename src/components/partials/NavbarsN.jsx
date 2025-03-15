import { NavLink } from "react-router-dom";

const NavbarsN = () => {
  return (
    <div>
      <div className="navbar bg-base-100 text-white">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <NavLink
            data-aos="fade-down-right"
            data-aos-delay="300"
            to="/resumen"
            className="btn btn-ghost normal-case text-md"
          >
            プロファイル
          </NavLink>
          <NavLink
            data-aos="fade-down"
            data-aos-delay="500"
            to="/n"
            className="btn btn-ghost normal-case text-xl"
          >
            履歴書
          </NavLink>
          <NavLink
            data-aos="fade-down-left"
            data-aos-delay="400"
            to="/portofolio"
            className="btn btn-ghost normal-case text-md"
          >
            プロジェクト
          </NavLink>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
}

export default NavbarsN