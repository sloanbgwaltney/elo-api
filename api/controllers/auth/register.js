module.exports = {


  friendlyName: 'Register',


  description: 'Register auth.',


  inputs: {
    email: {
      type: 'string',
      isEmail: true,
      required: true
    },

    username: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    }
  },


  exits: {
    emailAlreadyRegistered: {
      statusCode: 409,
      description: 'User tried to register with an email that is already registered',
      responseType: 'emailAlreadyRegistered'
    },

    usernameAlreadyRegistered: {
      statusCode: 409,
      description: 'User tried to register with a username that is already registered',
      responseType: 'usernameAlreadyRegistered'
    }
  },


  fn: async function ({email, username, password}) {
    const user = await User.find(
      {or: [
        {email},
        {username}
      ]}
    );
    if (user[0]) {
      if (user[0].email === email) {throw 'emailAlreadyRegistered';}
      throw 'usernameAlreadyRegistered';
    }
    const newUser = {username, password: await sails.config.globals.bcrypt.hash(password, 10), email};
    // All done.
    return User.create(newUser);
  }


};
