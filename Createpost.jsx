import ReactModal from "react-modal"
import {AiOutlineClose} from "react-icons/Ai"
import { useState } from "react";

ReactModal.setAppElement("#react-modal");

const Createpost = ({createPostPop, toggleModal})=>{
  const [currentUser, setCurrentUser] = useState("");
  const [caption, setCaption]=useState("");
  const [location, setLocation]=useState("");
  const [tags, setTags]=useState("");
  const [mediaURL, setMediaURL]=useState("");
  const [musicURL, setMusicURL]=useState("");

  const handlePostsubmit = (e)=>{
    e.preventDefault();
    const postObj = {
      currentUser,
      caption,
      location,
      tags,
      mediaURL,
      musicURL
    }
  }



  return(

  <div>
      <ReactModal
      isOpen={createPostPop}
      onRequestClose={ toggleModal}
      > 

      <div onClick={toggleModal} className="text-2xl ms-auto w-96">
        <AiOutlineClose />
      </div>
         <div>
          <form action="#" onSubmit={handlePostsubmit}  className="flex flex-col">
            <label htmlFor="mediaURL">MediaURL</label>
            <input type="text" name="media" placeholder="photo/video" className='border px-2 w-96 py-3 mb-6 rounded-md' />
            
            <label htmlFor="mediaURL">Caption</label><br />
            <input type="text" name="media" placeholder="photo/video" className='border px-2 w-96 py-3 mb-6 rounded-md' />
              <br />
            <label htmlFor="mediaURL">Location</label>
            <input type="text" name="media" placeholder="photo/video" className='border px-2 w-96 py-3 mb-6 rounded-md' />

            <label htmlFor="mediaURL">Tag</label>
            <input type="text" name="media" placeholder="photo/video" className='border px-2 w-96 py-3 mb-6 rounded-md' />

            <label htmlFor="mediaURL">MusicURL</label>
            <input type="text" name="media" placeholder="photo/video" className='border px-2 w-96 py-3 mb-6 rounded-md' />

            <button className="flex flex-col border w-40 items-center bg-[#10afff] rounded-md p-2 font-semibold text-white">Share Post</button>
          </form>
         </div>
      </ReactModal>

  </div>
  )
}

export default Createpost;