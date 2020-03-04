import axios from "axios";

export default function axiosAuth(options) {
  let token = "";
  try {
    token = JSON.parse(localStorage.getItem("token"));
  } catch (e) {
    console.log("error checking token");
  }
  const headers = {
    "Content-Type": "application/json",
    "Authorization": token
  };
  const optionsWithAuthHeader = { ...options, headers };
    console.log(JSON.stringify(optionsWithAuthHeader))

  return axios(optionsWithAuthHeader);
}
