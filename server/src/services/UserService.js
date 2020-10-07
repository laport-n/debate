module.exports = class UserService {
  constructor(mongoose){
    this.mongoose = mongoose;
  }

  async createUser(userModel){
    try {
      const user = await userModel.save();
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
