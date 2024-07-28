import instaLogo from "../assets/InstLogo.png";
import { GrHomeRounded } from "react-icons/Gr";
import { FiSearch } from "react-icons/Fi";
import { MdOutlineExplore} from "react-icons/Md";
import { MdSlowMotionVideo } from "react-icons/Md";
import { TbMessage2Heart } from "react-icons/Tb";
import { AiOutlineHeart } from "react-icons/Ai";
import { MdOutlineLibraryAdd } from "react-icons/Md";
import { TbBrandThreads } from "react-icons/Tb";
import { CgDetailsMore } from "react-icons/Cg";
import { Link } from "react-router-dom";


const Navbar = ({toggleModal})=>{
  return(
<div className="sticky border-x border-gray-300 top-0 w-60 h-[100vh]"> 
<div className="">
  <ul className="flex flex-col items-center w-60 items-cente gap-6 py-3 pr-16 text-2xl">
      <li className="w-28 mb-6 mt-7">
          <img src={instaLogo} alt="" />
      </li>

      <li className=" flex items-center">
        <GrHomeRounded  /><Link className="text-lg font-semibold" to={'/dashboard'}>Home</Link>
      </li>

      <li className="flex items-center">
        <FiSearch/>
        <button className="text-lg text-left">Search</button>
      </li>

      <li className="flex items-center">
        <MdOutlineExplore /><button className="text-lg text-left">Explore</button>
      </li>

      <li className="flex items-center">
        <MdSlowMotionVideo /><button className="text-lg text-left	">Reels</button>
      </li>

      <li className="flex items-center">
        <TbMessage2Heart /><button className="text-lg text-left	 ">Messages</button>
      </li>

      <li className="flex items-center">
        <AiOutlineHeart /><button className="text-lg text-left">Notification</button>
      </li>

      <li className="flex items-center">
        <MdOutlineLibraryAdd />
        <button className="text-lg text-left" onClick={toggleModal}>Create</button>
      </li>

      <li className="flex items-center">
        <FiSearch /><button className="text-lg text-left"><Link to={'/profileuser'}>Profile</Link> </button>
      </li>

      <li className="flex items-center mt-9">
        <TbBrandThreads /><button className="text-lg text-left">Threads</button>
      </li>
      <li className="flex items-center">
        <CgDetailsMore /><button className="text-lg text-left">More</button>
      </li>
      
  </ul>
</div>
</div> 
  )
}

export default Navbar;