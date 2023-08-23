import { useEffect, useState } from "react";
import { getPost } from "../../api/Post";
import PostCard from "../../Components/PostCard";

 

const Media = () => {
  const [postData, setPostData] = useState(  '')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getPost()
    .then((data) => {
      setPostData(data)
      // console.log(postData);
      setLoading(false)
    })
  } , [])
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 bg-sky-50 h-full p-6 mt-5">
       

    {
      loading ? ('Loading....') :
      <>
       { postData &&
        postData.map(data => <PostCard
         key={data._id}
         data={data}
        ></PostCard>)
       }
      </>
    }

       
       
    </div>
  );
};

export default Media;