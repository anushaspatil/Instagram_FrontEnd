import Followperson from "../assets/followPerson.jpg";
import Followperson2 from "../assets/followPerson2.jpg"
import Followperson3 from "../assets/followPerson3.jpg"

const FollowList = ()=>{
  return(
    <div className="sticky top-0 pt-8 w-80 my-16 ml-16 h-[100vh] ">
      <h1 className="font-normal	text-gray-500">Suggested for you</h1>
      <div className="flex gap-4 w-66 p-2 my-2 md:whitespace-pre ">
        <img className="rounded-full w-12 h-12" src={Followperson} />
        <h1 className="font-semibold">Letstalkcinemaa<p className="font-normal text-xs">Suggested for you</p></h1>
        <button className="items-center text-[#00a7f8] hover:text-sky-950 font-semibold">Follow</button>
      </div>

      <div className="flex sticky gap-4 w-66 p-2 pt-4 my-2 md:whitespace-pre ">
        <img className="rounded-full w-12 h-12" src={Followperson2} />
        <h1 className="font-semibold">Shiva<p className="font-normal text-xs ">Suggested for you</p></h1>
        <button className=" text-[#00a7f8] hover:text-sky-950 font-semibold">Follow</button>
      </div>

      <div className="flex sticky gap-4 w-66 p-2 my-2 md:whitespace-pre "> 
        <img className="rounded-full w-12 h-12" src={Followperson3} />
        <h1 className="font-semibold">LetsUpgraade<p className="font-normal text-xs">Suggested for you</p></h1>
        <button className=" text-[#00a7f8] hover:text-sky-950 font-semibold">Follow</button>
      </div>

    </div>
  )
}

export default FollowList;