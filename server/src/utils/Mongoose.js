const {
  createUserSchema,
  createTopicSchema
} = require('./../schemas/MongooseSchemas');

const createSchemas = (mongoose) => {
  //createUser
  const UserSchema = createUserSchema(mongoose);
  //createTopic
  const TopicSchema = createTopicSchema(mongoose);

  const topicsModel = mongoose.model('topics', TopicSchema);
  const usersModel = mongoose.model('users', UserSchema);
  return { topicsModel, usersModel };
};

module.exports = { createSchemas };
