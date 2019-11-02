module.exports = {


  friendlyName: 'Create game',


  description: '',


  inputs: {
    playerOneId: {
      type: 'number',
      required: true
    },
    playerTwoId: {
      type: 'number',
      required: true
    }
  },


  exits: {
    invalidPlayerId: {
      statusCode: 422,
      description: 'A player entered a invalid playerId on one of the players'
    }
  },


  // TODO: restrict
  fn: async function ({playerOneId, playerTwoId}) {
    const players = await User.find(
      {
        or: [
          {id: playerOneId},
          {id: playerTwoId}
        ]
      }
    );
    if (players.length !== 2) {throw 'invalidPlayerId';}
    const playerOne = players.find((player) => player.id === playerOneId);
    const playerTwo = players.find((player) => player.id === playerTwoId);
    const transformedP1Rating = sails.helpers.transformRating(playerOne.rating);
    const transformedP2Rating = sails.helpers.transformRating(playerTwo.rating);
    const sumRating = transformedP1Rating + transformedP2Rating;
    const playerOneExpectedScore = transformedP1Rating/sumRating;
    const playerTwoExpectedScore = transformedP2Rating/sumRating;
    const game = await Game.create(
      {
        playerOneInitalRating: playerOne.rating,
        playerTwoInitalRating: playerTwo.rating,
        playerOneExpectedScore,
        playerTwoExpectedScore
      }
    ).fetch();
    // All done.
    return game;

  }


};
