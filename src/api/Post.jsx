 
 export const addPost = async (postData) => {
  const url = `http://localhost:5000/post`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
     
    },
    body: JSON.stringify(postData),
  });

  const data = await response.json();

  return data;
};

export const getPost = async() => {
  const response = await fetch('http://localhost:5000/post' )
  const data = await response.json()
  return data;
}