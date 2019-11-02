/**
 * usernameAlreadyRegistered.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.usernameAlreadyRegistered();
 *     // -or-
 *     return res.usernameAlreadyRegistered(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'usernameAlreadyRegistered'
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

module.exports = function usernameAlreadyRegistered() {
  this.res.status(409).send({message: 'Username already registered'});
};
