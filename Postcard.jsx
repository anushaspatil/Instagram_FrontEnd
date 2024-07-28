import instaPost from "../assets/instaPost.jpg";
import { FaRegComment } from "react-icons/Fa";
import { FiSend } from "react-icons/Fi";
import profileImg from "../assets/profileImg.jpg";
import { FaRegHeart } from "react-icons/Fa";
import { FaRegBookmark } from "react-icons/Fa";
import { FaEllipsis } from "react-icons/fa6";



const Postcard = ()=>{
  return(
<div className="p-6 w-6/10">
<div className="align-center bg-white">
  <div className="flex flex-row gap-4 cursor-pointer">
    <img className="w-10 h-10 rounded-full" src={profileImg} alt="" />
    <small className="my-2 text-base font-medium	">Web_Development</small>
    <FaEllipsis className="w-6 my-2 mr-1 h-6"/>
  </div>
   <div className="flex flex-col content-center justify-center  py-4">
      <img src={instaPost} alt="" />
      <div className="flex flex-row justify-start mt-3 gap-4 cursor-pointer	">
      < FaRegHeart className="w-6 h-6  hover:text-gray-500" />
      < FaRegComment className="w-6 h-6 hover:text-gray-500" />
      < FiSend className="w-6 h-6 hover:text-gray-500" />
      <FaRegBookmark className="w-6 ml-96 h-6 hover:text-gray-500"/>
      </div>
   </div><hr className="my-6 border-gray-300" />
</div>    
</div>
  )
}

export default Postcard;