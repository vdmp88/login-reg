export class User {
  constructor(
    firstName = "Vasya",
    lastName = "Pupkin",
    userName = "vasyapupkin",
    password = "2wsx3edc"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.isVip = false;
  }

  getUser() {
    const { firstName, lastName, userName, password, isVip } = this;
    return {
      firstName,
      lastName,
      userName,
      password,
      isVip
    };
  }
}

export class VipUser extends User {
  constructor(
    firstName,
    lastName,
    userName,
    password,
    email = "undefined@undefined.com"
  ) {
    super(firstName, lastName, userName, password);
    this.email = email;
  }

  getVipUser() {
    return {
      ...this.getUser(),
      email: this.email,
      isVip: true
    };
  }
}
