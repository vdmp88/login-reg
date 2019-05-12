export const Login = (obj) => {

  if (obj.err) {
    return obj.err;
  }
  localStorage.setItem('user', JSON.stringify(obj));
  window.location.replace('index.html');
};




