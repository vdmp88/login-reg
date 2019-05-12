import isLogin from './../utils/isLogin.js';
import { matchUser } from "../users.js";
import { Login } from '../auth/index.js';


if (isLogin()) {
  window.location.replace('index.html');
}

const loginForm = document.getElementById('login-form');
const errorSpan = document.querySelector('.error-msg');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const res = matchUser(loginForm['userName'].value, loginForm['password'].value);
  if (res.err) {
    errorSpan.classList.remove('hidden');
    errorSpan.textContent = res.err;
  } else {
    Login(res);
  }

});