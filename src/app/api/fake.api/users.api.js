const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("users")));
    }, 1000);
  });

const checkAuthData = ({ email, password }) => {
  const users = JSON.parse(localStorage.getItem("users"));
  return new Promise((resolve, reject) => {
    if (users) {
      const user = users.find((user) => user.email === email);
      if (user) {
        if (user.password === password) {
          resolve(
            localStorage.setItem("userOfPiggiBank", JSON.stringify(user))
          );
        } else {
          reject("Неправильный пароль!");
        }
      } else {
        reject("Пользователя с этим email не найдено!");
      }
    } else {
      reject("Ещё нет зарегистрированных пользователей, будь первым!");
    }
  });
};

const addUser = ({ userData }) => {
  const users = JSON.parse(localStorage.getItem("users"));

  return new Promise((resolve, regect) => {
    if (users && users.find((user) => user.email === userData.email)) {
      window.setTimeout(function () {
        regect("Аккаунт с заданным Email`ом уже существует");
      }, 1000);
    } else {
      window.setTimeout(function () {
        resolve(
          users
            ? localStorage.setItem(
                "users",
                JSON.stringify([...users, userData])
              )
            : localStorage.setItem("users", JSON.stringify([userData]))
        );
      }, 1000);
    }
  });
};

export default { fetchAll, addUser, checkAuthData };
