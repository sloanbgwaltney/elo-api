/**
 * emailAlreadyRegistered.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.emailAlreadyRegistered();
 *     // -or-
 *     return res.emailAlreadyRegistered(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'emailAlreadyRegistered'
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

module.exports = function emailAlreadyRegistered() {
  this.res.status(409).send({message: 'Email already registered'});
};
