/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'POST /api/v1/auth/login': { action: 'auth/login' },
  'POST /api/v1/auth/register': { action: 'auth/register' },
  'POST /api/v1/games/create-game': { action: 'games/create-game' }
};
