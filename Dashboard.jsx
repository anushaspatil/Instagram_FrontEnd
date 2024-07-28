import { useState } from "react";
import Createpost from "../components/Createpost";
import FollowList from "../components/FollowList";
import Navbar from "../components/Navbar";
import Postcard from "../components/Postcard";



const Dashboard = ()=>{
  const [createPostPop, setCreatePostpop] = useState(false);
  const toggleModal = ()=>{
    setCreatePostpop(!createPostPop);
  }

return(
<>
<div className="flex flex-row justify-between bg-transparent">
  <Navbar toggleModal={toggleModal} />
 <div className="flex w-6/12 h-full ml-36 p-10 py-20 "> 
  <div className="">
    <div className="">
     {
      [1,2,3,4,5,6,7,8].map((idx)=>{
      return (<Postcard key={idx} />)
       })
     }
    </div>
  </div>
 </div>


<div>
  <h1>< FollowList /></h1>
</div>

</div>

<Createpost createPostPop={createPostPop} toggleModal={toggleModal} />
  
</>   
  )
}

export default Dashboard;