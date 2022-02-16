const router = require('express').Router();
const healthcheck = require('./healthcheck.routes');
const {
	authCheck,
	login,
	createAuth,
	resetPassword,
	logout,
	deleteAuth,
} = require('./auth.routes');
const { createUser } = require('./users.routes.ts');

// Healthcheck to ensure you are connected to the database
router.get('/healthcheck', healthcheck);

// ------- AUTH -------- //
// Check auth to verify it is working
router.get('/auth', authCheck);
// Create login route for a user
router.post('/auth/login', login);
// Logout user
router.get('/auth/logout', logout);

// ------- Users -------- //
// Create new user
router.post('/users/create', createUser);

module.exports = router;
