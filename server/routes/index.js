const router = require('express').Router();
const healthcheck = require('./healthcheck.routes');
const {
	authCheck,
	// login,
	loginAfterCreation,
	createAuth,
	// resetPassword,
	// logout,
	// deleteAuth,
} = require('./auth.routes');
const { createUser } = require('./users.routes');

// Healthcheck to ensure you are connected to the database
router.get('/healthcheck', healthcheck);

// ------- AUTH -------- //
// Check auth to verify it is working
router.get('/auth', authCheck);
// Create login route for a user
// router.post('/auth/login', login);
// Logout user
// router.get('/auth/logout', logout);

// ------- Accounts -------- //
// Create new account
router.post('/users/create', createAuth, createUser, loginAfterCreation);

module.exports = router;
