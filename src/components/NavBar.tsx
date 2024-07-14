import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaBarsProgress } from "react-icons/fa6";
import { GrTask } from "react-icons/gr";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-3">
        <NavLink
          className={`text-neutral-400 py-4 flex items-center justify-center max-sm:flex-col max-sm:text-[10px]`}
          to="/"
        >
          <MdOutlineDashboardCustomize className="mr-1 text-2xl max-sm:text-xl" />
          board
        </NavLink>
        <NavLink
          className={`text-neutral-400 py-4 flex items-center justify-center max-sm:flex-col max-sm:text-[10px]`}
          to="/completed"
        >
          <GrTask className="mr-1 text-2xl max-sm:text-xl" />
          completed
        </NavLink>
        <NavLink
          className={`text-neutral-400 py-4 flex items-center justify-center max-sm:flex-col max-sm:text-[10px] text-nowrap`}
          to="/on-progress"
        >
          <FaBarsProgress className="mr-1 text-2xl max-sm:text-xl" />
          on progress
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
