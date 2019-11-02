/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  await bootstrapUsers();

};


async function bootstrapUsers() {
  if (await User.count() > 0) {
    return;
  }
  const unusedUser1 = await User.create(
    {username: 'testtest', password: await sails.config.globals.bcrypt.hash('testtest', 10), email: 'test@test.com'},
  ).fetch();
  const unusedUser2 = await User.create(
    {username: 'testtest2', password: await sails.config.globals.bcrypt.hash('testtest2', 10), email: 'test2@test.com'},
  ).fetch();
  return;
}
