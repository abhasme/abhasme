const UserModel = require("../model/UserModel");
class UserController {
  static userRegistration(req, res) {
    const postData = req.body;
    UserModel.userRegistration(postData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

  static userLogin(req, res) {
    const getData = req.query;
    UserModel.userLogin(getData)
      .then((result) => res.status(result.code).json(result))
      .catch((err) => res.status(err.code).json(err));
  }

}
module.exports = UserController;
