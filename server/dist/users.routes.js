var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { db, auth } = require('../config/firebase');
const createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { user } = req.body;
    try {
        if (user) {
            const ref = db.collection('users').doc(user.email);
            const doc = yield ref.get();
            if (doc.exists) {
                res.status(401).send({
                    error: {
                        message: 'There is already an account associated with this email?',
                    }
                });
            }
            else {
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
                    });
                });
            }
            ;
        }
        else {
            res.status(401).send({
                error: {
                    message: 'No user was created'
                }
            });
        }
    }
    catch (error) {
        console.log('error', error);
        res.status(500).send({
            error: {
                message: 'Something went wrong connecting to the database.'
            }
        });
    }
});
module.exports = { createUser };
//# sourceMappingURL=users.routes.js.map