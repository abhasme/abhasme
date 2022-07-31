const UserController = require("../controller/UserController");
module.exports = (app) => {
  app.post("/user-registration", UserController.userRegistration);
  app.get("/user-login", UserController.userLogin);
};
