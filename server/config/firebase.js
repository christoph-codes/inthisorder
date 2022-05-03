require('dotenv').config();
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');

const serviceAccount = require('./ito2-a697c-e4741d895225.json');

const app = initializeApp({
	credential: cert(serviceAccount),
});

const auth = getAuth(app);
const db = getFirestore(app);

module.exports = { auth, db };
