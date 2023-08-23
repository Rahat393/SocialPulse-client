 
import {  BiLike} from 'react-icons/bi'
import {  GoComment } from 'react-icons/go'
import { BiDetail   } from 'react-icons/bi'
import { Link } from 'react-router-dom';
 

const PostCard = (data) => {
     const id = data.data._id
    //  console.log(data);
    // console.log(data.data.like?.length );
  //  console.log('hello', data.data._id);
  // console.log( props?.postData);


  const likePost = async (id) =>{
    const response = await fetch(
      `http://localhost:5000/like/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          },
        body: JSON.stringify(id),
      }
    );
    const data = await response.json();
  return data;
     
  }
  
  return (
    <div  >
       <div className="shadow-lg bg-white h-80  rounded-md" >
        <p className="py-2 ps-6 text-lg">{data.data.text}</p>
        <img className="w-80  text-center  mx-auto rounded-md" src={data.data.image} alt="" />
        <p className='ms-10'><small>{data.data.like?.length} likes</small></p>
        <hr className="mt-1  w-[90%] mx-auto" />
        <div className='flex justify-evenly mt-2'>
        <button   className='flex items-center gap-2 cursor-pointer hover:bg-slate-100 px-3'><BiLike className='text-xl  '/> <p>Like</p></button>
        <div className='flex items-center gap-2 cursor-pointer hover:bg-slate-100 px-3'><GoComment className='text-xl  '/><p>Comment</p></div>
        <div className='flex items-center gap-2 cursor-pointer hover:bg-slate-100 px-3'> <Link className='flex items-center gap-2' to={`/details/${data?.data._id}`}><BiDetail className='text-xl  '/> <p>Details</p></Link>  </div>
        </div>
        
       </div>
    </div>
  );
};

export default PostCard;