import axios from "axios";

// http://localhost:8080/api/
const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const GetPosts = async () => await API.get("/posts/");
export const CreatePost = async (data) => await API.post("/posts/", data);
export const GenerateImageFromPrompt = async (data) =>
  await API.post("/generateImage/", data);
