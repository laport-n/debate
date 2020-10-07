const UserService = require('./../services/UserService');

module.exports = class UserController {
  constructor(mongoose, usersModel){
    this.userService = new UserService(mongoose, usersModel);
  }

  createUser(user){
    //Do something to verifie email etc..
    //If everything ok we can register a new entry in mongodb by calling the service
    try {
      return this.userService.createUser(user);
    } catch (err) {
      //Something wrong happened during the try of creating new entry
      throw new Error(err);
    }
  }
}
