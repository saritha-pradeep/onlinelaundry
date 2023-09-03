import apis from "./apis";
async function fetchAPI({ url, method = "GET",...props }) {
  return await fetch(url, { method,mode: 'no-cors'})
    .then((res) => res.json())
    .catch((err) => err)
    .finally((res) => res);
}
export { fetchAPI, apis };
