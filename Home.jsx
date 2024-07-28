import phoneImg from "../assets/phoneImg.svg";
import instagramLogo from '../assets/InstLogo.png';
import googlePlay from '../assets/googlePlay.png';
import microSoft from '../assets/microSoft.png';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ()=>{

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [Submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);
    setSubmitted(true);
    navigate('/dashboard'); 
  };

  const validateForm = () => {
    const errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    return errors;
  };

return(
<div className="containerHome">

<div className="w-full flex flex-row">
    <div className="Iconimage">
      <img src={phoneImg} />
    </div>
    
  <div className="login">
      <img src={instagramLogo} />
      <form onSubmit={handleSubmit} className="flex justify-center	content-center flex-col ml-10 w-64 gap-2">
        <input type="text" placeholder="Phone number, username, or email" value={username}  onChange={(e) => setUsername(e.target.value)}
            required />
        <input type="text" name="Password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} required />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

      <div className="ml-2 mt-34">
      <button type="submit" className="text-white	p-2 text-base	rounded-xl font-sans	bg-sky-500">Log in</button>
      </div>
      </form>

  <hr className="border-t border-gray-300 w-100 items-center mt-6" />  

   <div className="withFB">

     <span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#385185" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg> 
     </span>
     <h5>Log in with Facebook</h5>
   </div>

   <div>
   <p className="my-4 text-center text-sm	 text-sky-900">Forgot password?</p>
   </div>

    <div>
      <h1 className="border-2 w-50 p-6 mt-16 text-center">Don't have an account? 
      <Link className="mx-2 text-[#00a7f8]" to={'/auth/signup'}>Sign up</Link>
      </h1>
    </div>

 <div>
  <div className="text-center my-4">
   <span>Get an app.</span>   
  </div>

<div className="getApp">
   <div className="googlePlay">
      <a target="blank" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D159EDC6A-7FC4-425C-A738-6FE69027B086%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1">
      <img src={googlePlay} alt="" />
      </a>
    </div>  

    <div className="microSoft">
      <a target="blank" href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1020">
      <img src={microSoft} alt="" />
      </a>
    </div>
</div>  
</div> 
</div>
</div>

<div>
<div className="flex gap-x-6 text-gray-500 ps-80 pe-80 text-xs mt-20">
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

export default Home;