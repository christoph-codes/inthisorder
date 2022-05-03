const { auth } = require('../config/firebase');

const authCheck = async (req, res, next) => {
	const { idToken } = req.body.result;
	console.log('idtoken:', idToken);
	if (idToken) {
		try {
			auth.currentUser.getIdToken().then((decodedToken) => {
				const uid = decodedToken;
				console.log('uid:', uid);
				// auth.getUserByEmail(uid).then((user) => {
				// 	console.log('user:', user);
				// 	if (user) {
				// 		res.status(200);
				// 		req.body.result = user;
				// 		next();
				// 	} else {
				// 		res.status(401).send({
				// 			error: {
				// 				message: 'User not found',
				// 			},
				// 		});
				// 	}
				// });
			});
		} catch (err) {
			if (err) {
				console.log('error:', err);
			}
		}
	} else {
		// User is signed out
		res.status(401).send({
			error: { message: 'User is not logged in' },
		});
	}
};

const createAuth = async (req, res, next) => {
	console.log('user:', req.body);
	const { email, password, fname, lname } = req.body;
	if (email && password && fname && lname) {
		// Create new account
		try {
			// check to see if user already exists
			auth.getUserByEmail(email).then((user) => {
				res.status(401).send({
					error: {
						message:
							'An account already exists with these credentials.',
					},
				});
			});
			// Continue creating new account
			auth.createUser({
				email,
				password,
				displayName: `${fname} ${lname}`,
			})
				.then((firebaseUser) => {
					const newUser = {
						authid: firebaseUser.uid,
						fname,
						lname,
						email: firebaseUser.email,
						lastLoggedInDate: new Date(),
						accounttype: 'parent',
						familycode: '',
						familyname: '',
						accountcreation: new Date(),
					};
					res.status(201);
					req.body.user = newUser;
					next();
				})
				.catch((error) => {
					if (error) {
						res.status(401).send({
							error: { message: error.message },
						});
						return;
					}
					res.status(401).send({
						error: {
							message:
								'There was an issue creating your account.',
						},
					});
				});
		} catch (err) {
			console.log('err:', err);
			if (err) {
				if (err.code === 'auth/email-already-in-use') {
					res.status(401).send({
						error: { message: 'Email already in use' },
					});
					return;
				}
				res.status(500).send({
					error: {
						message: err,
					},
				});
			} else {
				res.status(500).send({
					error: 'There was an issue connecting to the server',
				});
			}
		}
	} else {
		res.status(400).send({
			error: {
				message:
					'You must enter all of the required fields to create an account.',
			},
		});
	}
};

const deleteAuth = async (req, res) => {
	const { userId } = req.body;
	if (userId) {
		try {
			const user = auth.currentUser;
			await fireAuth
				.deleteUser(user)
				.then((result) => {
					res.status(200).send({
						message: 'Successfully deleted user',
						result,
					});
				})
				.catch((err) => {
					console.log('delete auth err:', err);
					res.status(400).send({
						error: {
							message: err.message,
						},
					});
				});
		} catch (err) {
			if (err) {
				res.status(500).send({
					error: {
						message: err,
					},
				});
			} else {
				res.status(500).send({
					error: 'There was an issue while trying to delete the user from the database',
				});
			}
		}
	} else {
		res.status(400).send({
			error: {
				message: 'You must provide a userId to delete a user',
			},
		});
	}
};

const resetPassword = async (req, res) => {
	// TODO: Create reset password function
	console.log('req', req);
	console.log('res', res);
	console.log('reset password');
};

const loginAfterCreation = async (req, res) => {
	const { token } = req.body.result;
	console.log('result:', token);
	if (token) {
		try {
			auth.verifyIdToken(token)
				.then((decodedToken) => {
					// const uid = decodedToken.uid;
					console.log('decodedToken:', decodedToken);
					// auth.getUserByEmail(uid).then((user) => {
					// 	console.log('user:', user);
					// 	if (user) {
					// 		res.status(200);
					// 		req.body.result = user;
					// 		next();
					// 	} else {
					// 		res.status(401).send({
					// 			error: {
					// 				message: 'User not found',
					// 			},
					// 		});
					// 	}
					// });
				})
				.catch((err) => {
					console.log('catch: error', err);
				});
		} catch (err) {
			if (err) {
				console.log('error:', err);
			}
		}
	} else {
		// User is signed out
		res.status(401).send({
			error: { message: 'User is not logged in' },
		});
	}
};

const login = async (req, res) => {
	const { email, password } = req.body.result;
	if (email && password) {
		try {
			await fireAuth
				.signInWithEmailAndPassword(auth, email, password)
				.then(async (userCred) => {
					const { user } = userCred;
					console.log('user', user.uid);

					// db.collection('users')
					// 	.doc(email)
					// 	.get()
					// 	.then((result) => {
					// 		console.log('user has been found', result);
					// 	});

					// const userCollection = await db('users');
					// TODO: Create route for creating a new user and inserting all of this.
					// const newUser = await userCollection.findOne({
					// 	_id: user.uid,
					// });
					// if (newUser) {
					// 	const doc = { _id: newUser._id };
					// 	const setter = {
					// 		$set: {
					// 			lastLoggedInDate: new Date(),
					// 		},
					// 	};
					// 	const loginAndUpdate = await userCollection.updateOne(
					// 		doc,
					// 		setter
					// 	);
					// 	if (loginAndUpdate) {
					// 		res.status(200).send({
					// 			message: 'Successfully logged in',
					// 			result: loginAndUpdate,
					// 			user: newUser,
					// 		});
					// 	} else {
					// 		res.status(400).send({
					// 			error: {
					// 				message:
					// 					'There was an issue logging in the user and updateing the last logged in date',
					// 			},
					// 		});
					// 	}
					// } else {
					// 	res.status(401).send({
					// 		error: {
					// 			message: 'This is not a valid user',
					// 		},
					// 	});
					// }
				})
				.catch((err) => {
					switch (err.code) {
						case 'auth/user-not-found':
							res.status(401).send({
								error: {
									message:
										'These credentials do not match any accounts in our records.',
								},
							});
							return;
						case 'auth/wrong-password':
							res.status(401).send({
								error: {
									message:
										'You have entered the wrong password. Please try again.',
								},
							});
							return;
						case 'auth/internal-error':
							res.status(401).send({
								error: {
									message:
										'Something went wrong. Please try again.',
								},
							});
							return;
						default:
							res.status(401).send({
								error: {
									message: err.message,
								},
							});
							break;
					}
				});
		} catch (err) {
			if (err) {
				res.status(400).send({
					error: {
						message: err.message,
					},
				});
			}
			res.status(400).send('Big issue with authentication');
		}
	} else {
		res.status(400).send('You must enter a valid email and password');
	}
};

const logout = async (req, res) => {
	try {
		await fireAuth
			.signOut(auth)
			.then(() => {
				res.status(200).send('Successfully logged out user');
			})
			.catch(() => {
				res.status(400).send({
					error: {
						message: 'Something went wrong logging out',
					},
				});
			});
	} catch {
		res.status(500).send({
			error: {
				message: 'Something went wrong logging out',
			},
		});
	}
};

module.exports = {
	authCheck,
	login,
	createAuth,
	deleteAuth,
	resetPassword,
	logout,
	loginAfterCreation,
};
