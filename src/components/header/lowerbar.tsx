import * as React from "react";
import { Link } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Lowerbar(props) {
  return (
    <div
      className="text-white h-14 bg-blue-700 w-full grid grid-cols-[1fr_20px] lg:grid-cols-[1fr_600px] px-12"
      style={{ fontFamily: "Graphik" }}
    >
      <div className="font-medium content-center">Optimize with Folio</div>
      <div className="grid grid-cols-4 max-lg:hidden">
        
      <Link
          activeClass="bg-blue-950"
          to="tax"
          spy={true}
          offset={-50}
          smooth={true} className="grid justify-items-center content-center px-3 hover:bg-blue-950 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[10%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[10%] after:bottom-4 after:right-[50%]">
          Tax
        </Link>
        <Link
          activeClass="bg-blue-950"
          to="accounting"
          spy={true}
          offset={-50}
          smooth={true} className="grid justify-items-center content-center hover:bg-blue-950 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[30%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[30%] after:bottom-4 after:right-[50%]">
           Accounting
        </Link>
        <Link
          activeClass="bg-blue-950"
          to="auditing"
          spy={true}
          offset={-50}
          smooth={true}  className="grid justify-items-center content-center hover:bg-blue-950 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[22%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[22%] after:bottom-4 after:right-[50%]">
          Auditing
        </Link>
        <Link
          activeClass="bg-blue-950"
          to="consulting"
          spy={true}
          offset={-50}
          smooth={true} className="grid justify-items-center content-center hover:bg-blue-950 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[28%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[28%] after:bottom-4 after:right-[50%]">
          Consulting
        </Link>
      </div>
      <div className="grid grid-cols-6 lg:hidden relative">
      {props.open ? (
          <button onClick={props.handleOpen}>
            <KeyboardArrowUpIcon sx={{ width: "30px", height: "30px" }} />
          </button>
        ) : (
          <button onClick={props.handleOpen}>
            <svg
              className="w-4 h-4 ms-1 absolute bottom-1/3 right-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
