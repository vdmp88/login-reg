export const getUsersLS = () => {
  try {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : undefined;
  } catch (err) {
    console.log(err);
  }
};

export const setUsersLS = users => {
  try {
    localStorage.setItem("users", JSON.stringify(users));
  } catch (err) {
    console.log(err);
  }
};
