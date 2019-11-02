/**
 * invalidPassword.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.invalidPassword();
 *     // -or-
 *     return res.invalidPassword(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'invalidPassword'
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

module.exports = function invalidPassword() {
  this.res.status(422).send({message: 'Invalid password provided'});
};
