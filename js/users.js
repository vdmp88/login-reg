import { setUsersLS, getUsersLS } from "./utils/usersLocalStorage.js";

let users = [];

if (getUsersLS()) {
  users = getUsersLS();
} else {
  users = [
    {
      userName: "user",
      password: "user",
      firstName: "Vadim",
      lastName: "Pakharuk",
      isVip: false
    },
    {
      userName: "vipUser",
      password: "vipUser",
      firstName: "Vadim",
      lastName: "Pakharuk",
      isVip: true,
      email: "vadim.pakharuk@gmail.com"
    }
  ];
}

export const matchUser = (userName, password) => {
  const matchedUser = users.filter(
    user => user.userName === userName && user.password === password
  );
  if (matchedUser.length > 0) {
    // let returningUser = Object.assign({}, matchedUser[0]);
    // delete returningUser.password;
    // return returningUser;
    return {
      ...matchedUser[0],
      password: null
    };
  } else {
    return {
      err: "Incorrect username or password"
    };
  }
};

export const regUser = userObj => {
  users.push(userObj);
  setUsersLS(users);
};
