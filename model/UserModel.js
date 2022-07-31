const user = require("../schema/userSchema");
const { ObjectId } = require("mongoose").Types;

class UserModel {
  static async createUser(postData) {
    try {
      const userData = new user({ ...postData });
      await userData.save();
      return {
        code: 201,
        message: "User created successfully. post method .",
        data: userData,
      };
    } catch (error) {
      return {
        code: 500,
        status: false,
        message: "Internal Server Error.",
      };
    }
  }

  static async listUser(getData) {
    try {
      let response;
      const userList = await user.findOne(getData);
      response = {
        code: 200,
        message: "User list successfully. get method .",
        data: userList,
      };
      response.pagination = pagination;
      return response;
    } catch (error) {
      return {
        code: 500,
        status: false,
        message: "Internal Server Error.",
      };
    }
  }

  
}
module.exports = UserModel;
// chalu rehne den vs code me mere system pe tera takse kar dunga
// Kya code likha h ye tune ?? maine jo file send ki hai  wo
// Ha usme bhi routes ko controllers se connect kiya h models se nahi waaha kuch node commant nahi cl rahi thi to maine bs likh diya ye sab c
// check nahi kiya terminal clta to error sare show ho jaate