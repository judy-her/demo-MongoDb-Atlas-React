//will be responsible for creaiting users and events
const bcrypt = require('bcryptjs');

const User = require('../../models/user');

module.exports = {
  //logic to create user in database
  createUser: async (args) => {
    try {
      // find one with same email so we dont have duplicates
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error('User exists already.');
      }
      //by adding return here we are making it sort of asyncronous
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

      const user = new User({
        email: args.userInput.email,
        password: hashedPassword,
      });

      const result = await user.save();

      // this creates user, password null so we dont return password
      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
};
