import { useState } from "react"
import { FaGithub, FaBars, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillFilePersonFill } from "react-icons/bs";
import { Link } from "react-scroll";
import logo from "../assets/Sd.png"


export default function Navbar() {
  const [nav, setnav] = useState(false)
  function handlenavbar() {
    setnav(!nav)
  }
  return (
    <div className="text-gray-300 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] ">
      <div>
        <img src={logo} name="logo" style={{ width: '50px' }} />
      </div>

      <div>
        <ul className=" hidden md:flex">
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='context' smooth={true} duration={500}>
              Contact
            </Link>
          </li>

        </ul>
      </div>

      <div onClick={handlenavbar} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>


      <ul className={!nav ? "hidden" : "left-0 top-0 absolute w-full h-screen flex flex-col bg-[#0a192f] justify-center items-center"}>
        <li className="py-6 text-4xl text-emerald-50 ">Home</li>
        <li className="py-6 text-4xl text-emerald-50 ">Skills</li>
        <li className="py-6 text-4xl text-emerald-50 ">Project</li>
        <li className="py-6 text-4xl text-emerald-50 ">Contact</li>
      </ul>

      {/* social media */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">

        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333] ">
            <a className="flex justify-between items-center w-full text-gray-300 " href="https://github.com/dinesh8447">
              Github  <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0078c7] ">
            <a className="flex justify-between items-center w-full text-gray-300 " href="https://www.linkedin.com/in/dinesh-s-5142ba267/">
              <span className="">linkin</span> <FaLinkedin className="" size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d73b3e] ">
            <a className="flex justify-between items-center w-full text-gray-300 " href="dinesh.softwaredeveloper31@gmail.com">
              Gmail <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#595959] ">
            <a className="flex justify-between items-center w-full text-gray-300 " href="#">
              Resume  <BsFillFilePersonFill size={30} />
            </a>
          </li>

        </ul>
      </div>



    </div>
  )
}
