const { db, auth } = require('../config/firebase');

const createUser = async (req, res) => {
    const { user } = req.body;
    try {
        if (user) {
            console.log('user:',user);
            const ref = db.collection('users').doc(user.email);
            const doc = await ref.get();
            console.log('ref:', ref)
            if (doc.exists) {
                res.status(401).send({
                    error: {
                        message: 'There is already an account associated with this email?',
                    }
                });
            } else {
                console.log('doc doesnt exist');
                auth.createUserWithEmailAndPassword(user.email, user.password)
                    .then(cred => {
                        ref.set({
                            familyname: '',
                            familycode: '',
                            fname: user.fname,
                            lname: user.lname,
                            email: user.email,
                            authid: cred.user.uid,
                            accounttype: 'parent',
                            accountcreation: new Date(),
                        });
                        res.status(200).send({
                            result: {
                                message: 'User successfully created',
                                data: {
                                    familyname: '',
                                    familycode: '',
                                    fname: user.fname,
                                    lname: user.lname,
                                    email: user.email,
                                    authid: cred.user.uid,
                                    accounttype: 'parent',
                                    accountcreation: new Date(),
                                }
                            }
                        })
                    })
                };
        } else {
            res.status(401).send({
                error: {
                    message: 'No user was created'
                }
            })
        }
    } catch (error) {
        console.log('error', error);
        res.status(500).send({
            error: {
                message: 'Something went wrong connecting to the database.'
            }
        })
    }
}

module.exports = {createUser};