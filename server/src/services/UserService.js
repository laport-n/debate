module.exports = class UserService {
  constructor(mongoose, usersModel){
    this.mongoose = mongoose;
    this.usersModel = usersModel;
  }

  async createUser(user){
    try {
      const userDocument = this.usersModel({
        username: user.username,
        email: user.email
      });
      const user = await userDocument.save();
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }

  getUserById(id){
  }

  getUserByEmail(email){
  }

  updateUser(user){
  }

  deleteUser(user){
  }
}