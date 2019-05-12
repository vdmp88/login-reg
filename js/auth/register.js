import { regUser } from "./../users.js";
import { Login } from "./index.js";

export const Register = userObj => {
  console.log(userObj);
  regUser(userObj);
  Login(userObj);
  return;
};
