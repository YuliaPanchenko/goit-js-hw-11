export default function getImages(images){
  const BASE_URL ="https://pixabay.com";
  const END_POINT = "/api/";
  const params = new URLSearchParams({
    key: "44363127-b4cd04443a44f0f2a63a731a6",
    q: images, 
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url).then(res=>res.json());
}