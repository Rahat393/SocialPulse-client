import { IoMdPhotos } from 'react-icons/io'
import { getImageUrl } from '../../api/uploadImg';
import { addPost } from '../../api/Post';
import { useContext, useState  } from 'react';
import { toast } from 'react-hot-toast';
import SmallSpinner from '../../Components/SmallSpinner';
import { useNavigate } from 'react-router-dom';
import   { AuthContext } from '../../Contexts/AuthProvider';
 

const Post = () => {
  
const {user} = useContext(AuthContext)
console.log(user);
  const [loading, setLoading] = useState(false)
 const navigate = useNavigate('/')
  const handlePosts = (event) => {
    event.preventDefault();
    const text = event.target.name.value;
    const img = event.target.img.files[0];
    const like = []
   setLoading(true)
    getImageUrl(img)
    .then((data) => {
       const postData ={
        text,
        image : data,
        like
       }
       addPost(postData)
       
       .then((data) => {
        setLoading(false)
        toast.success('Post Added')
        navigate('/media')
        console.log(data);
        
       })
       .catch((err) => {
        console.log(err);
       })
      //  console.log(postData);
    })
   
    // console.log(text, img );
  }
  return (
    <div className='mt-16'>
        <form onSubmit={handlePosts}  className='text-center shadow-style pt-4 m-7 bg-white w-3/5 mx-auto rounded-2xl'>
         
                <div className='mx-auto'>
                <input
                type="text"
                name="name"
                id="name"
                required
                placeholder='share your feelings here'
                className=" w-4/5 h-24  mx-auto p-5 bg-blue-50 rounded-3xl"
                data-temp-mail-org="0"
              />
                 </div>
                <hr className='mt-3 w-[90%] mx-auto' />
                <div className='flex justify-center align-center mx-auto  text-xl   mt-4 hover:bg-blue-50 p-2 w-60 rounded-lg '>
                    <IoMdPhotos ></IoMdPhotos>
                     
                    <h2 type='file' className='mb -mt-1  ml-2'  >Add Photos</h2>
                </div>
                <input name='img' id="img" accept="image/*"  type="file" className='file-input file-input-bordered   w-full max-w-xs' />
                   
                {!user?.uid && <p className='mt-3 text-red-500 font-semibold'>For add a post you need to logIn first.</p>}
                
                      {  
                  <button disabled={!user?.uid} type="submit" className='bg-blue-500 p-3 w-4/5   rounded-lg my-4 text-white   font-bold hover:bg-blue-600'>
 {
                      loading ? <SmallSpinner/> : 'Post'
                    }
                  </button>
                                
                      }
                      
                     

               
                
             </form>
              
    </div>
  );
};

export default Post;