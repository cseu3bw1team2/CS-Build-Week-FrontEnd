import axios from "axios";

export default function axiosAuth(options) {
  let token = "";
  try {
    token = window.sessionStorage.getItem("token");
    // token = localStorage.getItem('token')
    console.log(token)
  } catch (e) {
    console.log("error checking token");
  }
  const headers = {
    "Content-Type": "application/json",
    "Authorization": token
  };
  const optionsWithAuthHeader = { ...options, headers };
    // console.log(optionsWithAuthHeader)

  return axios(optionsWithAuthHeader);
}