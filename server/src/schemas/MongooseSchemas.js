const createUserSchema = (mongoose) => {
  return new mongoose.Schema({
    username: String,
    email: String,
  }, {
    timestamps: true
  });
};

const createTopicSchema = (mongoose) => {
  return new mongoose.Schema({
    title: String,
    tags : [String],
  }, {
    timestamps: true
  });
}

module.exports = { createUserSchema, createTopicSchema };
