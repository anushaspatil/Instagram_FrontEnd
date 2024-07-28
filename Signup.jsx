import { useState } from "react";
import instaIcon from "../assets/InstLogo.png";
import googlePlay from '../assets/googlePlay.png';
import microSoft from '../assets/microSoft.png';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { registerUser } from "../redux/featureSlice/Auth.slice";


const Signup = ()=>{
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [email, setEmail]=useState("");
  // const [phoneNumber, setPhonenumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const register = ()=>{
   

  //   const respObj = JSON.stringify(user);
  //   console.log(respObj);
  //   // dispatch(respObj);
  // }

  // const handleOnSubmit = ()=>{
  //   dispatch(respObj)
  // }

  const handleSignup = (e)=>{
    e.preventDefault();
    // const userData = {
    //   username,password,email,
    // }
    dispatch(registerUser({ username, email, password, phone_number: Math.floor(Math.random() + 1) }))
    navigate("/dashboard")
  }

return(
<div className="Container">
  <div className="signUP">
    <form onSubmit={handleSignup} action="" className="signupForm">
   <div  className="instaIcon">
    <img src={instaIcon} /> 
   </div>

   <div className="text-base font-semibold text-center text-gray-500 px-12 mt-2 tracking-tight"> 
    <span>Sign up to see photos and videos from your friends.</span>  
   </div> 

   <div className="loginFB">
   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#FFFF" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#0095f6" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path></svg>   
   <button><p className="md:whitespace-pre">Log in with Facebook</p></button>
   {/* markdown-whitespace */}
   </div>
   <div  className="hrLine">
   <hr className="mt-4 mb-1"/><span className="text-sm">OR</span>  
   </div>

<div className="signupDetails">
   <div>
    <input value={username} onChange={e => setUsername(e.target.value)} type="text" id="email" name="firstname" placeholder="Full Name" required />
   </div>

   <div>
    <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="name" placeholder="Email"  />
   </div>

   <div>
    <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" placeholder="Password"  />
   </div>

   {/* <div>
    <input value={phoneNumber} onChange={e => setPhonenumber(e.target.value)} type="text" id="username" placeholder="phoneNumber"  />
   </div> */}

  <div className="formFooter">
   <h4>People who use our service may have uploaded your contact information to Instagram. <a target="blank" href="https://www.facebook.com/help/instagram/261704639352628">Learn More</a> </h4>
   <h4>By signing up, you agree to our <a target="blank" href="https://help.instagram.com/581066165581870/?locale=en_US">Terms</a> <a target="blank" href="https://www.facebook.com/privacy/policy">Privacy</a> <a target="blank" href="https://www.facebook.com/privacy/policy">Policy</a> and <a target="blank" href="https://help.instagram.com/1896641480634370/">Cookies Policy</a></h4>
   </div> 

   <button className="submitSign">Sign up</button>
</div> 
   
   
   </form>
  </div>

  <div>
  <div className="loginOption">
    <h4 className="flex flex-row md:whitespace-pre">Have an account?
    <Link className="text-sky-500" to={"/"}>Login</Link></h4>
  </div>
  </div>

<div className="w-80 justify-items-center mx-auto">
  <div className="text-center my-4">
   <span>Get an app.</span>   
  <div className="w-full h-20 flex flex-row">
   <div className="">
      <a target="blank" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D159EDC6A-7FC4-425C-A738-6FE69027B086%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1">
      <img className="w-60 h-20 p-1" src={googlePlay} alt="" />
      </a>
    </div>  

    <div className="">
      <a target="blank" href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1020">
      <img className="w-32 mt-4 h-12" src={microSoft} alt="" />
      </a>
    </div>
  </div>
  </div> 
</div>

<div>
<div className="flex gap-x-6 text-gray-500 ps-80 pe-80 text-xs mt-16">
    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://about.meta.com/"><span>Meta</span></a>
    </div>

    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://about.instagram.com/"><span>About</span></a>
    </div>

    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://about.instagram.com/en_US/blog"><span>Blog</span></a>
    </div>

    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://about.instagram.com/about-us/careers"><span>Jobs</span></a>
    </div>

    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://help.instagram.com/"><span>Help</span></a>
    </div>

    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://developers.facebook.com/docs/instagram"><span>API</span></a>
    </div>

    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"><span>Privacy</span></a>
    </div>

    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://help.instagram.com/581066165581870/"><span>Terms</span></a>
    </div>

    <div className="hover:underline decoration-sky-950 ">
      <a target="blank" href="https://www.instagram.com/explore/locations/"><span>Location</span></a>
    </div>

    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://www.instagram.com/web/lite/"><span className="md:whitespace-pre ">Instagram Lite</span></a>
    </div>

    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://www.threads.net/login"><span>Threads</span></a>
    </div>

    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://www.facebook.com/help/instagram/261704639352628"><span className="md:whitespace-pre">Contact Uploading & Non-Users</span></a>
    </div>

    <div className="hover:underline decoration-sky-950">
      <a target="blank" href="https://about.meta.com/technologies/meta-verified/"><span className="md:whitespace-pre">Meta Verified</span></a>
    </div>
</div>

<div className="flex ml-80 pl-80 mt-6 text-gray-500 gap-6 mb-20">
    <select className="w-20">
      <option value="En">English</option>
      <option value="En">हिन्दी</option>
      <option value="En">ಕನ್ನಡ</option>
      <option value="En">English(UK)</option>
      <option value="En">తెలుగు</option>
      <option value="En">മലയാളം</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
      <option value="En">বাংলা</option>
    </select>

 <div>
      <h4 className="md:whitespace-pre">&#169; 2023 Instagram from Meta</h4>
 </div>
  </div>
</div>  


</div>
  )
}

export default Signup;