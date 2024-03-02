import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useTheme } from "../../context/ThemeContaxt";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const isAuthenticated = useAppSelector((state) => state.login.token);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  const { theme, toggleTheme } = useTheme();

  const navOption = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/supplies">All Supplies</NavLink>
      <NavLink to="/about-us">About</NavLink>
      {isAuthenticated ? (
        <>
          <NavLink to="/volunteer">Become volunteer</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/community">Community</NavLink>

          <NavLink to="/">
            <button
              className="custom-btn py-1 px-2 font-normal text-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </NavLink>
        </>
      ) : (
        <NavLink to="/login">
          <button className="custom-btn py-1 px-2 font-normal text-sm">
            Login
          </button>
        </NavLink>
      )}
      <Switch
        defaultChecked
        onChange={toggleTheme}
        checkedChildren={"Dark"}
        unCheckedChildren={"Light"}
        className="w-14 text-black bg-black"
      />
    </>
  );

  return (
    <div className="overflow-hidden">
      <motion.div
        style={{ background: theme.background, color: theme.text }}
        className={`w-full fixed z-40 drop-shadow-lg  text-black md:h-16 `}
        variants={navAnimation}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md  hover:text-white bg-gray-400 drop-shadow-md"
                onClick={toggleNavbar}
              >
                <span className="sr-only">Open main menu</span>

                <span className={`${isOpen ? "hidden" : "block"} h-6 w-6`}>
                  <MenuOutlined />
                </span>
                <span className={`${isOpen ? "block" : "hidden"} h-6 w-6`}>
                  <CloseOutlined />
                </span>
              </button>
            </div>

            <div className="flex justify-between  items-center w-9/12 mx-auto">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <img className="size-20" src={logo} alt="" />
              </div>
              {/* Navigation links */}
              <div className="hidden sm:block sm:ml-6 ">
                <nav>
                  <ul className="flex items-center space-x-5 justify-end  text-lg">
                    {navOption}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
          <ul className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            {navOption}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
