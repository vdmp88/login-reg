import isLogin from "./../utils/isLogin.js";
import { getUser, getCurrencyUser, getCurrencyVip } from "./../utils/getUser.js";
import logout from "./../utils/logout.js";

if (!isLogin()) {
  window.location.replace("login.html");
}

getCurrencyUser();
getCurrencyVip();

const user = getUser();
const userNameDOM = document.getElementById("userName");
const userStatusDOM = document.getElementById("userStatus");
const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", e => {
  e.preventDefault();
  logout();
});

userNameDOM.innerHTML = `${user.firstName} ${user.lastName}`;
userStatusDOM.innerHTML = `${user.isVip ? "Vip user" : "Default user"}`;
