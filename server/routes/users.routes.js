const { db } = require('../config/firebase');

const createUser = async (req, res, next) => {
	const { user } = req.body.result;
	try {
		if (user) {
			const ref = db.collection('users').doc(user.email);
			// Check if user exists
			await ref.get().then((doc) => {
				if (doc.exists) {
					res.status(401).send({
						error: {
							message: 'This user exists already',
						},
					});
				}
			});
			await ref
				.set(user)
				.then((firestoreUser) => {
					res.status(200).send({
						message: 'Successfully created user',
						data: firestoreUser,
					});
				})
				.catch((err) => {
					if (err) {
						res.status(400).send({
							error: {
								message: err.message,
							},
						});
					} else {
						res.status(400).send({
							error: {
								message:
									'There was an issue while trying to create the user',
							},
						});
					}
				});
		} else {
			res.status(401).send({
				error: {
					message: 'No user was created',
				},
			});
		}
	} catch (error) {
		console.log('error', error);
		res.status(500).send({
			error: {
				message: 'Something went wrong connecting to the database.',
			},
		});
	}
};

module.exports = { createUser };
