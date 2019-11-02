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
    invalidEmail: {
      statusCode: 422,
      description: 'The email provided is not registered',
      responseType: 'invalidEmail',
    },
    invalidPassword: {
      statusCode: 422,
      description: 'Invalid password provided',
      responseType: 'invalidPassword'
    }
  },


  fn: async function ({email, password}) {
    const user = await User.findOne({email});
    if (!user) {throw 'invalidEmail';}
    const validPassword = await sails.config.globals.bcrypt.compare(password, user.password);
    if (!validPassword) {throw 'invalidPassword';}
    this.req.session.userId = user.id;
    // All done.
    return;
  }


};
