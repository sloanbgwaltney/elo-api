module.exports = {


  friendlyName: 'Login',


  description: 'Login auth.',


  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true
    },

    password: {
      type: 'string',
      required: true
    }
  },


  exits: {
    invalidUsername: {
      statusCode: 422,
      description: 'The username provided is not registered'
    },
    invalidPassword: {
      statusCode: 422,
      description: 'Invalid password provided'
    }
  },


  fn: async function ({email, password}) {
    const user = await User.findOne({email});
    if (!user) {throw 'invalidUsername';}
    const validPassword = await sails.config.globals.bcrypt.compare(password, user.password);
    if (!validPassword) {throw 'invalidPassword';}
    // All done.
    return;
  }


};
