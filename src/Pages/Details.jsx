import { useLoaderData } from "react-router-dom";

 

const Details = () => {

  const postData = useLoaderData()
  console.log(postData);
  return (
    <div className="mt-10 text-center mx-auto bg-sky-50 h-screen">
      <div  >
      <p className="text-xl py-2">{postData.text}</p>
      <img className="rounded-md mx-auto" src={postData.image} alt="" />
      </div>
    </div>
  );
};

export default Details;