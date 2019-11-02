module.exports = {

  sync: true,
  friendlyName: 'Transform rating',


  description: '',


  inputs: {
    playerRating: {
      type: 'number',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: function ({playerRating}) {
    return Math.pow(10, playerRating/400);
  }


};

