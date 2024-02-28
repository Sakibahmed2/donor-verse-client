import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { logOut } from "../../redux/features/auth/Login/loginSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const navAnimation = {
  hidden: {
    y: -200,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1.2,
      delay: 0.5,
      type: "spring",
      ease: "easeInOut",
      stiffness: 60,
    },
  },
};

const Navbar = () => {
  const isAuthenticated = useAppSelector((state) => state.login.token);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <motion.header
      className="h-28 md:h-16 fixed w-full  bg-white z-[999] border-b-2 shadow-md"
      variants={navAnimation}
      initial="hidden"
      animate="visible"
    >
      <nav className="w-full max-w-[1230px] h-full  md:px-[20px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <img src={logo} alt="Logo" className="size-16" />
        <ul className="md:space-x-5 space-x-3 pb-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/supplies">All Supplies</NavLink>
          {isAuthenticated ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/">
                <button className="custom-btn-outline" onClick={handleLogout}>
                  Logout
                </button>
              </NavLink>
            </>
          ) : (
            <NavLink to="/login">
              <button className="custom-btn">Login</button>
            </NavLink>
          )}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
