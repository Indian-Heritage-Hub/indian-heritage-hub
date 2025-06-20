import axios from "axios";
import { baseUrl } from "./apiconfig";

export async function userSignIn(email, passwd) {
  const url = `${baseUrl}/users/signin`;
  try {
    const resp = await axios.post(url, { email, passwd });
    if (resp.data.status !== "success") throw new Error(resp.data.message);
    return resp.data.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Login failed");
  }
}

export async function userSignUp(email, passwd, name, mobile, addr) {
  const url = `${baseUrl}/users/signup`;
  try {
    const resp = await axios.post(url, { email, passwd, name, mobile, addr });
    if (resp.data.status !== "success") throw new Error(resp.data.message);
    return resp.data.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Signup failed");
  }
}
