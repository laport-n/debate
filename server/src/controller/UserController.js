const UserService = require('./../services/UserService');

module.exports = class UserController {
  constructor(mongoose, usersModel){
    this.userService = new UserService(mongoose);
    this.usersModel = usersModel;
  }

  createUser(user){
    //Do something to verifie email etc..
    //If everything ok we can register a new entry in mongodb by calling the service
    const userDocument = this.usersModel({
      username: user.username,
      email: user.email
    });
    try {
      return this.userService.createUser(userDocument);
    } catch (err) {
      //Something wrong happened during the try of creating new entry
      throw new Error(err);
    }
  }
}
