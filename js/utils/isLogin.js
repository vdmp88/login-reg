const isLogin = () => {
  try {
    const user = localStorage.getItem('user');
    return !!user;
  } catch (e) {

  }
};

export default isLogin;
