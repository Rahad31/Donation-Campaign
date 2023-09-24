import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto items-center flex flex-col justify-between my-10 gap-10 lg:flex-row lg:gap-0">
      <div>
        <img className="h-[72px]" src="https://i.ibb.co/q0nRsqP/Logo.png"></img>
      </div>
      <div className="">
        <ul className="flex flex-row gap-12 text-lg">
          <li className="">
            <NavLink to="/">
              <a className="hover:text-[#FF444A] hover:underline">Home</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <a className="hover:text-[#FF444A] hover:underline">Donation</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <a className="hover:text-[#FF444A] hover:underline">Statistics</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
