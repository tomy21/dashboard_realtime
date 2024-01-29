import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="flex-1 flex-row gap-x-5 items-center justify-start">
        <img src="/logo.png" width={50} alt="" />
        <div className="flex flex-row gap-x-3 text-sm cursor-pointer ">
          <Link to="/" className="hover:bg-zinc-200 p-3 rounded-md bg-zinc-200">
            Dashboard
          </Link>
          {/* <Link to="/transactions" className="hover:bg-zinc-200 p-3 rounded-md">
            Transactions
          </Link> */}
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Lippo Mall Puri</summary>
              {/* <ul className="p-2 bg-base-100 rounded-t-none z-20">
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
              </ul> */}
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
