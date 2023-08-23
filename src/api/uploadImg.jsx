export const getImageUrl = async (img) => {
  const formData = new FormData();
  formData.append("image", img);
  const image_upload_key = import.meta.env.VITE_IMAGE_UPLOAD_KEY

  const url = `https://api.imgbb.com/1/upload?expiration=600&key=${image_upload_key}`
console.log(url);
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  // console.log(data);
  return data.data.display_url;
};