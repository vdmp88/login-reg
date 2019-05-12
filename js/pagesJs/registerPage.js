import isLogin from "./../utils/isLogin.js";
import { matchUser } from "../users.js";
import { Register } from "../auth/index.js";
import { User, VipUser } from "../auth/userCreating.js";

const regForm = document.getElementById("reg-form");
const checkStatus = regForm["isVip"];
const emailInput = document.getElementById("emailInput");

checkStatus.addEventListener("click", e => {
  const isChecked = e.target.checked;
  if (isChecked) {
    emailInput.classList.remove("hidden");
  } else {
    emailInput.classList.add("hidden");
  }
});

regForm.addEventListener("submit", ev => {
  ev.preventDefault();
  const isChecked = regForm["isVip"].checked;
  if (isChecked) {
    Register(
      new VipUser(
        regForm["firstName"].value,
        regForm["lastName"].value,
        regForm["userName"].value,
        regForm["password"].value,
        regForm["email"].value
      ).getVipUser()
    );
  } else {
    Register(
      new User(
        regForm["firstName"].value,
        regForm["lastName"].value,
        regForm["userName"].value,
        regForm["password"].value
      ).getUser()
    );
  }
});
