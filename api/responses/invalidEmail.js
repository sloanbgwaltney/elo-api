/**
 * invalidUsername.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.invalidUsername();
 *     // -or-
 *     return res.invalidUsername(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'invalidUsername'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function invalidEmail() {
  this.res.status(422).send({message: 'Invalid email provided'});
};
