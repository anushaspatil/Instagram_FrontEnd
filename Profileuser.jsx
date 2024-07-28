import { Link } from "react-router-dom";
import cakeIcon from "../assets/cake.png"
import NavBar from "../components/Navbar";
import profilePicture from "../assets/followPerson.jpg";
import profileImg from "../assets/profileImg.jpg";
import settingIcon from "../assets/setting.png";
import uploadImg from "../assets/plus.png";
import cameraImg from "../assets/camera.png";


const Profileuser = ()=>{
  return(
  <div className="container w-full h-screen flex">
    <div className="flex">
      <NavBar />
      <div className="profileImg ml-40">
        <img className="w-40 h-40 m-20 rounded-full" src={profilePicture} alt="" />
      </div>
    
      <div className="relative mt-40">
      <img  className="w-20 h-20 mt-40 absolute" src={uploadImg} alt="" />
      <h4 className="mt-60 pl-6">new</h4>
      <hr className=" border-2 border-black mt-8 w-full" />
      <div className="flex flex-col justify-center item-center mt-8	">
      <img className="w-20 ml-32" src={cameraImg} alt="" />
      <h3 className=" text-xl font-bold ml-28 ">Share Photos</h3>
      </div>
      
      </div>

      
      
      <div className="flex flex-col items-start p-2 mb-96 space-y-4 mr-96">
      <div className="flex flex-row justify-between items-center h-10  p-2">
        <h5>Web_Development</h5>
        <button className=" text-sm w-28 	flex-shrink-0 rounded-md ml-4 py-1 bg-gray-100">Edit profile</button>
        <button className="text-sm w-28 ml-4 mr-2	flex-shrink-0 rounded-md py-1 bg-gray-100">View Archive</button>
        <img className="w-6 h-6 flex-shrink-0" src={settingIcon} />
      </div>

      <div className="flex flex-row justify-between items-center h-10 p-2">
        <h4>0 posts</h4>
        <h4 className=" text-sm w-28 ml-4	flex-shrink-0 ">0 followers</h4>
        <h4 className="text-sm w-28 ml-4 mr-2	flex-shrink-0 ">0 following</h4>
      </div>

      <h4 className="font-bold">Web_Development</h4>
      
      </div>
    </div>

    
  </div>
  )
}

export default Profileuser;


























{/* <div className="dobCard">
        <img className="w-20 ml-28" src={cakeIcon} alt="" />
      </div>
      <div>
          <h2 className="text-center">Add Your Birthday</h2>
          <h4>This won't be a part of your public profile.</h4>
      </div> */}